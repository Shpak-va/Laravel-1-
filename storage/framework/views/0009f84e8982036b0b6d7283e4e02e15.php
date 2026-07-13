---
name: mcp-development
description: "Use this skill for Laravel MCP development. Trigger when creating or editing MCP tools, resources, prompts, servers, or UI apps in Laravel projects. Covers: artisan make:mcp-* generators, routes/ai.php, Tool/Resource/Prompt/AppResource classes, schema validation, shouldRegister(), OAuth setup, URI templates, read-only attributes, MCP debugging, MCP UI apps, the x-mcp::app Blade component, createMcpApp(), default AppResource handle() auto-infers view from class name, Response::view(), AppMeta/Csp/Permissions/appMeta() configuration, #[RendersApp] attribute, Library enum for CDN libraries (Tailwind, Alpine), and host theming via CSS variables. Use this whenever the user mentions MCP apps, MCP UI, interactive MCP resources, styling MCP apps with Tailwind or Alpine, or building visual interfaces for AI agents."
license: MIT
metadata:
  author: laravel
---
<?php
/** @var \Laravel\Boost\Install\GuidelineAssist $assist */
?>
# MCP Development

## Documentation

Use ___SINGLE_BACKTICK___search-docs___SINGLE_BACKTICK___ for detailed Laravel MCP patterns and documentation.

For MCP UI apps (interactive HTML resources), read ___SINGLE_BACKTICK___references/app.md___SINGLE_BACKTICK___ — it covers the full architecture, host theming CSS variables, tool-to-UI linking patterns, library scripts (Tailwind, Alpine via ___SINGLE_BACKTICK___Library___SINGLE_BACKTICK___), and real-world examples.

## Basic Usage

Register MCP servers in ___SINGLE_BACKTICK___routes/ai.php___SINGLE_BACKTICK___:

___BOOST_SNIPPET_0___

### Creating MCP Primitives

___SINGLE_BACKTICK______SINGLE_BACKTICK______SINGLE_BACKTICK___bash
<?php echo e($assist->artisanCommand('make:mcp-tool ToolName')); ?>            # Create a tool
<?php echo e($assist->artisanCommand('make:mcp-resource ResourceName')); ?>     # Create a resource
<?php echo e($assist->artisanCommand('make:mcp-prompt PromptName')); ?>        # Create a prompt
<?php echo e($assist->artisanCommand('make:mcp-server ServerName')); ?>        # Create a server
<?php echo e($assist->artisanCommand('make:mcp-app-resource DashboardApp')); ?> # Create a UI app (2 files)
___SINGLE_BACKTICK______SINGLE_BACKTICK______SINGLE_BACKTICK___

After creating primitives, register them in your server's ___SINGLE_BACKTICK___$tools___SINGLE_BACKTICK___, ___SINGLE_BACKTICK___$resources___SINGLE_BACKTICK___, or ___SINGLE_BACKTICK___$prompts___SINGLE_BACKTICK___ properties.

### Tools

___BOOST_SNIPPET_1___

### Registering Primitives in a Server

___BOOST_SNIPPET_2___

## MCP UI Apps

For MCP UI apps, read ___SINGLE_BACKTICK___references/app.md___SINGLE_BACKTICK___ — it covers quick start examples, full architecture, AppMeta/Csp/Permissions, ___SINGLE_BACKTICK___#[RendersApp]___SINGLE_BACKTICK___ tool linking, library scripts (Tailwind/Alpine via ___SINGLE_BACKTICK___Library___SINGLE_BACKTICK___), host theming CSS variables, and real-world patterns.

## Verification

1. Check ___SINGLE_BACKTICK___routes/ai.php___SINGLE_BACKTICK___ for proper registration
2. Test tool via MCP client

## Common Pitfalls

- Running ___SINGLE_BACKTICK___mcp:start___SINGLE_BACKTICK___ command (it hangs waiting for input)
- Using HTTPS locally with Node-based MCP clients
- Not using ___SINGLE_BACKTICK___search-docs___SINGLE_BACKTICK___ for the latest MCP documentation
- Not registering MCP server routes in ___SINGLE_BACKTICK___routes/ai.php___SINGLE_BACKTICK___
- Do not register ___SINGLE_BACKTICK___ai.php___SINGLE_BACKTICK___ in ___SINGLE_BACKTICK___bootstrap.php___SINGLE_BACKTICK___; it is registered automatically
- OAuth registration supports custom URI schemes (e.g., ___SINGLE_BACKTICK___cursor://___SINGLE_BACKTICK___, ___SINGLE_BACKTICK___vscode://___SINGLE_BACKTICK___) for native desktop clients via ___SINGLE_BACKTICK___mcp.custom_schemes___SINGLE_BACKTICK___ config
<?php /**PATH /home/redos/example-app/storage/framework/views/c7e2096924ed6acca470a83c7c148590.blade.php ENDPATH**/ ?>