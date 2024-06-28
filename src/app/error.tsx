'use client'
import {Button} from 'react-bootstrap'

interface ErrorpageProprs{
    error: Error,
    reset :()=> void,
}

export default function error({error ,reset}:ErrorpageProprs) {
    return (
    <div>
        <h1>Error</h1>
        <p>Somthing went wrong</p>
        <Button onClick={reset}>Try again</Button>
    </div>
    )
}