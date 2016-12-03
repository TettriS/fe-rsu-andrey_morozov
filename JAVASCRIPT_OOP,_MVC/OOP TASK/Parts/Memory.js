function Memory (name, firm, watt) {
    Part.call(this, name, firm, watt);
}

Memory.prototype = Object.create(Part.prototype);