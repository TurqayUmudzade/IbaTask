import carParkingRoof from "./CarParkingRoof.mjs";
import findCountries from "./findCoutries.mjs";

let cars = [6, 2, 12, 7]
let k = 3

console.log(carParkingRoof(cars, 2));
console.log(carParkingRoof(cars, 4));
console.log(carParkingRoof(cars, k));

let board = [
    [5, 4, 4],
    [4, 3, 4],
    [3, 2, 4],
    [2, 2, 2],
    [3, 3, 4],
    [1, 4, 4],
    [4, 1, 1]
]


console.log(findCountries(board))