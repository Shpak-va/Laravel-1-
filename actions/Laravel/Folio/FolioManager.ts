import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Laravel\Folio\FolioManager::handle
* @see vendor/laravel/folio/src/FolioManager.php:80
* @route '/{fallbackPlaceholder}'
*/
export const handle = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle.url(args, options),
    method: 'get',
})

handle.definition = {
    methods: ["get","head"],
    url: '/{fallbackPlaceholder}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Folio\FolioManager::handle
* @see vendor/laravel/folio/src/FolioManager.php:80
* @route '/{fallbackPlaceholder}'
*/
handle.url = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fallbackPlaceholder: args }
    }

    if (Array.isArray(args)) {
        args = {
            fallbackPlaceholder: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        fallbackPlaceholder: args.fallbackPlaceholder,
    }

    return handle.definition.url
            .replace('{fallbackPlaceholder}', parsedArgs.fallbackPlaceholder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Laravel\Folio\FolioManager::handle
* @see vendor/laravel/folio/src/FolioManager.php:80
* @route '/{fallbackPlaceholder}'
*/
handle.get = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle.url(args, options),
    method: 'get',
})

/**
* @see \Laravel\Folio\FolioManager::handle
* @see vendor/laravel/folio/src/FolioManager.php:80
* @route '/{fallbackPlaceholder}'
*/
handle.head = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handle.url(args, options),
    method: 'head',
})

/**
* @see \Laravel\Folio\FolioManager::handle
* @see vendor/laravel/folio/src/FolioManager.php:80
* @route '/{fallbackPlaceholder}'
*/
const handleForm = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle.url(args, options),
    method: 'get',
})

/**
* @see \Laravel\Folio\FolioManager::handle
* @see vendor/laravel/folio/src/FolioManager.php:80
* @route '/{fallbackPlaceholder}'
*/
handleForm.get = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle.url(args, options),
    method: 'get',
})

/**
* @see \Laravel\Folio\FolioManager::handle
* @see vendor/laravel/folio/src/FolioManager.php:80
* @route '/{fallbackPlaceholder}'
*/
handleForm.head = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

handle.form = handleForm

const FolioManager = { handle }

export default FolioManager