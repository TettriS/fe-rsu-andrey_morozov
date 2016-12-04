function Phone(name, firm) {
    var motherboard = new Motherboard("Phone Board", firm, 1);
    var cpu = new CPU("Phone Processor", firm, 1);
    var memory = new Memory("Phone Memory", firm, 1);
    var screen = new Screen("Phone Screen", firm, 1);
    var battery = new Battery("Phone Battery", firm, 1);
    var phoneCase = new Case("Phone Case", firm, 0);
    Electronic.call(this, name, firm, [motherboard, cpu, memory, screen, battery, phoneCase]);
}

Phone.prototype = Object.create(Electronic.prototype); 