function Phone(name, firm) {
    var Motherboard = new Motherboard("Phone Board", firm, 1);
    var CPU = new CPU("Phone Processor", firm, 1);
    var Memory = new Memory("Phone Memory", firm, 1);
    var Screen = new Screen("Phone Screen", firm, 1);
    var Battery = new Battery("Phone Battery", firm, 1);
    var Case = new Case("Phone Case", firm, 0);
    Electronic.call(this, name, firm, [Motherboard, CPU, Memory, Screen, Battery, Case]);
}

Phone.prototype = Object.create(Electronic.prototype); 