function Motherboeard(name, firm, watt) {
    Part.call(this, name, firm, watt);
}

Motherboeard.prototype = Object.create(Part.prototype);