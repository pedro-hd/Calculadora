function calcular(tipo, valor) { 
	
	// verifico se o tipo é uma ação ou um valor
	if(tipo === 'acao'){

		if(valor === 'clear'){ // se o 'C' for pressionado limpo o visor
			document.getElementById('resultado').value = ''
		}
		else if (valor !== '='){ // se for qualquer uma das operações ou o 'ponto'

			document.getElementById('resultado').value += valor

		}else{
			//efetuo a operação utilizando o 'eval' e jogo esse resultado de da variavel de memso nome
			var resultado = eval(document.getElementById('resultado').value)
			
			//acesso o elemnto e alteo seu valor pro resultado da operacao
			document.getElementById('resultado').value = resultado
		}


	}else if(tipo === 'valor'){

		document.getElementById('resultado').value += valor // concatenação dos valores recebidos por parametro
	}

}