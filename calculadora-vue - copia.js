// let teclas = document.querySelectorAll(".panel-numerico ul li")
// console.log(teclas)
const calculadora = new Vue({
	el: "#contenedor",
	data:{
		digito: null,
		accion: null,
		comprobarSignos: 0,
		comprobarDecimal: false,
		comprobarOperador: false,
		comprobarResultado: false,
		operaciones: "0",
		teclas: document.querySelectorAll(".panel-numerico ul li"),
		domHistorial: document.getElementById('historial'),
		historial: " ",

	},
	methods:{
		inicio(digito){
		 	this.digito = this.teclas[digito].innerHTML;
		 	this.accion = this.teclas[digito].className
		 	calculadora.agregarDigito()
		},
		 agregarDigito(){
			if (this.accion === "numero") {
				if (this.operaciones == "0") {
					this.operaciones = this.digito;
				}else{
					this.comprobarSignos = 0;
					this.comprobarOperador = false;
					this.operaciones += this.digito;
				}
			}
			else if (this.accion === "operador") {
				this.comprobarSignos++;
				if(this.comprobarSignos > 1);
				else{
					if (this.comprobarSignos == 0) this.operacion = 0;
					else {
						this.operaciones += this.digito; 
						this.comprobarOperador = true
						this.comprobarDecimal = false
					}
				}
			}
			else if (this.accion === "decimal") {
				if(this.comprobarDecimal || this.comprobarSignos == 1);
				else{
					this.operaciones += this.digito;
					this.comprobarDecimal = true;
				}
			}
			else if (this.accion == "igual") {
				if (this.comprobarSignos == 1 || this.comprobarDecimal);
				else{
					calculadora.calcular()
				}
			}
			else calculadora.borrar();
		},
		calcular(operacion,resultado){
			operacion = this.operaciones;
			this.operaciones =  eval(this.operaciones)
			resultado = this.operaciones;
			calculadora.agregarAlHistorial(operacion,resultado)

		},
		borrar(){
			this.operaciones = "0";
			this.comprobarSignos = 0; 
			this.comprobarDecimal = false;
			this.comprobarOperador = false;
		},
		agregarAlHistorial(operacion,resultado){
			this.historial += `<br><br> Operacion: ${operacion} <br>                
			resultado: ${resultado}  `;
		},
		limpiarHistorial(){
			this.historial = " "
		}
	}
})
