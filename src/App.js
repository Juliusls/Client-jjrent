import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_PHONES } from './queries'

const App = () => {
    const result = useQuery(ALL_PHONES)

    if (result.loading)  {
        return <div>loading...</div>
    }

    return (
        <div>
            <div>{result.data.allPhones.map(p => p.name).join(', ')}</div>
            <div>{result.data.allPhones.map(p => p.brand).join(', ')}</div>
        </div>
    )
}

export default App
