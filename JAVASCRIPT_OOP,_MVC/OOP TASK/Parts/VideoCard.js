function VideoCard(name, firm, watt) {
    Part.call(this, name, firm, watt);
}

VideoCard.prototype = Object.create(Part.prototype);