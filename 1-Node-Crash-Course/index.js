import getPosts, { getPostsLength } from './postController.js'
import generateRandomNumber from './utils.js'

console.log(getPosts())
console.log('Number of posts:', getPostsLength())
console.log('A random number:', generateRandomNumber())