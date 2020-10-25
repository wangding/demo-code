/* es2020 静态 */

class Person {
    static print() {
        console.log('Person');
    }
}

let p = new Person();

//p.print();   // error
Person.print();