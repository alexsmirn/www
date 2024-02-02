const numbers = [2, 38, 1000, -45, 379, 9346]

// const newNumbers = numbers.toSorted() new arrays method

const students = [
    {id: 1, name: "Bob", age: 22, isMarried: true, scores: 85,},
    {id: 2, name: "Alex", age: 21, isMarried: true, scores: 90,},
    {id: 3, name: "Nick", age: 20, isMarried: false, scores: 120,},
    {id: 4, name: "John", age: 19, isMarried: false, scores: 100,},
    {id: 5, name: "Helen", age: 20, isMarried: false, scores: 110,},
    {id: 6, name: "Ann", age: 20, isMarried: false, scores: 105,},
];

const compareFunc = (a, b) => {
    return a.scores - b.scores
}

console.log([...students].sort(compareFunc))
console.log(students)