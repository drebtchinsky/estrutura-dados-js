let obj = new Object();
let obj2 = {};
let obj3 = {
  name: {
    first: "Gabriel",
    last: "Drebtchinsky",
  },
  address: "teste",
};

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.showPages=function(){
    console.log(this.pages);
  }
}
let book = new Book("titulo", "paginas", "isbn");
console.log(book.title);
book.title = "novo titulo";
console.log(book.title);
Book.prototype.showTitle = function () {
  console.log(this.title);
};
book.showTitle();
book.showPages();