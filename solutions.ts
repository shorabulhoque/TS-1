const filterEvenNumbers = (arr: number[]): number[] => {
    return arr.filter((item) => {
        return item % 2 === 0;
    });
};


const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
};


type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    };
};


const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
    return obj[key];
};


interface Book {
    title: string;
    author: string;
    publishedYear: number;
};
const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
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
    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    };
};


const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((item) => {
        return arr2.includes(item);
    });
};