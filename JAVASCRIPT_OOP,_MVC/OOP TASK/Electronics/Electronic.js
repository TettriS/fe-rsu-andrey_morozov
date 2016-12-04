function Electronic(name, firm, parts) {
    this.parts = parts;
    this.status = "off";
    Part.call(this, name, firm, this.getWatt());
}

Electronic.prototype = Object.create(Part.prototype);

Electronic.prototype.off = function () {
    this.status = "off";
    return "This is " + this.status;
};

Electronic.prototype.on = function () {
    this.status = "on";
    return "This is " + this.status;
};

Electronic.prototype.getWatt = function () {
    var totalWatt = 0;

    for (var i = 0; i < this.parts.length; i++) {
        if (this.status === "on") {
            totalWatt += this.parts[i].getWatt();
        }
    }

    return totalWatt;
};

Electronic.prototype.showWatt = function () {
    console.info("Watt of " + this.getName() + " is " + this.getWatt());
};

Electronic.prototype.search = function (what) {
    this.checkIfHas(what);

    this.parts.forEach(function (part) {
        part.checkIfHas(what);
    });
};