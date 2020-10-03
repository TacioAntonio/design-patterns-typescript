interface Strategy {
    doOperation(...numbers: Array<number>): number
}

class Sum implements Strategy {
    doOperation(...numbers: Array<number>): number {
        let result = 0;

        for(let n of numbers) {
            result += n;
        }

        return result;
    }
}

class Sub implements Strategy {
    doOperation(...numbers: Array<number>): number {
        let result = 0;

        for(let n of numbers) {
            result -= n;
        }

        return result;
    }
}

class Mult implements Strategy {
    doOperation(...numbers: Array<number>): number {
        let result = 1;

        for(let n of numbers) {
            result *= n;
        }

        return result;
    }
}

class Context {
    strategy!: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(...numbers: Array<number>): number {
        return this.strategy.doOperation(...numbers);
    }

}

const sum = new Sum();
const sub = new Sub();
const mult = new Sub();

const context = new Context(sum)
console.log(context.executeStrategy(1, 2, 3))