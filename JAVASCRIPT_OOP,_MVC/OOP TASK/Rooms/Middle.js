function Middle() {
    Small.call(this);

    var computer = new Computer("PC", "Gigabyte");

    this.name = "Middle Room";
    this.parts= this.parts.concat([computer]);
}

Middle.prototype = Object.create(Room.prototype);