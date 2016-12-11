function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    this.addAButton = document.querySelector(".add-list__button");
    this.addInput = document.querySelector(".add-list__submit");
    this.addClouse = document.querySelector(".add-list__clouse");
}

View.prototype.newBook = function() {
    var book = {};
    book.coverAddress = document.querySelector(".add-list__cover").value;
    book.name = "by " + document.querySelector(".add-list__name").value;
    book.author = document.querySelector(".add-list__author").value;
    book.rating = document.querySelector(".add-list__rating").value;
    this.model.addBook(book);
}

View.prototype.createBook = function(book) {
    var bookBlock = document.querySelector(".books-block__list");

    var bookCase = document.createElement("li");
    bookCase.className = "books-block__item";

    var bookElem = document.createElement("ul");
    bookElem.className = "books-block__book";
    bookCase.appendChild(bookElem);

    if (book.name === "Empty") {

        var bookEmpty = document.createElement("li");
        bookEmpty.className = "books-block__empty";
        bookElem.appendChild(bookEmpty);

    } else {

        var bookPartCover = document.createElement("li");
        bookPartCover.className = "books-block__book-part";
        bookElem.appendChild(bookPartCover);

        var bookCover = document.createElement("img");
        bookCover.setAttribute("src", book.coverAddress);
        bookCover.setAttribute("alt", "book cover");
        bookCover.className = "books-block--image";
        bookPartCover.appendChild(bookCover);

        var bookPartName = document.createElement("li");
        bookPartName.className = "books-block__book-part";
        bookElem.appendChild(bookPartName);

        var bookName = document.createElement("span");
        bookName.className = "books-block--name";
        bookName.innerHTML = book.name;
        bookPartName.appendChild(bookName);

        var bookPartAuthor = document.createElement("li");
        bookPartAuthor.className = 'books-block__book-part';
        bookElem.appendChild(bookPartAuthor);

        var bookAuthor = document.createElement("span");
        bookAuthor.className = "books-block--author";
        bookAuthor.innerHTML = book.author;
        bookPartAuthor.appendChild(bookAuthor);

        var bookPartRating = document.createElement("li");
        bookPartRating.className = "books-block__book-part books-block--stars";
        bookElem.appendChild(bookPartRating);

        for (var i = 0; i < 5; i++) {
            var bookRating = document.createElement("i");
            bookRating.addEventListener("click", function() {
    for ( var i = 0; i < document.getElementsByClassName("books-block--stars").length; i++ ) {
        for ( var z = 0; z < 5; z++ ) {
            if (this === document.getElementsByClassName("books-block--stars")[i
            ].getElementsByClassName("fa")[z]) {
                for (var g = 0; g < 5; g++) {
                    if (g <= z) { 
                        document.getElementsByClassName("books-block--stars")[i
                        ].getElementsByClassName("fa")[g
                        ].className = "fa fa-star";
                    } else {
                        document.getElementsByClassName("books-block--stars")[i
                        ].getElementsByClassName("fa")[g
                        ].className = "fa fa-star-o";
                    }
                }
            }
        }
    }
            });
            if (i < book.rating) { 
                bookRating.className = "fa fa-star";
            } else {
                bookRating.className = "fa fa-star-o";
            }
            bookPartRating.appendChild(bookRating);
        }
    }
    bookBlock.appendChild(bookCase);
}

View.prototype.createSaidNotification = function(notification) {
    var notifyBlock = document.querySelector(".history-list");

    var notifyCase = document.createElement("li");
    notifyCase.className = "history-list__item";

    var notifyIcon = document.createElement("i");
    notifyIcon.className = "fa fa-clock-o history-list__icon";
    notifyCase.appendChild(notifyIcon);

    var notifyDid = document.createElement("span");
    notifyDid.className = "history-list__value";
    notifyDid.innerHTML = "" + notification.did + " ";
    notifyCase.appendChild(notifyDid);

    var notifyName= document.createElement("a");
    notifyName.className = "history-list__highlight";
    notifyName.setAttribute("href", "/");
    notifyName.innerHTML = notification.name + " ";
    notifyCase.appendChild(notifyName);

    if (notification.did === "You added") {

        var notifyBy = document.createElement("span");
        notifyBy.className = "history-list__value";
        notifyBy.innerHTML = "by ";
        notifyCase.appendChild(notifyBy);

        var notifyAuthor= document.createElement("a");
        notifyAuthor.className = "history-list__highlight";
        notifyAuthor.setAttribute("href", "/");
        notifyAuthor.innerHTML = notification.author + " ";
        notifyCase.appendChild(notifyAuthor);

        var notifyTo = document.createElement("span");
        notifyTo.className = "history-list__value";
        notifyTo.innerHTML = "to your ";
        notifyCase.appendChild(notifyTo);

        var notifyList= document.createElement("a");
        notifyList.className = "history-list__highlight";
        notifyList.setAttribute("href", "/");
        notifyList.innerHTML = notification.list;
        notifyCase.appendChild(notifyList);

    }

    var notifyTime = document.createElement("li");
    notifyTime.className = "history-list__time";

    var notifyTimeValue = document.createElement("span");
    notifyTimeValue.className = "history-list__value";
    notifyTimeValue.innerHTML = "" + notification.time + " minutes ago";
    notifyTime.appendChild(notifyTimeValue);

    notifyBlock.appendChild(notifyCase);
    notifyBlock.appendChild(notifyTime);
}

