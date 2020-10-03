function FactoryDecorator(value: string) {
    return function (target: any, key: string) {
        let name = value;

        const getter = () => name;
        const setter = (nextName: string) => {
            name = nextName;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    };
  }
 
class Person {
    @FactoryDecorator('Default')
    name: string;
}
 
console.log(new Person().name);