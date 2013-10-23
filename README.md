prototype-of
============

This library is for setPrototypeOf ECMA 6 and getPrototypeOf ECMA 5 javascript function implementations. That's because, unfortunately, the 'set', there is still nowhere to be implemented natively.  The accompanying 'set' works on all browsers supporting ECMA 5. Compatible up to (the 'isPrototypeOf' ECMA 3 to complete the picture) - the 'get' all the way ECMA 3

Links
[setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
[getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2FgetPrototypeOf)
[isPrototypeOf](http://mdn.beonex.com/en/JavaScript/Reference/Global_Objects/Object/isPrototypeOf.html)

Tutorial
var obj1 = {};
var obj2 = Object.setPrototypeOf({},obj1);

obj1 === Object.getPrototypeOf(obj2); // true

obj1.isPrototypeOf(obj2); // true