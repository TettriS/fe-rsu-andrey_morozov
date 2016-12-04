function Application() {

}

Application.prototype.start = function () {
    var small = new Small();
    small.parts[1].on();
    small.showWatt();
    small.search('iPhone');

    var middle = new Middle();
    middle.parts[1].on();
    middle.parts[2].on();
    middle.showWatt();
    middle.search('Laptop');

    var full = new Full();
    full.parts[1].on();
    full.parts[2].on();
    full.parts[3].on();
    full.showWatt();
    full.search('Forever');
};