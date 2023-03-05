import { capitalize } from "../src/capitalize"

if(capitalize('hello') !== 'Hello') {
    throw new Error('function not working')
}

if(capitalize('') !== '') {
    throw new Error('function not working')
}

console.log('All tests passed')