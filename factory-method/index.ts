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

    getShape(typeShape: string): Shape {
        return new this.shapeTypes[typeShape]() 
    }
}