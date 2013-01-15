(function () {
	"use strict";
	
	Function.prototype.inherit = function (base) {
		var self = this;

		function ctor() {
			this.constructor = self;
		}

		// constructor function based inheritance
		if (base instanceof Function) {
			for (var key in base) {
				if (Object.hasOwnProperty.call(base, key))
					self[key] = base[key];
			};

			ctor.prototype = base.prototype;
			self.prototype = new ctor();
			self.prototype.__base__ = base.prototype;
			return self;
		}

		// object based inheritance, i.e. abstract class
		self.prototype = base;
		self.prototype.constructor = self;
		self.prototype.__base__ = base;

		return self;
	};
})();