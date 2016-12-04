function Small() {
    var Laptop = new Computer('Laptop', 'Acer');
    var iPhone = new Phone('iPhone','Apple');
    Room.call(this, 'Small Room', [Laptop, iPhone]);
}

Small.prototype = Object.create(Room.prototype);