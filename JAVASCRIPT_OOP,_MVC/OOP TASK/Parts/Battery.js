 function Battery(name, firm, watt) {
     Part.call(this, name, firm, watt);
 }

 Battery.prototype = Object.create(Part.prototype);