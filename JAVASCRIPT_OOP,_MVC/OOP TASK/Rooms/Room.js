function Room(name, parts) {
    this.name = name;
    this.parts = parts;
}

Room.prototype.getName = function () {
    return this.name;
};

Room.prototype.checkIfHas = function (what) {
    for (var i = 0; i < this.parts.length; i++) {
        if (
this.parts[i].getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
            console.info(
"\"" + what + "\" has been found in \"" + this.getName() + "\"");
        }
    }
};

Room.prototype.getWatt = function () {
    var totalWatt = 0;

    for (var i = 0; i < this.parts.length; i++) {
        if (this.parts[i].status === "on") {
            totalWatt += this.parts[i].getWatt();
        }
    }

    return totalWatt;
};

Room.prototype.showWatt = function () {
    console.info("Watt of " + this.getName() + " is " + this.getWatt());
};

Room.prototype.search = function (what) {
    this.checkIfHas(what);

    this.parts.forEach(function (part) {
        part.checkIfHas(what);
    });
};