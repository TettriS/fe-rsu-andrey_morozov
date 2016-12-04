function Case(name, firm, watt) {
    Part.call(this, name, firm, watt);
}

Case.prototype = Object.create(Part.prototype);