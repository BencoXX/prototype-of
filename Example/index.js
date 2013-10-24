var obj1 = {};

var obj2 = Object.setPrototypeOf({}, obj1);

console.log(obj1 === Object.getPrototypeOf(obj2));
// true

console.log(obj1.isPrototypeOf(obj2));
// true

// Revealing Module Pattern
var object1 = ( function() {
		var pub = {};
		
		// Public property
		pub.property = "Hello World";
		
		// Return just the public parts
		return pub;
	}());

// Properties inheritance
var object2 = ( function() {
		var pub = Object.setPrototypeOf({}, object1);

		return pub;
	}());

var object3 = ( function() {
		var pub = Object.setPrototypeOf({}, object1);
		
		// override property
		pub.property = "Hello Github";
		
		return pub;
	}());

// Add texts to content
var cont = document.getElementById("content");
cont.innerHTML = "object1.propety: " + object1.property + "<br>";
cont.innerHTML += "object2.propety: " + object2.property + "<br>";
cont.innerHTML += "object3.propety: " + object3.property + "<br>";
