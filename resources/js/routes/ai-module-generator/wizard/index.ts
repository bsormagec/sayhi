import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::fields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:106
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:106
* @route '/ai-module-generator/wizard/fields'
*/
fields.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return fields.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::fields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:106
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:106
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:123
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:123
* @route '/ai-module-generator/wizard/fields'
*/
storeFields.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storeFields.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:123
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:147
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:147
* @route '/ai-module-generator/wizard/relationships'
*/
relationships.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return relationships.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::relationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:147
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:147
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:168
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:168
* @route '/ai-module-generator/wizard/relationships'
*/
storeRelationships.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storeRelationships.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeRelationships
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:168
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
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::ui
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:195
* @route '/ai-module-generator/wizard/ui'
*/
export const ui = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ui.url(options),
    method: 'get',
})

ui.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/wizard/ui',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::ui
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:195
* @route '/ai-module-generator/wizard/ui'
*/
ui.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return ui.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::ui
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:195
* @route '/ai-module-generator/wizard/ui'
*/
ui.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ui.url(options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::ui
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:195
* @route '/ai-module-generator/wizard/ui'
*/
ui.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: ui.url(options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeUi
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:212
* @route '/ai-module-generator/wizard/ui'
*/
export const storeUi = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeUi.url(options),
    method: 'post',
})

storeUi.definition = {
    methods: ['post'],
    url: '/ai-module-generator/wizard/ui',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeUi
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:212
* @route '/ai-module-generator/wizard/ui'
*/
storeUi.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storeUi.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::storeUi
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:212
* @route '/ai-module-generator/wizard/ui'
*/
storeUi.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeUi.url(options),
    method: 'post',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::review
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:283
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:283
* @route '/ai-module-generator/wizard/review'
*/
review.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return review.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::review
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:283
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:283
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:300
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
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:300
* @route '/ai-module-generator/wizard/generate'
*/
generate.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return generate.definition.url + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\ModuleGeneratorController::generate
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/ModuleGeneratorController.php:300
* @route '/ai-module-generator/wizard/generate'
*/
generate.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: generate.url(options),
    method: 'post',
})

const wizard = {
    fields,
    storeFields,
    relationships,
    storeRelationships,
    ui,
    storeUi,
    review,
    generate,
}

export default wizard