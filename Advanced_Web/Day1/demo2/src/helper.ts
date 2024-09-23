interface Person {
    fName: string;
    lName: string;
    isMarried?: boolean; //adding '?' makes the attribute optional
    children: string[];
    getFullName?: string;
}

export {Person};
