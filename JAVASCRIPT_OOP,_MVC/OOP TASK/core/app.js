function Application() {

}

Application.prototype.start = function () {
    var small = new Small();
    small.showWatt();
    small.search('iPhone');

    var middle = new Middle();
    middle.showWatt();
    middle.search('Laptop');

    var full = new Full();
    full.showWatt();
    full.search('Forever');
};