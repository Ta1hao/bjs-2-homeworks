//задача 1

function parseCount (isNamber) {
    if (isNaN(Number.parseInt(isNamber))) {
        const errorOut = new Error('Невалидное значение');
        throw errorOut;
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
            const errorOut = new Error('Треугольник с такими сторонами не существует');
            throw errorOut;
        }
    }

    getPerimeter (a,b,c) {
        try {
            return this.a + this.b + this.c;
        }
        catch(errorOut) {
            const errorgetTriangle = new Error('Ошибка! Треугольник не существует');
            throw errorgetTriangle;
        }
    }

    getArea (a,b,c) {
        try {
            let p;
            p = this.getPerimeter(a,b,c) / 2;
            return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);  
        }
        catch(err) {
            if(err == errorOut){
            return errorOut;
            }
        }
    }
};

function getTriangle(a,b,c) {
    try {
        const newTriangle = new Triangle(a,b,c);
        return newTriangle; 
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