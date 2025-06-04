import { queryParams, type QueryParams } from './../../wayfinder'
import wizard from './wizard'
import api from './api'
/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::index
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:40
* @route '/ai-module-generator'
*/
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::index
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:40
* @route '/ai-module-generator'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::index
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:40
* @route '/ai-module-generator'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::index
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:40
* @route '/ai-module-generator'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::create
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:54
* @route '/ai-module-generator/create'
*/
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/create',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::create
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:54
* @route '/ai-module-generator/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::create
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:54
* @route '/ai-module-generator/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::create
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:54
* @route '/ai-module-generator/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::store
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:78
* @route '/ai-module-generator/store'
*/
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/ai-module-generator/store',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::store
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:78
* @route '/ai-module-generator/store'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::store
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:78
* @route '/ai-module-generator/store'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::predictFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:355
* @route '/ai-module-generator/predict-fields'
*/
export const predictFields = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: predictFields.url(options),
    method: 'post',
})

predictFields.definition = {
    methods: ['post'],
    url: '/ai-module-generator/predict-fields',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::predictFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:355
* @route '/ai-module-generator/predict-fields'
*/
predictFields.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return predictFields.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::predictFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:355
* @route '/ai-module-generator/predict-fields'
*/
predictFields.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: predictFields.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::suggestComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:371
* @route '/ai-module-generator/suggest-components'
*/
export const suggestComponents = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: suggestComponents.url(options),
    method: 'post',
})

suggestComponents.definition = {
    methods: ['post'],
    url: '/ai-module-generator/suggest-components',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::suggestComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:371
* @route '/ai-module-generator/suggest-components'
*/
suggestComponents.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return suggestComponents.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::suggestComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:371
* @route '/ai-module-generator/suggest-components'
*/
suggestComponents.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: suggestComponents.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::previewCode
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:389
* @route '/ai-module-generator/preview-code'
*/
export const previewCode = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: previewCode.url(options),
    method: 'post',
})

previewCode.definition = {
    methods: ['post'],
    url: '/ai-module-generator/preview-code',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::previewCode
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:389
* @route '/ai-module-generator/preview-code'
*/
previewCode.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return previewCode.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::previewCode
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:389
* @route '/ai-module-generator/preview-code'
*/
previewCode.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: previewCode.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::checkModuleExists
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:409
* @route '/ai-module-generator/check-module-exists'
*/
export const checkModuleExists = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: checkModuleExists.url(options),
    method: 'post',
})

checkModuleExists.definition = {
    methods: ['post'],
    url: '/ai-module-generator/check-module-exists',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::checkModuleExists
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:409
* @route '/ai-module-generator/check-module-exists'
*/
checkModuleExists.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkModuleExists.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::checkModuleExists
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:409
* @route '/ai-module-generator/check-module-exists'
*/
checkModuleExists.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: checkModuleExists.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::removeModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:430
* @route '/ai-module-generator/remove-module/{name}'
*/
export const removeModule = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: removeModule.url(args, options),
    method: 'delete',
})

removeModule.definition = {
    methods: ['delete'],
    url: '/ai-module-generator/remove-module/{name}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::removeModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:430
* @route '/ai-module-generator/remove-module/{name}'
*/
removeModule.url = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { name: args }
    }

    if (Array.isArray(args)) {
        args = {
            name: args[0],
        }
    }

    const parsedArgs = {
        name: args.name,
    }

    return removeModule.definition.url
            .replace('{name}', parsedArgs.name.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::removeModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:430
* @route '/ai-module-generator/remove-module/{name}'
*/
removeModule.delete = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: removeModule.url(args, options),
    method: 'delete',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::migrateModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:455
* @route '/ai-module-generator/migrate-module/{name}'
*/
export const migrateModule = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: migrateModule.url(args, options),
    method: 'post',
})

migrateModule.definition = {
    methods: ['post'],
    url: '/ai-module-generator/migrate-module/{name}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::migrateModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:455
* @route '/ai-module-generator/migrate-module/{name}'
*/
migrateModule.url = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { name: args }
    }

    if (Array.isArray(args)) {
        args = {
            name: args[0],
        }
    }

    const parsedArgs = {
        name: args.name,
    }

    return migrateModule.definition.url
            .replace('{name}', parsedArgs.name.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::migrateModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:455
* @route '/ai-module-generator/migrate-module/{name}'
*/
migrateModule.post = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: migrateModule.url(args, options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::rollbackModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:501
* @route '/ai-module-generator/rollback-module/{name}'
*/
export const rollbackModule = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: rollbackModule.url(args, options),
    method: 'post',
})

rollbackModule.definition = {
    methods: ['post'],
    url: '/ai-module-generator/rollback-module/{name}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::rollbackModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:501
* @route '/ai-module-generator/rollback-module/{name}'
*/
rollbackModule.url = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { name: args }
    }

    if (Array.isArray(args)) {
        args = {
            name: args[0],
        }
    }

    const parsedArgs = {
        name: args.name,
    }

    return rollbackModule.definition.url
            .replace('{name}', parsedArgs.name.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::rollbackModule
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:501
* @route '/ai-module-generator/rollback-module/{name}'
*/
rollbackModule.post = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: rollbackModule.url(args, options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::migrationStatus
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:547
* @route '/ai-module-generator/migration-status/{name}'
*/
export const migrationStatus = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: migrationStatus.url(args, options),
    method: 'get',
})

migrationStatus.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/migration-status/{name}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::migrationStatus
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:547
* @route '/ai-module-generator/migration-status/{name}'
*/
migrationStatus.url = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { name: args }
    }

    if (Array.isArray(args)) {
        args = {
            name: args[0],
        }
    }

    const parsedArgs = {
        name: args.name,
    }

    return migrationStatus.definition.url
            .replace('{name}', parsedArgs.name.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::migrationStatus
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:547
* @route '/ai-module-generator/migration-status/{name}'
*/
migrationStatus.get = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: migrationStatus.url(args, options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::migrationStatus
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:547
* @route '/ai-module-generator/migration-status/{name}'
*/
migrationStatus.head = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: migrationStatus.url(args, options),
    method: 'head',
})

const aiModuleGenerator = {
    index,
    create,
    store,
    wizard,
    predictFields,
    suggestComponents,
    previewCode,
    checkModuleExists,
    removeModule,
    migrateModule,
    rollbackModule,
    migrationStatus,
    api,
}

export default aiModuleGenerator