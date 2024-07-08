var B = (function() {
    console.log('B Function executed !')

    function B(bParams) {
        this.bParams = bParams;
        console.log('B constructor executed !')
    };
    B.prototype.printB = function() {
        console.log("my function name is ".concat('printB !'));
    };

    B.staticMethod1 = function() {
        console.log("exits");
    };

    return B
}());




// let b = new B('B_Params')
// console.log(b.__proto__.constructor.staticMethod1 === B.staticMethod1)
// console.log(b.bParams);
// console.log(b.printB());
// console.log(B.staticMethod1());


var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] }
                instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) { for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var A = (function(_super) {
    // 实现继承关系
    __extends(A, _super);

    function A(name, age) {
        var _this = _super.call(this, false) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    A.prototype.instanceMethod() = function() {
        console.log("my name is ".concat(this.name, " and my age is ").concat(this.age));
    };
    A.struggle = function() {
        console.log("struggle");
    };
    return A;
}(B));