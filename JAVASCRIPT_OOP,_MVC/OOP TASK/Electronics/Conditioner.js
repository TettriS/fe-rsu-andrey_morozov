function Conditioner(name, firm) {
    var Motherboard = new Motherboard("Conditioner Board", firm, 50);
    var Case = new Case("Conditioner Case", firm, 0);
    Complex.call(this, name, firm, [Motherboard, Case]);
}

Phone.prototype = Object.create(Electronic.prototype);