import "./assets/scss/index.scss";
import { sum } from "@/module.js";

class Person {
  constructor(name) {
    this.name = name;
  }
}

const man = new Person("Muha");

console.log(man, sum(1,2));
