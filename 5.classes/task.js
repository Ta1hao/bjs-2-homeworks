/*Задание №1*/

/*#1*/
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
   }
   /*#2*/
   fix() {
      this.state = this._state * 1.5;
   }
   /*#3*/
   set state(number) {
      if (number < 0) {
         this._state = 0;
      } if (number > 100) {
         this._state = 100;
      } else {
         this._state = number;
      }
   }
   /*#4*/
   get state() {
      return this._state;
   }
}
/*#5*/
class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "magazine";
   }
}
/*#6*/
class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.author = author;
      this.type = "book";
   }
}
/*#7*/
class NovelBook extends Book {
   constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "detective";
   }
}

/*Задание №2*/

/*#1*/

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   /*#2*/

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }
   }

   /*#3*/

   findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++)
         if (this.books[i][type] == value) {
            return this.books[i];
         } else if (this.books[i][type] !== value)
            return null
   }

   /*#4*/

   giveBookByName(bookName) {
      let findBook;
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name == bookName) {
            findBook = this.books[i];
            this.books.splice(i, 1);
            return findBook
         } if (findBook === undefined) {
            return null
         }
      }
   }
}