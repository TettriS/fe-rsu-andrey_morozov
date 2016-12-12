function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    this.addAButton = document.querySelector(".add-list__button");
    this.addInput = document.querySelector(".add-list__submit");
    this.addClouse = document.querySelector(".add-list__clouse");
    this.focusElem = null;
}

View.prototype.newBook = function() {
    var book = {};
    book.coverAddress = document.querySelector(".add-list__cover").value;
    book.name = document.querySelector(".add-list__name").value;
    book.author = "by " +  document.querySelector(".add-list__author").value;
    book.rating = document.querySelector(".add-list__rating").value;
    book.tag = "";
    this.model.addBook(book);
    this.model.newNotification({
        did: "You added",
        name: document.querySelector(".add-list__name").value,
        author: document.querySelector(".add-list__author").value,
        list: "",
        time: 0
    });
}

View.prototype.createBook = function(book) {
    var that = this;
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
        bookCover.addEventListener("click", function() {
        document.querySelector(".add-list__tag-window").style.display = "flex";

document.querySelector(".add-list__most-read-title").addEventListener(
"click", function() {
    document.getElementsByClassName("account-lists__item")[0
    ].className = "account-lists__item account-lists__select";
    document.querySelector(".add-list__tag-window").style.display = "none";
    book.tag = "Most Read Title";
    that.model.newNotification({
        did: "You added",
        name: book.name,
        author: book.author,
        list: "Most Read Title",
        time: 0
    });
    that.refresh();
});

document.querySelector(".add-list__best-of-list").addEventListener(
"click", function() {
    document.getElementsByClassName("account-lists__item")[1
    ].className = "account-lists__item account-lists__select";
    document.querySelector(".add-list__tag-window").style.display = "none";
    book.tag = "Best Of List";
    that.model.newNotification({
        did: "You added",
        name: book.name,
        author: book.author,
        list: "Best Of List",
        time: 0
    });
    that.refresh();
});

document.querySelector(".add-list__classic-novels").addEventListener(
"click", function() {
    document.getElementsByClassName("account-lists__item")[2
    ].className = "account-lists__item account-lists__select";
    document.querySelector(".add-list__tag-window").style.display = "none";
    book.tag = "Classic Novels";
    that.model.newNotification({
        did: "You added",
        name: book.name,
        author: book.author,
        list: "Classic Novels",
        time: 0
    });
    that.refresh();
});

document.querySelector(".add-list__non-fiction").addEventListener(
"click", function() {
    document.getElementsByClassName("account-lists__item")[3
    ].className = "account-lists__item account-lists__select";
    document.querySelector(".add-list__tag-window").style.display = "none";
    book.tag = "Non Fiction";
    that.model.newNotification({
        did: "You added",
        name: book.name,
        author: book.author,
        list: "Non Fiction",
        time: 0
    });
    that.refresh();
});

document.querySelector(".add-list__default").addEventListener(
"click", function() {
    document.getElementsByClassName("account-lists__item")[3
    ].className = "account-lists__item account-lists__select";
    document.querySelector(".add-list__tag-window").style.display = "none";
    book.tag = "";
    that.model.newNotification({
        did: "You added",
        name: book.name,
        author: book.author,
        list: "default",
        time: 0
    });
    that.refresh();
});
// document.querySelector(".add-list__submit-for-new").addEventListener("click",
// function() {
//     var inputLength = document.getElementsByClassName(
//     "add-list__tag-window").length;
//      var value = document.getElementsByClassName(
//          "account-lists__item")[inputLength].value;

//     document.getElementsByClassName("account-lists__item")[inputLength
//         ].addEventListener(
//     "click", function() {
//         document.getElementsByClassName("account-lists__item")[inputLength
//         ].className = "account-lists__item account-lists__select";
//         document.querySelector(".add-list__tag-window").style.display = "none";
//         book.tag = "" + value;
//         that.model.newNotification({
//             did: "You added",
//             name: book.name,
//             author: book.author,
//             list: "" + value,
//             time: 0
//         });
//         that.refresh();
//     });
// });
        })

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
    for ( var i = 0;
    i < document.getElementsByClassName("books-block--stars").length;
    i++ ) {
        for ( var z = 0; z < 5; z++ ) {
            if (this === document.getElementsByClassName("books-block--stars")[i
            ].getElementsByClassName("fa")[z]) {
                that.model.newNotification({
                    did: "You changed rating",
                    name: that.model.books[that.model.books.length - (1 + i)].name,
                    author: z + 1,
                    list: "",
                    time: 0
                });
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

View.prototype.createNotifications = function(notification) {
    var bookHistory = document.querySelector(".books-block__list");
    if (notification.name === "Empty") {
        var bookEmpty = document.createElement("li");
        bookEmpty.className = "books-block__empty";
        bookHistory.appendChild(bookEmpty);

    } else {

        var bookCase = document.createElement("li");
        bookCase.className = "books-block__item";

        var bookElem = document.createElement("ul");
        bookElem.className = "books-block__book";
        bookCase.appendChild(bookElem);

        var bookHistoryElem = document.createElement("li");
        bookHistoryElem.className = "history-list__block";
        bookElem.appendChild(bookHistoryElem);

        var notifyIcon = document.createElement("i");
        notifyIcon.className = "fa fa-clock-o history-list__page-icon";
        bookHistoryElem.appendChild(notifyIcon);

        var notifyDid = document.createElement("span");
        notifyDid.className = "history-list__value";
        notifyDid.innerHTML = "" + notification.did + " ";
        bookHistoryElem.appendChild(notifyDid);

        var notifyName= document.createElement("a");
        notifyName.className = "history-list__highlight";
        notifyName.setAttribute("href", "#");
        notifyName.innerHTML = notification.name + " ";
        bookHistoryElem.appendChild(notifyName);

        if (notification.author !== "") {

            var notifyBy = document.createElement("span");
            notifyBy.className = "history-list__value";
            notifyBy.innerHTML = "by ";
            bookHistoryElem.appendChild(notifyBy);

            var notifyAuthor= document.createElement("a");
            notifyAuthor.className = "history-list__highlight";
            notifyAuthor.setAttribute("href", "#");
            notifyAuthor.innerHTML = notification.author + " ";
            bookHistoryElem.appendChild(notifyAuthor);

            if (notification.list !== "") {

                var notifyTo = document.createElement("span");
                notifyTo.className = "history-list__value";
                notifyTo.innerHTML = "to your ";
                bookHistoryElem.appendChild(notifyTo);

                var notifyList= document.createElement("a");
                notifyList.className = "history-list__highlight";
                notifyList.setAttribute("href", "#");
                notifyList.innerHTML = notification.list + " ";
                bookHistoryElem.appendChild(notifyList);
            }
        }

        var notifyTime = document.createElement("li");
        notifyTime.className = "history-list__block";

        var notifyTimeValue = document.createElement("span");
        notifyTimeValue.className = "history-list__value";
        notifyTimeValue.innerHTML = "" + notification.time + " minutes ago";
        notifyTime.appendChild(notifyTimeValue);


        bookHistory.appendChild(bookCase);
        bookHistoryElem.appendChild(notifyTime);
        }
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
    notifyName.setAttribute("href", "#");
    notifyName.innerHTML = notification.name + " ";
    notifyCase.appendChild(notifyName);

    if (notification.author !== "") {

        var notifyBy = document.createElement("span");
        notifyBy.className = "history-list__value";
        notifyBy.innerHTML = "by ";
        notifyCase.appendChild(notifyBy);

        var notifyAuthor= document.createElement("a");
        notifyAuthor.className = "history-list__highlight";
        notifyAuthor.setAttribute("href", "#");
        notifyAuthor.innerHTML = notification.author + " ";
        notifyCase.appendChild(notifyAuthor);

        if (notification.list !== "") {

        var notifyTo = document.createElement("span");
        notifyTo.className = "history-list__value";
        notifyTo.innerHTML = "to your ";
        notifyCase.appendChild(notifyTo);

        var notifyList= document.createElement("a");
        notifyList.className = "history-list__highlight";
        notifyList.setAttribute("href", "#");
        notifyList.innerHTML = notification.list;
        notifyCase.appendChild(notifyList);

        }
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
        if (this.model.books[b].tag === "") {
            this.createBook(this.model.books[b]);
        }
    }
}

View.prototype.refreshNotify = function() {
    document.querySelector(".history-list").innerHTML = "";
    if (this.model.notifications.length > 3) {
        for ( var i = this.model.notifications.length - 1;
        i >= this.model.notifications.length - 3; i-- ) {
            this.createSaidNotification(this.model.notifications[i]);
        }
    } else {
        for ( var b = this.model.notifications.length - 1; b >= 0; b-- ) {
            this.createSaidNotification(this.model.notifications[b]);
        }
    }
}

View.prototype.showHistory = function() {
    document.querySelector(".books-block__list").innerHTML = "";
    for (var b = this.model.notifications.length - 1; b >= 0; b--) {
        this.createNotifications(this.model.notifications[b]);
    }
}

View.prototype.init = function() {
    var that = this;
    that.refresh();
    that.refreshNotify();

    setInterval(function() {
        for ( var i = 0; i < that.model.notifications.length; i++) {
            that.model.notifications[i].time += 1;
        }
        that.refreshNotify();
    }, 60000);

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
    
    document.querySelector(".filter__input").addEventListener("blur", function() {
        if (document.querySelector(".filter__input").value !== "") {
            that.model.newNotification({
                did: "You were searching",
                name: document.querySelector(".filter__input").value,
                author: "",
                list: "",
                time: 0
            });
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
        that.model.newNotification({
            did: "You use filter",
            name: "All Books",
            author: "",
            list: "",
            time: 0
        });
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
        that.model.newNotification({
            did: "You use filter",
            name: "Most Popular",
            author: "",
            list: "",
            time: 0
        });
    })
    
    document.getElementsByClassName("navigation__item")[1
    ].addEventListener("click", function() {
        for ( var i = 0;
        i < document.getElementsByClassName("navigation__item").length;
        i++ ) {
            document.getElementsByClassName("navigation__item")[i
            ].className = "navigation__item";
        }
        document.querySelector(".main__content--value"
        ).innerHTML = "browse available books";
        this.className = "navigation__item navigation__active";
        that.refresh();
    });
    
    document.getElementsByClassName("navigation__item")[5
    ].addEventListener("click", function() {
        for ( var i = 0;
        i < document.getElementsByClassName("navigation__item").length;
        i++ ) {
            document.getElementsByClassName("navigation__item")[i
            ].className = "navigation__item";
        }
        document.querySelector(".main__content--value"
        ).innerHTML = "History";
        this.className = "navigation__item navigation__active";
        that.showHistory();
    });

    document.getElementsByClassName("account-lists__item")[0
    ].addEventListener("click", function() {
        for( var i = 0;
        i < document.getElementsByClassName("account-lists__item").length;
        i++) {
            document.getElementsByClassName("account-lists__item")[i
            ].className = "account-lists__item";
        }
        this.className = "account-lists__item account-list__select";
        document.querySelector(".books-block__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].tag === "Most Read Title" ||
            that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.getElementsByClassName("account-lists__item")[1
    ].addEventListener("click", function() {
        for( var i = 0;
        i < document.getElementsByClassName("account-lists__item").length;
        i++) {
            document.getElementsByClassName("account-lists__item")[i
            ].className = "account-lists__item";
        }
        this.className = "account-lists__item account-list__select";
        document.querySelector(".books-block__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].tag === "Best Of List" ||
            that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.getElementsByClassName("account-lists__item")[2
    ].addEventListener("click", function() {
        for( var i = 0;
        i < document.getElementsByClassName("account-lists__item").length;
        i++) {
            document.getElementsByClassName("account-lists__item")[i
            ].className = "account-lists__item";
        }
        this.className = "account-lists__item account-list__select";
        document.querySelector(".books-block__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].tag === "Classic Novels" ||
            that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.getElementsByClassName("account-lists__item")[3
    ].addEventListener("click", function() {
        for( var i = 0;
        i < document.getElementsByClassName("account-lists__item").length;
        i++) {
            document.getElementsByClassName("account-lists__item")[i
            ].className = "account-lists__item";
        }
        this.className = "account-lists__item account-list__select";
        document.querySelector(".books-block__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].tag === "Non Fiction" ||
            that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.querySelector(".add-list__submit-for-new").addEventListener("click",
    function() {
        var itemLength = document.getElementsByClassName(
        "account-lists__item").length;
        var value = document.querySelector(".add-list__text-for-new").value;

        document.querySelector(".account-lists").innerHTML += 
        "<li class=\"account-lists__item\">" + 
        "<i class=\"fa fa-circle account-list--icon-new" + 
        " account-list__icon\"></i>" +
        "<a href=\"#\" class=\"account-lists__list\">" + value + "</a></li>";

         document.querySelector(".add-list__tag-window").innerHTML +=
         "<input type=\"button\" class=\"add-list__" + value +
         "\" value=\"" + value + "\">";

         document.querySelector(".add-list__" + value).style.width = "33%";

        document.getElementsByClassName("account-lists__item")[itemLength
        ].addEventListener("click", function() {
            for( var i = 0;
            i < document.getElementsByClassName("account-lists__item").length;
            i++) {
                document.getElementsByClassName("account-lists__item")[i
                ].className = "account-lists__item";
            }
            this.className = "account-lists__item account-list__select";
            document.querySelector(".books-block__list").innerHTML = "";
            for (var b = that.model.books.length - 1; b >= 0; b--) {
                if (that.model.books[b].tag === document.querySelector(
                ".add-list__text-for-new").value ||
                that.model.books[b].name === "Empty") {
                    that.createBook(that.model.books[b]);
                }
            }
        });
        document.querySelector(".add-list__text-for-new").value = "";
    });
        
    document.querySelector(".add-list__tag-clouse").addEventListener("click",
    function() {
        document.querySelector(".add-list__tag-window").style.display = "none";
    });
    
    that.model.onAddBook.subscribe(that.refresh.bind(that));
    that.model.onNewNotification.subscribe(that.refreshNotify.bind(that));
}