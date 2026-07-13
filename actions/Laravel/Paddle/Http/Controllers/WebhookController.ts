import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Laravel\Paddle\Http\Controllers\WebhookController::__invoke
* @see vendor/laravel/cashier-paddle/src/Http/Controllers/WebhookController.php:43
* @route '/stripe/webhook'
*/
const WebhookController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: WebhookController.url(options),
    method: 'post',
})

WebhookController.definition = {
    methods: ["post"],
    url: '/stripe/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Paddle\Http\Controllers\WebhookController::__invoke
* @see vendor/laravel/cashier-paddle/src/Http/Controllers/WebhookController.php:43
* @route '/stripe/webhook'
*/
WebhookController.url = (options?: RouteQueryOptions) => {
    return WebhookController.definition.url + queryParams(options)
}

/**
* @see \Laravel\Paddle\Http\Controllers\WebhookController::__invoke
* @see vendor/laravel/cashier-paddle/src/Http/Controllers/WebhookController.php:43
* @route '/stripe/webhook'
*/
WebhookController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: WebhookController.url(options),
    method: 'post',
})

/**
* @see \Laravel\Paddle\Http\Controllers\WebhookController::__invoke
* @see vendor/laravel/cashier-paddle/src/Http/Controllers/WebhookController.php:43
* @route '/stripe/webhook'
*/
const WebhookControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: WebhookController.url(options),
    method: 'post',
})

/**
* @see \Laravel\Paddle\Http\Controllers\WebhookController::__invoke
* @see vendor/laravel/cashier-paddle/src/Http/Controllers/WebhookController.php:43
* @route '/stripe/webhook'
*/
WebhookControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: WebhookController.url(options),
    method: 'post',
})

WebhookController.form = WebhookControllerForm

export default WebhookController