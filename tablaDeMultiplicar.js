const tabla = new Vue({
	el: "#contenedor",
	data: {
		tablaMultiplicar: ``,
		numero: 0,
	},
	methods:{
		entablar(numero,aumento, igual, limite){
			this.tablaMultiplicar = "";
			numero = this.numero;
			limite = 12;
			igual = 0;
			for(aumento = 0; aumento <= limite; aumento++){
				igual = numero * aumento;
				this.tablaMultiplicar += `<li class="lis" v-html>  ${aumento} X ${numero}  = ${igual} </li> `;

			}
 		
		},
	}
})

//Listo y en pleno funcionamiento