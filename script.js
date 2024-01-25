// ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee{
    constructor(name){
        this.name = name;
    }
    displayInfo(){
        console.log("Name: " + this.name)
    }
}

class Manager extends Employee{
    constructor(name, department){
        super(name);
        this.department = department;
    }
    displayInfo(){
        console.log(`Name: ${this.name}\nDepartment: ${this.department}`)
    }
}

// // Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();


// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order{
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }
    addProduct(product){
        this.products.push(product);
    }
    getTotalPrice(){
        return this.products.reduce((a,v) => a + v.price, 0)
    }
}

// // Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600


// 1. Создать класс "Товар" с приватными полями "название", "цена" и "количество". 
// Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", 
// которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. 
// Также класс должен иметь статическое поле "максимальное количество", которое будет задавать 
// максимально допустимое количество товара для всех создаваемых объектов.

// Пример работы кода:

class Prodct{
    #name;
    #price;
    #quantity;
    static maxQuantity = 1000;
    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        if (quantity > Prodct.maxQuantity) {
            throw new Error("Quantity is too high")
        }
        this.#quantity = quantity;
    }
    get name(){
        return this.#name;
    }
    get price(){
        return this.#price;
    }
    get quantity(){
        return this.#quantity;
    }
    set name(name){
        this.#name = name;
    }
    set price(price){
        this.#price = price;
    }
    set quantity(quantity){
        this.#quantity = quantity;
    }
    getCost(){
        return this.#price * this.#quantity
    }
}

const prodct1 = new Prodct('Тетрадь', 50, 200);
console.log(prodct1.name); // "Тетрадь"
console.log(prodct1.price); // 50
console.log(prodct1.quantity); // 200
console.log(prodct1.getCost()); // 10000

// const prodct2 = new Prodct('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"


// 2 Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". 
// Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту",
// которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле 
// "максимальный возраст", которое будет задавать максимально допустимый возраст для всех 
// создаваемых объектов.

class User{
    #name;
    #age;
    #email;
    static maxAge = 120;
    constructor(name, age) {
        this.#name = name;
        if (age > User.maxAge) {
            throw new Error("Age is too high")
        }
        this.#age = age;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getEmail(){
        return this.#email;
    }
    setName(name){
        this.#name = name;
    }
    setAge(age){
        this.#age = age;
    }
    setEmail(email){
        this.#email = email;
    }
    static getMaxAge(){
        return User.maxAge;
    }
}

const user1 = new User('John', 30);
console.log(user1.getName()); // "John"
user1.setName('Mike');
console.log(user1.getName()); // "Mike"
console.log(User.getMaxAge()); // 120

const user2 = new User('Jane', 150); // Error: Age is too high