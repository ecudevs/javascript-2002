console.log('Hola mundo!');
let user = 'Thian';
console.log(user);
user = 'Daniel';
console.log(user);
user = 1234;
console.log(user);
user = true;
console.log(user);

const IVA = 12;
console.log(IVA);
// IVA = 14;
// console.log(IVA);

let a = 3;
let b = '4';
let c = 4;

let suma = c + a + b;
console.log('Suma', suma);

let resta = b - a;
console.log('Resta', resta);

let multiplicacion = b * a;
console.log('Multiplicacion', multiplicacion);

let division = b / a;
console.log('Division', division);

let permisoMama = false;
let permisoPapa = true;

// let salir = permisoMama && permisoPapa;
// let salir = permisoMama || permisoPapa;
let salir = !permisoPapa;

console.log('Salir', salir);

if (permisoPapa && permisoMama) {
	console.log('Hoy salimos!');
} else {
	console.log('Me quedo en casa');
}

let numero = 'adssdasdasd';

// ==
// ===
// !=
// !==
// <
// <=
// >
// >=
if (1 !== '1') {
	console.log('Valor verdadero');
} else {
	console.log('Valor falso');
}

let contador = 0;
console.log(contador);
contador++;
console.log(contador);
contador++;
console.log(contador);
contador++;
console.log(contador);

console.log('---------------');

let restador = 10;
console.log(restador);
restador--;
console.log(restador);
restador--;
console.log(restador);
restador--;
console.log(restador);

console.log('---------------');

let acumulador = 0;
console.log(acumulador);
acumulador += 2; // acumulador = acumulador + 2;
console.log(acumulador);
acumulador += 3;
console.log(acumulador);
acumulador += 4;
console.log(acumulador);

let acumulador2 = 1;
acumulador2 *= 2; // acumulador2 = acumulador2 * 2;
acumulador2 *= 3; // acumulador2 = acumulador2 * 3;

let acumulador3 = 10;
acumulador2 /= 2; // acumulador3 = acumulador3 / 2;
acumulador2 /= 3; // acumulador3 = acumulador3 / 3;

console.log('---------------');

for (let i = 100; i >= 0; i--) {
	// if(i==99) debugger;
	console.log(i);
}

console.log('---------------');

let i = 0;
while (i <= 100) {
	console.log(i);
	i++;
}

console.log('---------------');

i = 0;
do {
	console.log(i);
	i++;
} while (i <= 100);

console.log('---------------');

for (let i = 1; i <= 30; i++) {
	let numeroAImprimir = '';
	for (let j = 1; j <= i; j++) {
		// numeroAImprimir+=i;
		numeroAImprimir = numeroAImprimir + i;
	}
	console.log(numeroAImprimir);
}

console.log('---------------');

function cuadrado(numero) {
	return numero * numero;
}

let resultado = cuadrado(4);
console.log(resultado);

console.log('---------------');

function sumar(a = 1, b = 1) {
	return a + b;
}

console.log(sumar());

console.log('---------------');

let persona = {
	nombre: [ 'Bob', 'Smith' ],
	edad: 32,
	genero: 'masculino',
	intereses: [ 'música', 'esquí' ],
	bio: function() {
		alert(
			this.nombre[0] +
				'' +
				this.nombre[1] +
				' tiene ' +
				this.edad +
				' años. Le gusta ' +
				this.intereses[0] +
				' y ' +
				this.intereses[1] +
				'.'
		);
	},
	saludo: function() {
		alert('Hola, Soy ' + this.nombre[0] + '. ');
	}
};

console.log(persona.edad);
// persona.saludo();

let cars = [ 'Saab', 'Volvo', 11213, { nombre: 'Thian' } ];

for (let i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}

console.log('---------------');

cars.forEach(function(item, index) {
	console.log(item);
});

console.log('---------------');

let nuevaLongitud = cars.push('Ford');
console.log(nuevaLongitud, cars);

console.log('---------------');

cars.pop();
console.log('Cars', cars);

console.log('---------------');

cars.unshift('Chevrolet');
console.log('Cars', cars);

console.log('---------------');

cars.shift();
console.log('Cars', cars);

console.log('---------------');

let posicion = cars.indexOf(11213);
console.log('Posicion', posicion);

console.log('---------------');

cars.splice(1);
console.log('Cars', cars);
