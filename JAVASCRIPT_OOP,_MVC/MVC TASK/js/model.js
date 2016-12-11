function Model() {
    this.books = [
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            name: 'Empty'
        },
        {
            coverAddress : "style/images/10.png",
            name : "Vegetables Cookbook",
            author : "by Matthew Biggs", 
            rating : 1
        },
        {
            coverAddress : "style/images/9.png",
            name : "Jamie's Italy",
            author : "by Jamie Oliver", 
            rating : 2
        },
        {
            coverAddress : "style/images/8.png",
            name : "Jamie Does",
            author : "by Jamie Oliver", 
            rating : 3
        },
        {
            coverAddress : "style/images/7.png",
            name : "Suneeta Vaswani",
            author : "by Geeta Devi", 
            rating : 5
        },
        {
            coverAddress : "style/images/6.png",
            name : "Cook Like an Italian",
            author : "by Chrissy Gower", 
            rating : 5
        },
        {
            coverAddress : "style/images/5.png",
            name : "Paleo Slow Cooking",
            author : "by Chrissy Gower", 
            rating : 5
        },
        {
            coverAddress : "style/images/4.png",
            name : "Inexpensive Family Meals",
            author : "by Simon Holst", 
            rating : 5
        },
        {
            coverAddress : "style/images/3.png",
            name : "Jamie's Kitchen",
            author : "by Jamie Oliver", 
            rating : 3
        },
        {
            coverAddress : "style/images/2.png",
            name : "Cakes & Bakes",
            author : "by Sanjeev Kapoor", 
            rating : 2
        },
        {
            coverAddress : "style/images/1.png",
            name : "Jewels of Nizam",
            author : "by Geeta Devi", 
            rating : 1
        },
    ];
    this.notifications = [
        {
            did: "You were searching",
            name: "Cook",
            author: "",
            list: "",
            time: 0
        },
        {
            did: "You use filter",
            name: "All Books",
            author: "",
            list: "",
            time: 0
        },
        {
            did: "You change rating",
            name: "",
            author: "",
            list: "",
            time: 0
        },
        {
            did: "You added",
            name: "fight club",
            author: "chuck palahniuk",
            list: "must read titles",
            time: 0
        },
        {
            did: "You added",
            name: "the trial",
            author: "franz kafka",
            list: "must read titles",
            time: 0
        }
    ];
    this.onAddBook = new Event();
    this.onDelBook = new Event();
    this.onNewNotification = new Event();
}

Model.prototype.addBook = function(book) {
    this.books.push(book);
    this.onAddBook.notify(this.books);
}

// Model.prototype.delBook = function(book) {
//     for ( var i = 0; i < this.books.length; i++ ) {
//         if (this.books.indexOf(book) >= 0) {
//             this.books.splice(i, 1);
//         }
//     }
//     this.onDelBook.notify(this.books);
// }//

Model.prototype.NewNotification = function(notification) {
    this.notifications.push(notification);
    this.onNewNotification.notify(this.notifications);
}