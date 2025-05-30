<?php

declare(strict_types=1);

/*
 * AI Module Generator Configuration
 *
 * Configuration file for the AI Module Generator package.
 * This file contains all the configurable options for module generation.
 */
return [
    /*
    |--------------------------------------------------------------------------
    | Web Interface Configuration
    |--------------------------------------------------------------------------
    |
    | Configure web interface settings for the AI Module Generator.
    |
    */
    'web_interface' => [
        'enabled' => env('AI_MODULE_WEB_INTERFACE', true),
        'route_prefix' => env('AI_MODULE_ROUTE_PREFIX', 'ai-module-generator'),
        'middleware' => ['web', 'auth'],
        'cache_predictions' => true,
        'max_recent_modules' => 10,
    ],
    /*
    |--------------------------------------------------------------------------
    | AI Configuration
    |--------------------------------------------------------------------------
    |
    | Configure the AI service used for field prediction and other AI-powered features.
    |
    */
    'ai' => [
        // Default AI provider to use
        'provider' => env('AI_MODULE_PROVIDER', 'openai'),

        // Default model to use
        'model' => env('AI_MODEL', 'azure_ai/gpt-4-mini'),

        // Temperature for AI response generation (0.0 to 1.0)
        'temperature' => 0.7,

        // Maximum number of fields to generate
        'max_fields' => 10,

        // Whether to use AI for TSX generation
        'use_for_tsx' => env('AI_TSX_GENERATION', true),

        // Whether to use AI for component selection
        'use_for_components' => env('AI_COMPONENT_SELECTION', true),

        // Enable debug mode to log AI responses in the console
        'debug' => env('AI_DEBUG', false),

        // Force batch processing to minimize individual AI calls
        'force_batch_processing' => env('AI_FORCE_BATCH', true),

        // Maximum batch size for component/field processing
        'max_batch_size' => env('AI_MAX_BATCH_SIZE', 20),

        // Timeout for AI API calls in seconds
        'timeout' => env('AI_TIMEOUT', 30),

        // Retry attempts for failed AI calls
        'retry_attempts' => env('AI_RETRY_ATTEMPTS', 2),
    ],

    /*
    |--------------------------------------------------------------------------
    | Default Profile
    |--------------------------------------------------------------------------
    |
    | The default profile to use for module generation.
    |
    */
    'default_profile' => 'standard',

    /*
    |--------------------------------------------------------------------------
    | Profiles
    |--------------------------------------------------------------------------
    |
    | Predefined profiles for module generation with specific configurations.
    | You can create custom profiles for different types of modules.
    |
    */
    'profiles' => [
        'standard' => [
            'features' => [
                'controller' => true,
                'model' => true,
                'migration' => true,
                'request' => true,
                'resource' => true,
                'collection' => true,
                'policy' => false,
                'frontend' => true,
                'api' => false,
                'relationships' => false,
                'frontend_components' => 'shadcn',
                'frontend_enhanced' => true, // Use AI-powered component selection
            ],
        ],
        'api' => [
            'features' => [
                'controller' => true,
                'model' => true,
                'migration' => true,
                'request' => true,
                'resource' => true,
                'collection' => true,
                'policy' => true,
                'frontend' => false,
                'api' => true,
                'relationships' => true,
                'frontend_components' => null,
                'frontend_enhanced' => false,
            ],
        ],
        'frontend' => [
            'features' => [
                'controller' => false,
                'model' => false,
                'migration' => false,
                'request' => false,
                'resource' => false,
                'collection' => false,
                'policy' => false,
                'frontend' => true,
                'api' => false,
                'relationships' => false,
                'frontend_components' => 'shadcn',
                'frontend_enhanced' => true, // Use AI-powered component selection
            ],
        ],
        'minimal' => [
            'features' => [
                'controller' => true,
                'model' => true,
                'migration' => true,
                'request' => false,
                'resource' => false,
                'collection' => false,
                'policy' => false,
                'frontend' => false,
                'api' => false,
                'relationships' => false,
                'frontend_components' => null,
                'frontend_enhanced' => false,
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Paths Configuration
    |--------------------------------------------------------------------------
    |
    | Configure the paths where the module files will be generated.
    |
    */
    'paths' => [
        'controllers' => 'Http/Controllers',
        'models' => 'Models',
        'migrations' => 'database/migrations',
        'requests' => 'Http/Requests',
        'resources' => 'Http/Resources',
        'frontend' => 'resources/js/pages',
        'stubs' => 'stubs/module',
    ],

    /*
    |--------------------------------------------------------------------------
    | Field Type Mappings
    |--------------------------------------------------------------------------
    |
    | Define how database field types map to migration column types,
    | form validation rules, and UI components.
    |
    */
    'field_types' => [
        'string' => [
            'migration' => 'string',
            'rules' => 'string|max:255',
            'component' => 'text-input',
        ],
        'text' => [
            'migration' => 'text',
            'rules' => 'nullable|string',
            'component' => 'textarea',
        ],
        'integer' => [
            'migration' => 'integer',
            'rules' => 'integer',
            'component' => 'number-input',
        ],
        'float' => [
            'migration' => 'float',
            'rules' => 'numeric',
            'component' => 'number-input',
        ],
        'decimal' => [
            'migration' => 'decimal:2',
            'rules' => 'numeric',
            'component' => 'currency-input',
        ],
        'boolean' => [
            'migration' => 'boolean',
            'rules' => 'boolean',
            'component' => 'checkbox',
        ],
        'date' => [
            'migration' => 'date',
            'rules' => 'date',
            'component' => 'date-picker',
        ],
        'datetime' => [
            'migration' => 'datetime',
            'rules' => 'date',
            'component' => 'datetime-picker',
        ],
        'timestamp' => [
            'migration' => 'timestamp',
            'rules' => 'date',
            'component' => 'datetime-picker',
        ],
        'email' => [
            'migration' => 'string',
            'rules' => 'email|max:255',
            'component' => 'email-input',
        ],
        'password' => [
            'migration' => 'string',
            'rules' => 'string|min:8',
            'component' => 'password-input',
        ],
        'url' => [
            'migration' => 'string',
            'rules' => 'url|max:255',
            'component' => 'url-input',
        ],
        'json' => [
            'migration' => 'json',
            'rules' => 'array',
            'component' => 'json-editor',
        ],
        'enum' => [
            'migration' => 'enum',
            'rules' => 'string',
            'component' => 'select',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Frontend Components
    |--------------------------------------------------------------------------
    |
    | Configure the frontend component library to use.
    |
    */
    'frontend' => [
        'default_library' => 'shadcn',
        'libraries' => [
            'shadcn' => [
                'name' => 'Shadcn UI',
                'description' => 'Modern React components built with Radix UI and Tailwind CSS',
                'components' => [
                    'text-input' => 'Input',
                    'textarea' => 'Textarea',
                    'number-input' => 'Input',
                    'currency-input' => 'Input',
                    'checkbox' => 'Checkbox',
                    'date-picker' => 'DatePicker',
                    'datetime-picker' => 'DateTimePicker',
                    'email-input' => 'Input',
                    'password-input' => 'Input',
                    'url-input' => 'Input',
                    'select' => 'Select',
                    'json-editor' => 'Textarea',
                ],
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Validation Rules
    |--------------------------------------------------------------------------
    |
    | Default validation rules for common field types.
    |
    */
    'validation' => [
        'required_fields' => ['name', 'title', 'email'],
        'nullable_fields' => ['description', 'notes', 'bio'],
        'unique_fields' => ['email', 'username', 'slug'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Code Generation
    |--------------------------------------------------------------------------
    |
    | Configure code generation options.
    |
    */
    'generation' => [
        'namespace' => 'App',
        'use_soft_deletes' => true,
        'use_timestamps' => true,
        'use_uuid' => false,
        'add_fillable' => true,
        'add_casts' => true,
        'add_relationships' => false,
        'prefer_user_stubs' => false, // When true, user stubs are prioritized over package stubs
    ],

    /*
    |--------------------------------------------------------------------------
    | Module Metadata Storage
    |--------------------------------------------------------------------------
    |
    | Configure where and how module metadata is stored.
    | The Orbit driver will store data as flat files in the specified path.
    |
    */
    'storage' => [
        'enabled' => true,
        'driver' => 'json',  // 'json', 'md', or 'yaml'
        'path' => 'ai-module-generator-storage',  // Default path for storage
    ],

    /*
    |--------------------------------------------------------------------------
    | File Templates
    |--------------------------------------------------------------------------
    |
    | Configure which stub templates to use for different file types.
    |
    */
    'stubs' => [
        'controller' => 'controller.stub',
        'model' => 'model.stub',
        'migration' => 'migration.stub',
        'request' => 'request.stub',
        'resource' => 'resource.stub',
        'collection' => 'collection.stub',
        'policy' => 'policy.stub',
        'frontend_index' => 'frontend/index.stub',
        'frontend_create' => 'frontend/create.stub',
        'frontend_edit' => 'frontend/edit.stub',
        'frontend_show' => 'frontend/show.stub',
    ],
];
