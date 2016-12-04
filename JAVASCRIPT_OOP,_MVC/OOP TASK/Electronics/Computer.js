function Computer(name, firm) {
    var motherboard = new Motherboard("Computer Board", firm, 20);
    var cpu = new CPU("Computer Processor", firm, 50);
    var memory = new Memory("Computer Memory", firm, 10);
    var screen = new Screen("Computer Screen", firm, 75);
    var battery = new Battery("Computer Case", firm, 50);
    var computerCase = new Case("Computer Case", firm, 0);
    Electronic.call(this, name, firm, [motherboard, cpu, memory, screen, battery, computerCase]);
}

Computer.prototype = Object.create(Electronic.prototype);