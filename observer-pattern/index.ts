interface Observer {
    subject: Subject;
    notification(): void;
}

class Subject {
    listOfObservers: Array<Observer> = [];
    state = 0;

    getState() {
        return this.state;
    }

    setState(state: number) {
        if(state < 0 || state > 100) return;
        this.state = state;
        this.notifyAll()
    }

    attach(observer: Observer) {
        this.listOfObservers.push(observer) 
    }

    notifyAll() {
        for(let eachObserver of this.listOfObservers) {
            eachObserver.notification()
        }
    }

}

class FirstObserver  {
    subject!: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this)
    }

    notification() {
        let loader = [];
        const subjectState = Number(this.subject.getState());

        for(let i: number = 0; i < subjectState; i++) {
            loader.push('|')
        }

        console.log(`${this.subject.getState()}%`, loader.join(''))
    }
}

class SecondObserver  {
    subject!: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this)
    }

    notification() {        
        let loader = [];
        const subjectState = Number(this.subject.getState());

        for(let i: number = 0; i < subjectState; i++) {
            loader.push('#')
        }
        
        console.log(`${this.subject.getState()}%`, loader.join(''))
    }
}

class TirthyObserver  {
    subject!: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    notification() {
        let loader = [];
        const subjectState = Number(this.subject.getState());

        for(let i: number = 0; i < subjectState; i++) {
            loader.push('*')
        }

        console.log(`${this.subject.getState()}%`, loader.join(''))
    }
}

const subject = new Subject()

new FirstObserver(subject)
new SecondObserver(subject)
new TirthyObserver(subject)

subject.setState(5)