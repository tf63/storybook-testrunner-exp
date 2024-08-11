import { Card } from '@ui/components/card'

import { SampleCard } from '@/features/sample-card'

const App = () => {
    return (
        <div className="min-h-screen w-full p-10">
            <h1 className="rounded-lg bg-gray-300 p-5 text-xl">React App</h1>

            <div className="my-5 w-60 space-y-3">
                <p>Component</p>
                <SampleCard />
            </div>

            <div className="my-5 w-60 space-y-3">
                <p>Shared Component</p>
                <Card />
            </div>
        </div>
    )
}

export default App
