const Extensible = (function main() {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            Object.entries(template).map(([key, value]) =>
                typeof value === "function" ?
                    Object.getPrototypeOf(this)[key] = value :
                    this[key] = value
            )
        }
    }

})();

let obj1 = new Extensible();
obj1.extend({
    extensionMethod: function () { },
    extensionProperty: 'someString'
})