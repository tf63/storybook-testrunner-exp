import type { Decorator, Preview } from '@storybook/react'

import '@repo/tailwind/styles.css'

declare global {
    var __coverage__: string
}

export const decorators: Decorator[] = [
    (Story) => (
        <div className="flex items-center justify-center p-5">
            <Story />
        </div>
    ),
    (Story) => {
        // biome-ignore lint/suspicious/noConsoleLog: <explanation>
        console.log(globalThis.__coverage__)
        return Story()
    }
]

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        options: {
            storySort: {
                order: ['Component']
            }
        }
    },
    tags: ['autodocs']
}

export default preview
