# Turborepo Template

## Tools

| tool                                                      | description                                                                |
| --------------------------------------------------------- | -------------------------------------------------------------------------- |
| [turbo](https://turbo.build)                              | Monorepo build system that speeds up and optimizes the development process |
| [pnpm](https://pnpm.io)                                   | Fast, disk space efficient package manager                                 |
| [biome](https://biomejs.dev/)                             | Linter & formatter for JavaScript, TypeScript, and JSON files              |
| [prettier](https://prettier.io/)                          | Formatter for various file types (Markdown, CSS, etc.)                     |
| [husky](https://typicode.github.io/husky/)                | Tool for managing Git hooks easily                                         |
| [lint-staged](https://github.com/lint-staged/lint-staged) | Runs linters on Git staged files, improving code quality before commits    |
| [plop](https://plopjs.com/)                               | Micro-generator framework that helps create consistent project components  |

## Repos

### apps

`apps` contains web applications.
Each application in `apps/` only depends on packages within `packages/`, not on other applications.

| package          | description                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **next**         | [Next.js 14](https://nextjs.org/) (App Router) application with [Tailwind CSS](https://tailwindcss.com/)                                                                          |
| **react**        | [React 18](https://react.dev/) application using [Vite](https://vitejs.dev/) for bundling and [Tailwind CSS](https://tailwindcss.com/)                                            |
| **react-chrome** | Chrome Extension built with [React 18](https://react.dev/), using [CRX](https://crxjs.dev/vite-plugin/), [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/) |
| **storybook**    | [Storybook](https://storybook.js.org/) server.                                                                                                                                    |

### packages

`packages` contains reusable UI components and configuration files.

| package               | description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| **ui**                | Shared UI components library used across applications                             |
| **config-tailwind**   | [Tailwind CSS](https://tailwindcss.com/) configuration shared across applications |
| **config-typescript** | TypeScript configuration shared across applications                               |
