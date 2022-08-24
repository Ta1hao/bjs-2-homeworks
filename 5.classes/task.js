"use strict"
// Задание 1
//1
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }
   //2
   fix() {
      this.state = this.state * 1.5;
   }
   //3
   set state(number) {
      if (number < 0) {
         this._state = 0;
      } else if (number > 100) {
         this._state = 100;
      } else {
         this._state = number;
      }
   }
   //4
   get state() {
      return this._state;
   }
}
//5
class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}
//6
class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
   }
}
//7
class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
   }
}

//Задание 2
//1
class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }
   //2
   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }
   }
   //3
   findBookBy(type, value) {
      let notFound = null;
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i][type] === value) {
            notFound = this.books[i];
         }
      }
      return notFound;
   }
   //4
   giveBookByName(bookName) {
      let notFound = this.findBookBy(bookName);
      let serialNumber = this.books.indexOf(notFound);
      if (serialNumber === -1) return null;
      return this.books.splice(serialNumber, 1)[0];
   }
}