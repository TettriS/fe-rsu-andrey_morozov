function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    
    // this.counterElement = document.getElementById('counter');
    this.search = document.getElementById('search');
    this.addBook = document.getElementById('addABook');
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
        bookPartCover.className = 'books-block__book-part';
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

View.prototype.init = function() {
    for (var i = this.model.books.length - 1; i >= 0; i--) {
        this.createBook(this.model.books[i]);
    }
}