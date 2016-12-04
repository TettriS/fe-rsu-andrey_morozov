function Room(name, parts) {
    Electronic.call(this, name, parts);
}

Present.prototype = Object.create(Electronic.prototype);