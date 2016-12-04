function Computer(name, firm) {
    var Motherboard = new Motherboard("Computer Board", firm, 20);
    var CPU = new CPU("Computer Processor", firm, 50);
    var Memory = new Memory("Computer Memory", firm, 10);
    var Screen = new Screen("Computer Screen", firm, 75);
    var Battery = new Case("Computer Case", firm, 50);
    var Case = new Case("Computer Case", firm, 0);
    Electronic.call(this, name, firm, [Motherboard, CPU, Memory, Screen, Battery, Case]);
}

Computer.prototype = Object.create(Electronic.prototype);