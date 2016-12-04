function Motherboard(name, firm, watt) {
    Part.call(this, name, firm, watt);
}

Motherboard.prototype = Object.create(Part.prototype);