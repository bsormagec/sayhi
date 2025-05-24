<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;

class MakeModuleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:module {name : The name of the module (singular form)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new module with all necessary files';

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

        $this->info("Creating {$singularStudly} module...");

        // Create directories if they don't exist
        $this->createDirectories($pluralNameLower);

        // Create Backend Files
        $this->createControllerFromStub($singularStudly, $pluralStudly, $singularNameLower, $pluralNameLower);
        $this->createModelFromStub($singularStudly);
        $this->createRequestFromStub($pluralStudly);
        $this->createResourceFromStub($singularStudly);
        $this->createCollectionFromStub($singularStudly);
        $this->createMigrationFromStub($pluralNameLower);

        // Create Frontend Files
        $this->createFrontendFiles($singularNameLower, $pluralNameLower, $singularStudly);

        // Add routes
        $this->addRoutes($pluralNameLower, $pluralStudly);

        // Add sidebar entry
        $this->addSidebarEntry($singularStudly, $pluralNameLower);

        $this->info("{$singularStudly} module successfully created!");

        return Command::SUCCESS;
    }

    /**
     * Create necessary directories for the module
     */
    private function createDirectories($pluralNameLower)
    {
        // Create frontend directories if they don't exist
        $frontendDir = resource_path("js/pages/{$pluralNameLower}");
        if (!File::isDirectory($frontendDir)) {
            File::makeDirectory($frontendDir, 0755, true);
            $this->info("Frontend directory created: {$frontendDir}");
        }
    }

    /**
     * Get the contents of a stub file
     */
    private function getStub($stubName)
    {
        $stubPath = base_path("stubs/module/{$stubName}.stub");
        if (!File::exists($stubPath)) {
            $this->error("Stub file not found: {$stubPath}");
            return '';
        }

        return File::get($stubPath);
    }

    /**
     * Create controller file from stub
     */
    private function createControllerFromStub($singularStudly, $pluralStudly, $singularNameLower, $pluralNameLower)
    {
        $controllerPath = app_path("Http/Controllers/{$pluralStudly}Controller.php");

        $content = $this->getStub('controller');
        $content = str_replace('{{SingularName}}', $singularStudly, $content);
        $content = str_replace('{{PluralName}}', $pluralStudly, $content);
        $content = str_replace('{{singularSlug}}', $singularNameLower, $content);
        $content = str_replace('{{pluralSlug}}', $pluralNameLower, $content);

        File::put($controllerPath, $content);
        $this->info("Controller created: {$controllerPath}");
    }

    /**
     * Create model file from stub
     */
    private function createModelFromStub($singularStudly)
    {
        $modelPath = app_path("Models/{$singularStudly}.php");

        $content = $this->getStub('model');
        $content = str_replace('{{SingularName}}', $singularStudly, $content);

        File::put($modelPath, $content);
        $this->info("Model created: {$modelPath}");
    }

    /**
     * Create request file from stub
     */
    private function createRequestFromStub($pluralStudly)
    {
        $requestPath = app_path("Http/Requests/{$pluralStudly}Request.php");

        $content = $this->getStub('request');
        $content = str_replace('{{PluralName}}', $pluralStudly, $content);

        File::put($requestPath, $content);
        $this->info("Request created: {$requestPath}");
    }

    /**
     * Create resource file from stub
     */
    private function createResourceFromStub($singularStudly)
    {
        $resourcePath = app_path("Http/Resources/{$singularStudly}Resource.php");

        $content = $this->getStub('resource');
        $content = str_replace('{{SingularName}}', $singularStudly, $content);

        File::put($resourcePath, $content);
        $this->info("Resource created: {$resourcePath}");
    }

    /**
     * Create collection file from stub
     */
    private function createCollectionFromStub($singularStudly)
    {
        $collectionPath = app_path("Http/Resources/{$singularStudly}Collection.php");

        $content = $this->getStub('collection');
        $content = str_replace('{{SingularName}}', $singularStudly, $content);

        File::put($collectionPath, $content);
        $this->info("Collection created: {$collectionPath}");
    }

    /**
     * Create migration file from stub
     */
    private function createMigrationFromStub($pluralNameLower)
    {
        $timestamp = Carbon::now()->format('Y_m_d_His');
        $migrationPath = database_path("migrations/{$timestamp}_create_{$pluralNameLower}_table.php");

        $content = $this->getStub('migration');
        $content = str_replace('{{tableName}}', $pluralNameLower, $content);

        File::put($migrationPath, $content);
        $this->info("Migration created: {$migrationPath}");
    }

    /**
     * Create frontend files from stubs
     */
    private function createFrontendFiles($singularNameLower, $pluralNameLower, $singularStudly)
    {
        $frontendDir = resource_path("js/pages/{$pluralNameLower}");
        $singularUcfirst = ucfirst($singularNameLower);

        // Index page
        $indexPath = "{$frontendDir}/index.tsx";
        $content = $this->getStub('index.tsx');
        $content = str_replace('{{singularSlug}}', $singularNameLower, $content);
        $content = str_replace('{{pluralSlug}}', $pluralNameLower, $content);
        $content = str_replace('{{SingularName}}', $singularStudly, $content);
        $content = str_replace('{{SingularUcfirst}}', $singularUcfirst, $content);

        File::put($indexPath, $content);
        $this->info("Frontend index created: {$indexPath}");

        // Create page
        $createPath = "{$frontendDir}/create.tsx";
        $content = $this->getStub('create.tsx');
        $content = str_replace('{{singularSlug}}', $singularNameLower, $content);
        $content = str_replace('{{pluralSlug}}', $pluralNameLower, $content);
        $content = str_replace('{{SingularName}}', $singularStudly, $content);
        $content = str_replace('{{SingularUcfirst}}', $singularUcfirst, $content);

        File::put($createPath, $content);
        $this->info("Frontend create page created: {$createPath}");

        // Edit page
        $editPath = "{$frontendDir}/edit.tsx";
        $content = $this->getStub('edit.tsx');
        $content = str_replace('{{singularSlug}}', $singularNameLower, $content);
        $content = str_replace('{{pluralSlug}}', $pluralNameLower, $content);
        $content = str_replace('{{SingularName}}', $singularStudly, $content);
        $content = str_replace('{{SingularUcfirst}}', $singularUcfirst, $content);

        File::put($editPath, $content);
        $this->info("Frontend edit page created: {$editPath}");
    }

    /**
     * Add routes to web.php
     */
    private function addRoutes($pluralNameLower, $pluralStudly)
    {
        $routesPath = base_path('routes/web.php');
        $routesContent = File::get($routesPath);

        // Check if routes already exist
        if (strpos($routesContent, "Route::resource('{$pluralNameLower}'") !== false) {
            $this->warn("Routes for {$pluralNameLower} already exist in web.php");
            return;
        }

        // Use fully qualified namespace without relying on use statements
        $newRoutes = "\n// {$pluralStudly} routes\n";
        $newRoutes .= "Route::resource('{$pluralNameLower}', \\App\\Http\\Controllers\\{$pluralStudly}Controller::class);\n";
        $newRoutes .= "Route::put('{$pluralNameLower}/{$pluralNameLower}/restore', [\\App\\Http\\Controllers\\{$pluralStudly}Controller::class, 'restore'])->name('{$pluralNameLower}.restore');\n";

        // Find the correct position to add routes (before the closing });)
        $pattern = '/}\);(?!.*}\);)/s';
        if (preg_match($pattern, $routesContent)) {
            $updatedContent = preg_replace($pattern, $newRoutes . "\n});", $routesContent);
            File::put($routesPath, $updatedContent);
            $this->info("Routes added to {$routesPath}");
        } else {
            $this->warn("Could not find the appropriate position to add routes. Please add them manually to {$routesPath}");
            $this->info("Routes to add:\n{$newRoutes}");
        }
    }

    /**
     * Add an entry to the sidebar navigation
     */
    private function addSidebarEntry($singularStudly, $pluralNameLower)
    {
        $sidebarPath = resource_path('js/components/app-sidebar.tsx');
        if (!File::exists($sidebarPath)) {
            $this->warn("Sidebar file not found: {$sidebarPath}");
            return;
        }

        $sidebarContent = File::get($sidebarPath);
        $modified = false;

        // Check if icon import is needed
        if (strpos($sidebarContent, "Package") === false) {
            $sidebarContent = preg_replace(
                '/(import \{ )([^\}]+)( \} from \'lucide-react\';)/',
                '$1$2, Package$3',
                $sidebarContent,
                1
            );
            $modified = true;
        }

        // Check if sidebar entry already exists
        $entryPattern = "/title: '{$singularStudly}',/";
        if (preg_match($entryPattern, $sidebarContent)) {
            $this->warn("Sidebar entry for {$singularStudly} already exists in app-sidebar.tsx");
            return;
        }

        // Add sidebar entry
        $entryPosition = strrpos($sidebarContent, '},');
        if ($entryPosition !== false) {
            $newEntry = <<<EOT
            {
                title: '{$singularStudly}',
                count: 2,
                url: route('{$pluralNameLower}.index', {}, false),
                icon: Package,
            },
EOT;
            $sidebarContent = substr_replace($sidebarContent, $newEntry . "\n            ", $entryPosition + 2, 0);
            $modified = true;
        }

        if ($modified) {
            File::put($sidebarPath, $sidebarContent);
            $this->info("Sidebar entry for {$singularStudly} added to app-sidebar.tsx");
        } else {
            $this->warn("Could not find the appropriate position to add sidebar entry. Please add it manually to {$sidebarPath}");
        }
    }
}
