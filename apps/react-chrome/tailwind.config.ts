import sharedConfig from '@repo/tailwind/tailwind'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],
    presets: [sharedConfig],
}

export default config
