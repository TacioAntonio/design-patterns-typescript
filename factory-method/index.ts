interface Shape {
    draw(): void;
}

class ShapeFactory {
    getShape(shapeType: Shape): Shape {
        return shapeType; // Não gostei da forma que o tutorialspoint <https://www.tutorialspoint.com/design_pattern/factory_pattern.htm> fez, usei injeção de dependência. Assim tá certo, ou devo instanciar aqui dentro, ou tanto faz, o propósito é gerar o objeto e pronto
    }
}

class Circle implements Shape {
    draw(): void {
        console.log("Circle.");
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Rectangle.");
    }
}

class Square implements Shape {
    draw(): void {
        console.log("Square.");
    }
}

const createShape = new ShapeFactory();
const circle = createShape.getShape(new Circle())
circle.draw()
