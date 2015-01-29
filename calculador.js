/**
 * @author Víctor Jesús Temprano Hernández
 */
function changer(id, newValue) {
				var element = document.getElementById(id);
				element.innerHTML = newValue;
			}

			function adder(id, dato) {
				var operacion = document.getElementById(id);
				var numeros = operacion.innerHTML.split("+");
				var resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
				
				console.log(numeros[0]);
				changer(dato, "= "+resultado);

			}