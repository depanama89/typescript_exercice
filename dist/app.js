// class Car {
//   public make: string;
//   public model: string;
//   public roue: number;
//   private year: number;
//   constructor(make: string, roue: number, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.roue = roue;
//     this.year = year;
//   }
//   public getCarInfo(): string {
//     return `${this.make} ${this.roue} ${this.model} ${this.year}`;
//   }
// }
// const myCar = new Car("toyota", 4, "corolla", 2020);
// console.log(myCar.getCarInfo());
let nom = "patrick";
console.log(nom);
function addNombre(a, b) {
    return a + b;
}
function multiplicationNombre(c, d) {
    return c * d;
}
console.log(addNombre(2, 3));
console.log(multiplicationNombre(4, 8));
const addTwoNumber = (params) => {
    return params.firstNumber + params.twoNumber;
};
console.log(addTwoNumber({ firstNumber: 7, twoNumber: 7 }));
function optionnelParams(params) {
    if (params.second) {
        return `${params.first} : ${params.second}`;
    }
    else {
        return `${params.first}`;
    }
}
// console.log(optionnelParams({ first: "Patrick", second: "Kudiatu" }));
console.log(optionnelParams({ first: "Tomanitu" }));
