interface Shape {
    draw(): void;
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

class ShapeFactory {
    shapeTypes: any = {
        circle: Circle,
        square: Square,
        rectangle: Rectangle,
    }
        

    getShape(typeShape: any): any {
        // A ideia do factory seria esconder o new, a instanciação do objeto, podendo alguém usar sem se preocupar em instanciar o Circle, Square,... assim evitando quebra o sistema por exemplo, porque se preocuparia somente com ShapeFactory
        return new this.shapeTypes[typeShape]() 
    }
}
const createShape = new ShapeFactory();
const circle = createShape.getShape('circle')
circle.draw()
