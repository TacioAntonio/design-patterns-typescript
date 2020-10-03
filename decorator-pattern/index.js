var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classDecorator(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hello = "Hello";
            _this.people = "Max";
            return _this;
        }
        return class_1;
    }(target));
}
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greeting = function () {
        return this.hello + ', ' + this.people + '!';
    };
    Greeter = __decorate([
        classDecorator
    ], Greeter);
    return Greeter;
}());
console.log(new Greeter().greeting());
// function FactoryDecorator(value: string) {
//     return function (target: any, key: string) {
//         let name = value;
//         const getter = () => name;
//         const setter = (nextName: string) => {
//             name = nextName;
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//             enumerable: true,
//             configurable: true
//         })
//     };
//   }
// class Person {
//     @FactoryDecorator('Default')
//     name: string = '';
// }
// console.log(new Person().name);
