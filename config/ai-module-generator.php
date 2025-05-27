<?php

/*
 * AI Module Generator Configuration
 */
return [
    /*
    |--------------------------------------------------------------------------
    | AI Configuration
    |--------------------------------------------------------------------------
    |
    | Configure the AI service used for field prediction and other AI-powered features.
    |
    */
    'ai' => [
        // Default AI provider to use (options: 'openai', 'azure', 'anthropic', 'gemini', 'mistral', 'bedrock')
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

        /*
        |--------------------------------------------------------------------------
        | Azure OpenAI Configuration
        |--------------------------------------------------------------------------
        |
        | Configuration for Azure OpenAI services. Used when 'provider' is set to 'azure'.
        |
        */
        'azure' => [
            'api_key' => env('AZURE_OPENAI_API_KEY'),
            'endpoint' => env('AZURE_OPENAI_ENDPOINT'),
            'api_version' => env('AZURE_OPENAI_API_VERSION', '2024-02-01'),
            'deployment_name' => env('AZURE_OPENAI_DEPLOYMENT_NAME')
        ],

        /*
        |--------------------------------------------------------------------------
        | AWS Bedrock Configuration
        |--------------------------------------------------------------------------
        |
        | Configuration for AWS Bedrock services. Used when 'provider' is set to 'bedrock'.
        |
        */
        'bedrock' => [
            'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
            'access_key' => env('AWS_ACCESS_KEY_ID'),
            'secret_key' => env('AWS_SECRET_ACCESS_KEY'),
        ],
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
        'time' => [
            'migration' => 'time',
            'rules' => 'date_format:H:i',
            'component' => 'time-picker',
        ],
        'email' => [
            'migration' => 'string',
            'rules' => 'email|max:255',
            'component' => 'email-input',
        ],
        'url' => [
            'migration' => 'string',
            'rules' => 'url|max:255',
            'component' => 'url-input',
        ],
        'password' => [
            'migration' => 'string',
            'rules' => 'string|min:8',
            'component' => 'password-input',
        ],
        'enum' => [
            'migration' => 'enum',
            'rules' => 'in:{{options}}',
            'component' => 'select',
        ],
        'json' => [
            'migration' => 'json',
            'rules' => 'json',
            'component' => 'json-editor',
        ],
        'file' => [
            'migration' => 'string',
            'rules' => 'file|max:10240',
            'component' => 'file-upload',
        ],
        'image' => [
            'migration' => 'string',
            'rules' => 'image|max:10240',
            'component' => 'image-upload',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | UI Component Framework
    |--------------------------------------------------------------------------
    |
    | Configure the UI component framework used for frontend generation.
    | Supported: "shadcn", "inertia"
    |
    */
    'ui_framework' => 'shadcn',

    /*
    |--------------------------------------------------------------------------
    | Frontend Generator Settings
    |--------------------------------------------------------------------------
    |
    | Settings for generating frontend components.
    | 'enhanced' uses AI to select the most appropriate components.
    | 'basic' uses standard components based on field types (fallback).
    |
    */
    'frontend' => [
        'enhanced' => true, // Use enhanced AI generation (vs basic fallback)
        'components' => 'shadcn', // Component framework: 'shadcn', 'inertia'
    ],

    /*
    |--------------------------------------------------------------------------
    | Interactive Wizard Configuration
    |--------------------------------------------------------------------------
    |
    | Configure the behavior of the interactive module generator wizard.
    |
    */
    'wizard' => [
        'use_colorful_output' => true,
        'show_field_previews' => true,
        'confirm_before_generation' => true,
    ],
];
