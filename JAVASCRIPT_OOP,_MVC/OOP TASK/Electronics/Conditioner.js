function Conditioner(name, firm) {
    var motherboard = new Motherboard("Conditioner Board", firm, 50);
    var conditionerCase = new Case("Conditioner Case", firm, 0);
    Electronic.call(this, name, firm, [motherboard, conditionerCase]);
}

Conditioner.prototype = Object.create(Electronic.prototype);