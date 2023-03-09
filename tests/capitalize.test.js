import { strict as assert} from 'node:assert';
import { capitalize } from "../src/capitalize.js"

// if(capitalize('hello') !== 'Hello') {
//     throw new Error('function not working')
// }

// if(capitalize('') !== '') {
//     throw new Error('function not working')
// }

assert.equal(capitalize(''), '')
assert.equal(capitalize('hello'), 'Hello')

console.log('All tests passed')