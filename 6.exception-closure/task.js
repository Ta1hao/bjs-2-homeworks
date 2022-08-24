//задача 1

function parseCount (isNamber) {
    if (isNaN(Number.parseInt(isNamber))) {
        throw new Error('Невалидное значение');
    }
    else return Number.parseInt(isNamber);
}

function validateCount (isNamber) {
    try {
        return parseCount (isNamber); 
        }
       catch (errorOut) {
          return errorOut; 
       }
}

//задача 2

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(!((a < (b + c)) && (b < (a + c)) && (c < (b + a)))) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter () {
            return this.a + this.b + this.c;
    };

    getArea() {
        const p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
     }
        };

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    }
    catch(errorgetTriangle) {  
       return {
        getArea(){
            return 'Ошибка! Треугольник не существует';
        },
        getPerimeter(){
            return 'Ошибка! Треугольник не существует'; 
        }
       };
    };
}