import { capitalize } from "../src/capitalize.js"

if(capitalize('hello') !== 'Hello') {
    throw new Error('function not working')
}

if(capitalize('') !== '') {
    throw new Error('function not working')
}

console.log('All tests passed')