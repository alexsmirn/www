const ages = [18, 20, 22, 1, 100, 90, 14]

export const predicate = (age: number) => age > 90

const oldAges = [100]

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

type courseType = {
    title: string
    price: number
}

export const cheapPredicate = (course: courseType) => course.price < 160

const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]