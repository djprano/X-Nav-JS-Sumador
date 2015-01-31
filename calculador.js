/**
 * @author Víctor Jesús Temprano Hernández
 */
function changer(id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function sumar(op, res) {
	var operacion = document.getElementById(op);
	var numeros = operacion.innerHTML.split("+");
	var resultado = parseInt(numeros[0]) + parseInt(numeros[1]);

	console.log(numeros[0]);
	changer(res, "= " + resultado);

}

function generar_suma_aleatoria(op) {
	var n1 = Math.floor(Math.random() * 100) + 1;
	var n2 = Math.floor(Math.random() * 100) + 1;
	changer(op,String(n1)+"+"+String(n2));
}
