/* task1 */

function findFact(num1) {
  if (num1 === 1) {
    return 1;
  } else {
    return num1 * findFact(num1 - 1);
  }
}
console.log(findFact(5));

/* task2 */
let user = {
  name: "John",
  age: 30,
};
console.log("age" in user);

/* task3 */

let city1 = {
  name: "Japan",
  population: 125416877,
  getName() {
    return this.name;
  },
  exportStr() {
    return `'name=${this.name} population=${this.population}'`;
  },
};
let city2 = {
  name: "Uzbekistan",
  population: 10000000000,
  getName() {
    return this.name;
  },
  exportStr() {
    return `'name=${this.name} population=${this.population}'`;
  },
};
console.log(city1.getName(), city1.exportStr());
console.log(city2.getName(), city2.exportStr());
