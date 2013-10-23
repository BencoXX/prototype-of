// PrototypeOf ECMAScript implementations
// Date: 18 October 2013

// getPrototypeOf ECMAScript 5th Edition
if ( typeof Object.getPrototypeOf !== "function") {
	if ( typeof "test".__proto__ === "object") {
		Object.getPrototypeOf = function(object) {
			return object.__proto__;
		};
	} else {
		Object.getPrototypeOf = function(object) {
			// May break if the constructor has been tampered with
			return object.constructor.prototype;
		};
	}
}

// setPrototypeOf ECMAScript 6th Edition
if ( typeof Object.setPrototypeOf !== "function") {
	if ( typeof "test".__proto__ === "object") {
		Object.setPrototypeOf = function(obj, proto) {
			obj.__proto__ = proto;
			return obj;
		};
	} else {
		Object.setPrototypeOf = function(obj, proto) {
			var type = typeof proto;
			if ( typeof obj == "object" && (type == "object" || type == "function")) {
				var constructor = function(obj) {
					var ownPropertyNames = Object.getOwnPropertyNames(obj);
					var length = ownPropertyNames.length;
					for (var i = 0; i < length; i++) {
						var ownPropertyName = ownPropertyNames[i];
						this[ownPropertyName] = obj[ownPropertyName];
					}
				};
				constructor.prototype = proto;
				return new constructor(obj);
			} else
				throw new TypeError("Expected both the arguments to be objects.");
		};
	}
}

// isPrototypeOf ECMAScript 3rd Edition (Supported major browsers, therefore not implemented)
