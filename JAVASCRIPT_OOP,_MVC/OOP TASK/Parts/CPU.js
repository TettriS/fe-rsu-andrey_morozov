function CPU(name, firm, watt) {
    Part.call(this, name, firm, watt);
}

CPU.prototype = Object.create(Part.prototype);