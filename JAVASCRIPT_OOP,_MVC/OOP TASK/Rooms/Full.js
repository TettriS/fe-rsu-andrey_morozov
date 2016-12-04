function Full() {
    Middle.call(this);

    var conditioner = new Conditioner('AirGrand', 'Forever');

    this.name = 'Full Room';
    this.parts= this.parts.concat([conditioner]);
}

Full.prototype = Object.create(Room.prototype);