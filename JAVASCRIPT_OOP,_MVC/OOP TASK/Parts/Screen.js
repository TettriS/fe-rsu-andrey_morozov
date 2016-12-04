function Screen(name, firm, watt) {
    Part.call(this, name, firm, watt);
}

Screen.prototype = Object.create(Part.prototype);