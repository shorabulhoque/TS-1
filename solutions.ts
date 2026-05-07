const filterEvenNumbers = (arr: number[]): number[] => {
    if (!Array.isArray(arr)) {
        return [];
    };
    return arr.filter((item) => {
        return typeof item === 'number' && item % 2 === 0;
    });
};


const reverseString = (str: string): string => {
    if (typeof str !== 'string') {
        return "Only arguments of type 'string' can be assigned to parameters.";
    };
    return `"${str.split("").reverse().join("")}"`;
};


type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
    if (typeof input === 'string') {
        return `"String"`;
    } else if (typeof input === 'number') {
        return `"Number"`;
    } else {
        return "Only arguments of type 'string or number' can be assigned to parameters.";
    }
};

const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
    return obj[key];
};


interface IBook {
    title: string;
    author: string;
    publishedYear: number;
};

const toggleReadStatus = (book: IBook): object => {
    return { ...book, isRead: true };
};


class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};

class Student extends Person {
    public grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    };
    public getDetails() {
        return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
    };
};

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((item) => {
        return arr2.includes(item);
    });
};