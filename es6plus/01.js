/* es2020 私有 */

class Person {
    #name;  // 私有属性
    #age;

    #log = (data) => {  // 私有方法
        console.log(data);
    } 

    constructor(name, age){
        this.#name = name;
        this.#age  = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    print() {
        this.#log('Person');
    }
}

let p = new Person('wang', 20);
console.log(p.getAge());
console.log(p.getName());
p.print();