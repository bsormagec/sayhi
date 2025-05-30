import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::index
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:29
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:29
* @route '/ai-module-generator'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::index
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:29
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:29
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:43
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:43
* @route '/ai-module-generator/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::create
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:43
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:43
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:55
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:55
* @route '/ai-module-generator/store'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::store
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:55
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
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::fields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:81
* @route '/ai-module-generator/wizard/fields'
*/
export const fields = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: fields.url(options),
    method: 'get',
})

fields.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/wizard/fields',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::fields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:81
* @route '/ai-module-generator/wizard/fields'
*/
fields.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return fields.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::fields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:81
* @route '/ai-module-generator/wizard/fields'
*/
fields.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: fields.url(options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::fields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:81
* @route '/ai-module-generator/wizard/fields'
*/
fields.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: fields.url(options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:98
* @route '/ai-module-generator/wizard/fields'
*/
export const storeFields = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeFields.url(options),
    method: 'post',
})

storeFields.definition = {
    methods: ['post'],
    url: '/ai-module-generator/wizard/fields',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:98
* @route '/ai-module-generator/wizard/fields'
*/
storeFields.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storeFields.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:98
* @route '/ai-module-generator/wizard/fields'
*/
storeFields.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeFields.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::relationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:122
* @route '/ai-module-generator/wizard/relationships'
*/
export const relationships = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: relationships.url(options),
    method: 'get',
})

relationships.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/wizard/relationships',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::relationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:122
* @route '/ai-module-generator/wizard/relationships'
*/
relationships.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return relationships.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::relationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:122
* @route '/ai-module-generator/wizard/relationships'
*/
relationships.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: relationships.url(options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::relationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:122
* @route '/ai-module-generator/wizard/relationships'
*/
relationships.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: relationships.url(options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeRelationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:139
* @route '/ai-module-generator/wizard/relationships'
*/
export const storeRelationships = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeRelationships.url(options),
    method: 'post',
})

storeRelationships.definition = {
    methods: ['post'],
    url: '/ai-module-generator/wizard/relationships',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeRelationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:139
* @route '/ai-module-generator/wizard/relationships'
*/
storeRelationships.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storeRelationships.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeRelationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:139
* @route '/ai-module-generator/wizard/relationships'
*/
storeRelationships.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeRelationships.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::uiComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:166
* @route '/ai-module-generator/wizard/ui'
*/
export const uiComponents = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: uiComponents.url(options),
    method: 'get',
})

uiComponents.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/wizard/ui',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::uiComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:166
* @route '/ai-module-generator/wizard/ui'
*/
uiComponents.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return uiComponents.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::uiComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:166
* @route '/ai-module-generator/wizard/ui'
*/
uiComponents.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: uiComponents.url(options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::uiComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:166
* @route '/ai-module-generator/wizard/ui'
*/
uiComponents.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: uiComponents.url(options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeUiComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:183
* @route '/ai-module-generator/wizard/ui'
*/
export const storeUiComponents = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeUiComponents.url(options),
    method: 'post',
})

storeUiComponents.definition = {
    methods: ['post'],
    url: '/ai-module-generator/wizard/ui',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeUiComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:183
* @route '/ai-module-generator/wizard/ui'
*/
storeUiComponents.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storeUiComponents.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeUiComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:183
* @route '/ai-module-generator/wizard/ui'
*/
storeUiComponents.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeUiComponents.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::review
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:254
* @route '/ai-module-generator/wizard/review'
*/
export const review = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: review.url(options),
    method: 'get',
})

review.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/wizard/review',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::review
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:254
* @route '/ai-module-generator/wizard/review'
*/
review.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return review.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::review
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:254
* @route '/ai-module-generator/wizard/review'
*/
review.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: review.url(options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::review
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:254
* @route '/ai-module-generator/wizard/review'
*/
review.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: review.url(options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::generate
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:271
* @route '/ai-module-generator/wizard/generate'
*/
export const generate = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: generate.url(options),
    method: 'post',
})

generate.definition = {
    methods: ['post'],
    url: '/ai-module-generator/wizard/generate',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::generate
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:271
* @route '/ai-module-generator/wizard/generate'
*/
generate.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return generate.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::generate
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:271
* @route '/ai-module-generator/wizard/generate'
*/
generate.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: generate.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::predictFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:336
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:336
* @route '/ai-module-generator/predict-fields'
*/
predictFields.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return predictFields.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::predictFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:336
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:352
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:352
* @route '/ai-module-generator/suggest-components'
*/
suggestComponents.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return suggestComponents.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::suggestComponents
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:352
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:370
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:370
* @route '/ai-module-generator/preview-code'
*/
previewCode.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return previewCode.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::previewCode
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:370
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:390
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:390
* @route '/ai-module-generator/check-module-exists'
*/
checkModuleExists.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkModuleExists.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::checkModuleExists
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:390
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:412
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:412
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:412
* @route '/ai-module-generator/remove-module/{name}'
*/
removeModule.delete = (args: { name: string | number } | [name: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: removeModule.url(args, options),
    method: 'delete',
})

const ModuleGeneratorController = { index, create, store, fields, storeFields, relationships, storeRelationships, uiComponents, storeUiComponents, review, generate, predictFields, suggestComponents, previewCode, checkModuleExists, removeModule }

export default ModuleGeneratorController