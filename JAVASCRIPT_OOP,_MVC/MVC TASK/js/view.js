function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    
    // this.counterElement = document.getElementById('counter');
    this.search = document.querySelector('.filter__input');
    this.addAButton = document.querySelector('.add-list__button');
    this.addInput = document.querySelector('.add-list__submit');
    model.onAddBook.subscribe();
    model.onDelBook.subscribe();
    model.onNewNotification.subscribe();
}

View.prototype.newBook = function() {
    var book = {};
    book.coverAddress = document.querySelector('.add-list__cover').value;
    book.name = document.querySelector('.add-list__name').value;
    book.author = document.querySelector('.add-list__author').value;
    book.rating = document.querySelector('.add-list__rating').value;
    this.model.addBook(book);
    this.refresh();
}

View.prototype.createBook = function(book) {
    var bookBlock = document.querySelector(".books-block__list");

    var bookCase = document.createElement('li');
    bookCase.className = 'books-block__item';

    var bookElem = document.createElement('ul');
    bookElem.className = 'books-block__book';
    bookCase.appendChild(bookElem);

    if (book.name === 'Empty') {

        var bookPartCover = document.createElement('li');
        bookPartCover.className = 'books-block__empty';
        bookElem.appendChild(bookPartCover);

    } else {

        var bookPartCover = document.createElement('li');
        bookPartCover.className = 'books-block__book-part';
        bookElem.appendChild(bookPartCover);

        var bookCover = document.createElement('img');
        bookCover.setAttribute('src', book.coverAddress);
        bookCover.setAttribute('alt', 'book cover');
        bookCover.className = 'books-block--image';
        bookPartCover.appendChild(bookCover);

        var bookPartName = document.createElement('li');
        bookPartName.className = 'books-block__book-part';
        bookElem.appendChild(bookPartName);

        var bookName = document.createElement('span');
        bookName.className = 'books-block--name';
        bookName.innerHTML = book.name;
        bookPartName.appendChild(bookName);

        var bookPartAuthor = document.createElement('li');
        bookPartAuthor.className = 'books-block__book-part';
        bookElem.appendChild(bookPartAuthor);

        var bookAuthor = document.createElement('span');
        bookAuthor.className = 'books-block--author';
        bookAuthor.innerHTML = book.author;
        bookPartAuthor.appendChild(bookAuthor);

        var bookPartRating = document.createElement('li');
        bookPartRating.className = 'books-block__book-part';
        bookElem.appendChild(bookPartRating);

        for (var i = 0; i < 5; i++) {
            var bookRating = document.createElement('i');
            if (i < book.rating) { 
                bookRating.className = 'fa fa-star books-block--stars';
            } else {
                bookRating.className = 'fa fa-star-o books-block--stars';
            }
            bookPartRating.appendChild(bookRating);
        }
    }
    bookBlock.appendChild(bookCase);
}

// View.prototype.createNotification() {

// }

View.prototype.refresh = function() {
    var bookListElement = document.getElementsByClassName("books-block__item");
    while (bookListElement.firstChild) {
        bookListElement.removeChild(bookListElement.firstChild)
    }
    for (var i = this.model.books.length - 1; i >= 0; i--) {
        this.createBook(this.model.books[i]);
    }
}

View.prototype.init = function() {
    this.refresh();
    this.addInput.addEventListener('click', this.newBook());
}