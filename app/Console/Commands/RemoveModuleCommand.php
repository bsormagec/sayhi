<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class RemoveModuleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'remove:module {name : The name of the module (singular form)} {--M|migrations : Whether to remove migration files} {--F|force : Force delete without confirmation}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove a module and its associated files';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $singularName = $this->argument('name');
        $pluralName = Str::plural($singularName);

        $singularNameLower = Str::lower($singularName);
        $pluralNameLower = Str::plural($singularNameLower);

        $singularStudly = Str::studly($singularName);
        $pluralStudly = Str::studly($pluralName);

        if (!$this->option('force') && !$this->confirm("Are you sure you want to delete the {$singularStudly} module?")) {
            $this->info('Operation canceled.');
            return Command::SUCCESS;
        }

        $this->info("Removing {$singularStudly} module...");

        // Remove Backend Files
        $this->removeFile(app_path("Http/Controllers/{$pluralStudly}Controller.php"));
        $this->removeFile(app_path("Models/{$singularStudly}.php"));
        $this->removeFile(app_path("Http/Requests/{$pluralStudly}Request.php"));
        $this->removeFile(app_path("Http/Resources/{$singularStudly}Resource.php"));
        $this->removeFile(app_path("Http/Resources/{$singularStudly}Collection.php"));

        // Remove Frontend Files
        $this->removeFrontendFiles($pluralNameLower);

        // Remove routes
        $this->removeRoutes($pluralNameLower, $pluralStudly);

        // Remove sidebar entry
        $this->removeSidebarEntry($singularStudly, $pluralNameLower);

        // Remove migrations if requested
        if ($this->option('migrations')) {
            $this->removeMigrations($pluralNameLower);
        } else {
            $this->info("Migration files were not removed. Use --migrations option to remove them.");
        }

        $this->info("{$singularStudly} module successfully removed!");

        return Command::SUCCESS;
    }

    /**
     * Remove a file if it exists
     */
    private function removeFile($path)
    {
        if (File::exists($path)) {
            File::delete($path);
            $this->info("Removed: {$path}");
        } else {
            $this->warn("File not found: {$path}");
        }
    }

    /**
     * Remove frontend files
     */
    private function removeFrontendFiles($pluralNameLower)
    {
        $frontendDir = resource_path("js/pages/{$pluralNameLower}");

        if (File::isDirectory($frontendDir)) {
            File::deleteDirectory($frontendDir);
            $this->info("Frontend directory removed: {$frontendDir}");
        } else {
            $this->warn("Frontend directory not found: {$frontendDir}");
        }
    }

    /**
     * Remove routes from web.php
     */
    private function removeRoutes($pluralNameLower, $pluralStudly)
    {
        $routesPath = base_path('routes/web.php');

        if (File::exists($routesPath)) {
            $routesContent = File::get($routesPath);
            $modified = false;

            // Pattern for removing use statements for controller
            $usePattern = "/use App\\\\Http\\\\Controllers\\\\{$pluralStudly}Controller;\n/";
            $newContent = preg_replace($usePattern, '', $routesContent);
            if ($newContent !== $routesContent) {
                $routesContent = $newContent;
                $modified = true;
            }

            // More flexible pattern for route resource and route put
            $routePattern = "/\s*\/\/\s*{$pluralStudly}\s*routes\s*\n\s*Route::resource\(['\"]{$pluralNameLower}['\"]\s*,\s*(?:\\\\App\\\\Http\\\\Controllers\\\\)?{$pluralStudly}Controller::class\);\s*\n\s*Route::put\(['\"]{$pluralNameLower}\/{$pluralNameLower}\/restore['\"]\s*,\s*\[(?:\\\\App\\\\Http\\\\Controllers\\\\)?{$pluralStudly}Controller::class,\s*['\"]{1}restore['\"]{1}\]\)->name\(['\"]{$pluralNameLower}.restore['\"]\);\s*\n/";

            $newContent = preg_replace($routePattern, '', $routesContent);
            if ($newContent !== $routesContent) {
                $routesContent = $newContent;
                $modified = true;
            }

            // Save changes if modified
            if ($modified) {
                File::put($routesPath, $routesContent);
                $this->info("Routes removed from: {$routesPath}");
            } else {
                $this->warn("No routes found to remove in: {$routesPath}");
            }
        } else {
            $this->warn("Routes file not found: {$routesPath}");
        }
    }

    /**
     * Remove sidebar entry
     */
    private function removeSidebarEntry($singularStudly, $pluralNameLower)
    {
        $sidebarPath = resource_path('js/components/app-sidebar.tsx');

        if (File::exists($sidebarPath)) {
            $sidebarContent = File::get($sidebarPath);

            // Find the sidebar entry with multiple possible formats
            $pattern = "/\s*\{\s*title:\s*['\"]" . preg_quote($singularStudly, '/') . "['\"](,|\s*)\s*count:\s*[0-9]+(,|\s*)\s*url:\s*route\(['\"]" . preg_quote($pluralNameLower, '/') . "\.index['\"](,|\s*).*?\s*icon:\s*[a-zA-Z]+(,|\s*)\s*\}(,|\s*)/s";

            $newContent = preg_replace($pattern, '', $sidebarContent);

            if ($newContent !== $sidebarContent) {
                File::put($sidebarPath, $newContent);
                $this->info("Sidebar entry removed from: {$sidebarPath}");
            } else {
                $this->warn("No sidebar entry found to remove in: {$sidebarPath}");
            }
        } else {
            $this->warn("Sidebar file not found: {$sidebarPath}");
        }
    }

    /**
     * Remove migrations for a module
     */
    private function removeMigrations($pluralNameLower)
    {
        $migrationsPath = database_path('migrations');

        if (File::isDirectory($migrationsPath)) {
            $files = File::glob("{$migrationsPath}/*_create_{$pluralNameLower}_table.php");

            if (count($files) > 0) {
                foreach ($files as $file) {
                    File::delete($file);
                    $this->info("Migration removed: {$file}");
                }
            } else {
                $this->warn("No migration files found for: {$pluralNameLower}");
            }
        } else {
            $this->warn("Migrations directory not found: {$migrationsPath}");
        }
    }
}
