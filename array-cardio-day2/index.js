const people = [
    {name: 'Wes' , year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
]

const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen in my fav food ever', id: 123456},
    {text: 'Nice Nice Nice!', id: 542328}
]

// Some and Every checks

//Array.prototype.some()
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear()
    return currentYear - person.year >= 19
})

console.log(isAdult)

//Array.prototype.every()
const allAdult = people.every(person => {
    const currentYear = (new Date()).getFullYear()
    return currentYear - person.year >= 19
})

console.log(allAdult)


//Array.prototype.find()
const comment = comments.find(comment => {
    if(comment.id === 823423) return true
})

console.log(comment)


//Array.prototype.findIndex()
const index = comments.findIndex(comment => comment.id === 823423)
console.log(index)

comments.splice(index,1)
// console.table(comments)

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index+1)
]