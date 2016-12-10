function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    
    // this.counterElement = document.getElementById('counter');
    this.search = document.querySelector(".filter__input");
    this.addAButton = document.querySelector(".add-list__button");
    this.addInput = document.querySelector(".add-list__submit");
    this.addClouse = document.querySelector(".add-list__clouse");
}

View.prototype.newBook = function() {
    var book = {};
    book.coverAddress = document.querySelector(".add-list__cover").value;
    book.name = document.querySelector(".add-list__name").value;
    book.author = document.querySelector(".add-list__author").value;
    book.rating = document.querySelector(".add-list__rating").value;
    this.model.addBook(book);
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
    document.querySelector(".books-block__list").innerHTML = "";
    for (var b = this.model.books.length - 1; b >= 0; b--) {
        this.createBook(this.model.books[b]);
    }
}

View.prototype.init = function() {
    var that = this;
    that.refresh();

    that.addAButton.addEventListener("click", function() {
        document.querySelector(".add-list__window").style.display = "flex";
    document.querySelector(".add-list__cover").value = "";
    document.querySelector(".add-list__name").value = "";
    document.querySelector(".add-list__author").value = "";
    document.querySelector(".add-list__rating").value = "";
    });
    that.addClouse.addEventListener("click", function() {
        document.querySelector(".add-list__window").style.display = "none";
    });

    // document.querySelector(".add-list__window").onclick.stopPropagation();

    document.querySelector(".filter__input").addEventListener("change", function() {
        for (var i = 0; i < document.querySelectorAll(".books-block__item").length - 16; ) {
            if (document.querySelector(".filter__input").value.toLowerCase() !== model.books[i].name.toLowerCase()) {

            }
        }
    });

    that.addInput.addEventListener("click", function() {
        that.newBook();
        that.refresh();
    });

    // that.model.onAddBook.subscribe(that.refresh());
    // model.onDelBook.subscribe();
    // model.onNewNotification.subscribe(that.refreshNotifications());
}