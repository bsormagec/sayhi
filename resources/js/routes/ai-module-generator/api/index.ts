import { queryParams, type QueryParams, validateParameters } from './../../../wayfinder'
/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::relationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:21
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
export const relationData = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: relationData.url(args, options),
    method: 'get',
})

relationData.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/api/relation-data/{model}/{relation?}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::relationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:21
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
relationData.url = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            model: args[0],
            relation: args[1],
        }
    }

    validateParameters(args, [
        "relation",
    ])

    const parsedArgs = {
        model: args.model,
        relation: args.relation,
    }

    return relationData.definition.url
            .replace('{model}', parsedArgs.model.toString())
            .replace('{relation?}', parsedArgs.relation?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::relationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:21
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
relationData.get = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: relationData.url(args, options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::relationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:21
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
relationData.head = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: relationData.url(args, options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::modelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:253
* @route '/ai-module-generator/api/model-fields/{model}'
*/
export const modelFields = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: modelFields.url(args, options),
    method: 'get',
})

modelFields.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/api/model-fields/{model}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::modelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:253
* @route '/ai-module-generator/api/model-fields/{model}'
*/
modelFields.url = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { model: args }
    }

    if (Array.isArray(args)) {
        args = {
            model: args[0],
        }
    }

    const parsedArgs = {
        model: args.model,
    }

    return modelFields.definition.url
            .replace('{model}', parsedArgs.model.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::modelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:253
* @route '/ai-module-generator/api/model-fields/{model}'
*/
modelFields.get = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: modelFields.url(args, options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::modelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:253
* @route '/ai-module-generator/api/model-fields/{model}'
*/
modelFields.head = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: modelFields.url(args, options),
    method: 'head',
})

const api = {
    relationData,
    modelFields,
}

export default api