View.prototype.refresh = function() {
    document.querySelector(".books-block__list").innerHTML = "";
    for (var b = this.model.books.length - 1; b >= 0; b--) {
        this.createBook(this.model.books[b]);
    }
}

View.prototype.refreshNotify = function() {
    document.querySelector(".history-list").innerHTML = "";
    if (this.model.notifications.length > 6) {
        for ( var i = this.model.notifications.length - 1; i >= this.model.notifications.length - 6; i-- ) {
            this.createSaidNotification(this.model.notifications[i]);
        }
    } else {
        for ( var b = this.model.notifications.length - 1; b >= 0; b-- ) {
            this.createSaidNotification(this.model.notifications[b]);
        }
    }
}

View.prototype.init = function() {
    var that = this;
    that.refresh();
    that.refreshNotify();

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

    that.addInput.addEventListener("click", function() {
        document.querySelector(".add-list__window").style.display = "none";
        that.newBook();
    });

    document.querySelector(".filter__input").addEventListener("keyup", function() {
        var value = document.querySelector(".filter__input").value.toLowerCase();
        for (
        var i = 0; i < document.querySelectorAll(".books-block__item").length - 16; i++) {
            if (that.model.books[that.model.books.length - (1 + i)
            ].name.toLowerCase().indexOf(value) < 0) {
                document.querySelectorAll(".books-block__item")[i].style.display = "none";
            } else if (that.model.books[that.model.books.length - (1 + i)
            ].name.toLowerCase().indexOf(value) >= 0) {
                document.querySelectorAll(".books-block__item")[i].style.display = "flex";
            }
            if (that.model.books[that.model.books.length - (1 + i)
            ].author.toLowerCase().indexOf(value) < 0) {
                document.querySelectorAll(".books-block__item")[i].style.display = "none";
            } else if (that.model.books[that.model.books.length - (1 + i)
            ].author.toLowerCase().indexOf(value) >= 0) {
                document.querySelectorAll(".books-block__item")[i].style.display = "flex";
            }
        }
    });

    document.getElementsByClassName("filter__button")[0].addEventListener("click", function() {
        for (
        var z = 0; z < document.getElementsByClassName("filter__button").length - 1; z++ ) {
        document.getElementsByClassName("filter__button")[z].className = "filter__button";
        }
        this.className = "filter__button filter--select";
        for (
        var i = 0; i < document.querySelectorAll(".books-block__item").length - 16; i++) {
            if (that.model.books[that.model.books.length - (1 + i)
            ].rating >= 0) {
                document.querySelectorAll(".books-block__item")[i].style.display = "flex";
            }
        }
    })

    document.getElementsByClassName("filter__button")[2].addEventListener("click", function() {
        for (
        var z = 0; z < document.getElementsByClassName("filter__button").length - 1; z++ ) {
        document.getElementsByClassName("filter__button")[z].className = "filter__button";
        }
        this.className = "filter__button filter--select";
        for (
        var i = 0; i < document.querySelectorAll(".books-block__item").length - 16; i++) {
            if (document.querySelectorAll(".books-block__item")[i
            ].getElementsByClassName("fa")[4].matches(".fa-star")) {
                document.querySelectorAll(".books-block__item")[i].style.display = "flex";
            } else {
                document.querySelectorAll(".books-block__item")[i].style.display = "none";
            }
        }
    })

    that.model.onAddBook.subscribe(that.refresh.bind(that));
    that.model.onNewNotification.subscribe(that.refreshNotify.bind(that));
}