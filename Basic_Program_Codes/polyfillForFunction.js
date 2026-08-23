Function.prototype.myBind = function (context, ...boundArgs) {
    const fn = this;
    return function (...callArgs) {
        return fn.apply(context, [...boundArgs, ...callArgs]);
    };
};
const obj = { name: "Sara" };
function intro(greeting) { console.log(`${greeting},	${this.name}`); }
const boundIntro = intro.myBind(obj, "Hello");
boundIntro();

// 	myBind	captures	the	original function	(this	inside	myBind)	and	returns	a	new	function	that,	when	eventually
// called, invokes	the	original with a	fixed	context	and	pre - supplied	arguments	merged	with	any	later	arguments