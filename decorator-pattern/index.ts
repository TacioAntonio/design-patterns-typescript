/**
 * Fonte: {@link https://dev.to/danywalls/using-property-decorators-in-typescript-with-a-real-example-44e}
 */
function Min(limit: number) {
    return function (target: Object, key: string | symbol) {
        let value: string;

        const getter = () => value;
        const setter = (next: string) => {
            if(next.length < limit) {
                Object.defineProperty(target, 'errors', {
                    value: `Your password should be bigger than ${limit}`
                });
            } 

            value = next;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    };
  }
 
class Person {
    [args: string]: any;

    @Min(8)
    password: string;
    
    constructor(password: string){
        this.password = password;
    }
}
 
console.log(new Person('123').errors);