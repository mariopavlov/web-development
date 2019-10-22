export {};

let stringArr: string[];

stringArr = ['hello', 'world'];

let genericArr: Array<string>;

genericArr = ['Hello', 'hello'];

let myTuple: [number, boolean];

enum Colors {Red, Blue, Green};
let color: Colors;

color = Colors.Red;

function Multiply(x: number, y: number = 8): number {
    return x * (y);
}

const response = Multiply(2);
console.log(response);

let nameBuilder = (firstName: string, ...restOfNames: string[]): string => {
    return firstName + ' ' + restOfNames.join(' ');
}

const names = nameBuilder("Mario", "Plamenov", "Pavlov");
console.log(names);

