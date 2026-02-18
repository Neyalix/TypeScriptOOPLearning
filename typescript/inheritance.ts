// class Animal {
//   constructor(public name: string) {}

//   move(distance: number): void {
//     console.log(`${this.name} has moved ${distance} meters`);
//   }
// }

// class Dog extends Animal {
//   constructor(public name: string = "dog") {
//     super(name);
//   }
// }

// let myDog = new Dog("Max");
// myDog.move(5);

class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {}
  display(): void {
    console.log(
      `ID: ${this.id}, Price: $${this.price}, Description: ${this.description}`,
    );
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public title: string,
    public author: string,
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}
class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string,
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

let myBook = new Book(
  "1",
  19.99,
  "You a Lizard Harry",
  "Harry Potter and the prisoner of Azkaban",
  "J.K Rolling",
);
myBook.display();

let myPhone = new Electronic(
  "2",
  1300,
  "iPhone",
  "Apple",
  "iPhone 17 Pro Max 1TB",
);
myPhone.display();
