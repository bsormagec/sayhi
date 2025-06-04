import { queryParams, type QueryParams, validateParameters } from './../../../../../wayfinder'
/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getRelationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:20
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
export const getRelationData = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getRelationData.url(args, options),
    method: 'get',
})

getRelationData.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/api/relation-data/{model}/{relation?}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getRelationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:20
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
getRelationData.url = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return getRelationData.definition.url
            .replace('{model}', parsedArgs.model.toString())
            .replace('{relation?}', parsedArgs.relation?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getRelationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:20
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
getRelationData.get = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getRelationData.url(args, options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getRelationData
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:20
* @route '/ai-module-generator/api/relation-data/{model}/{relation?}'
*/
getRelationData.head = (args: { model: string | number, relation?: string | number } | [model: string | number, relation: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: getRelationData.url(args, options),
    method: 'head',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getModelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:242
* @route '/ai-module-generator/api/model-fields/{model}'
*/
export const getModelFields = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getModelFields.url(args, options),
    method: 'get',
})

getModelFields.definition = {
    methods: ['get','head'],
    url: '/ai-module-generator/api/model-fields/{model}',
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getModelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:242
* @route '/ai-module-generator/api/model-fields/{model}'
*/
getModelFields.url = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return getModelFields.definition.url
            .replace('{model}', parsedArgs.model.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getModelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:242
* @route '/ai-module-generator/api/model-fields/{model}'
*/
getModelFields.get = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getModelFields.url(args, options),
    method: 'get',
})

/**
* @see \Bsormagec\AiModuleGenerator\Http\Controllers\RelationDataController::getModelFields
* @see Users/sormagec/Projects/ai-module-generator/src/Http/Controllers/RelationDataController.php:242
* @route '/ai-module-generator/api/model-fields/{model}'
*/
getModelFields.head = (args: { model: string | number } | [model: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: getModelFields.url(args, options),
    method: 'head',
})

const RelationDataController = { getRelationData, getModelFields }

export default RelationDataController