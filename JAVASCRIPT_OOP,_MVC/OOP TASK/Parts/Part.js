function Part(name, firm, watt) {
    this.name = name;
    this.firm = firm;
    this.watt = watt;
}

Part.prototype.getName = function () {
    return this.name;
};

Part.prototype.getFirm = function () {
    return this.firm;
};

Part.prototype.getWatt = function () {
    return this.watt;
};

Part.prototype.checkIfHas = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info(
            "\"" + what + "\" has been found in \"" + this.getName() + "\"");
    } else if (this.getFirm().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info(
            "\"" + what + "\" has been found in \"" + this.getName() + "\"");
    }
};