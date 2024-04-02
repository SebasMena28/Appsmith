export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		
	},
	
	
	obtenerNumeroPP(texto){
		let partes = texto.split(' - ')
		let numero = partes[0];
		return numero;
	},
	
	obtenerTextoPP(texto){
		let partes = texto.split(' - ')
		let descripcion = partes[1];
		return descripcion;
	},
	
	obtenerNumeroCPC(texto){
		let partes = texto.split('-')
		let numero = partes[0];
		return numero;
	},
	
	obtenerTextoCPC(texto){
		let partes = texto.split('-')
		let descripcion = partes[1];
		return descripcion;
	},
	
	obtenerMonto(cantidad, dinero){
		return cantidad*dinero
	},
	
	obtenerCuatrimestre(valor){
		if (valor) return "S"
		else return ""
	},
	
	obtenerPeriodo(c1, c2, c3){
		let cadena = ""
		if (c1) cadena += "CUATRIMESTRE1"
		if (c2) cadena += "CUATRIMESTRE2"
		if (c3) cadena += "CUATRIMESTRE3"
		
		return cadena
	},
	
	obteneranio(){
		const fecha = new Date();
    return fecha.getFullYear();
	},
	
	obtenerCodigoSERCOP(){
		return "";
	},
	
	obtenerFeriaInclusiva(){
		return "";
	},
	
	obtenerReforma(){
		return "NO"
	},
	
	obtenerProcesoSugerido(tipoCompra, tipoProducto, catalogoElectronico, costoUnitario, cantidad, fondoBID){
		let monto = costoUnitario * cantidad;
		let procesoSugerido = "MENOR CUANTIA"
		
		switch (fondoBID){
      case "SI":
        switch (tipoCompra){
          case "BIEN":
            if(tipoProducto == "NO NORMALIZADO"){
              if (monto<66593.64) procesoSugerido = "MENOR CUANTIA"
              else procesoSugerido = "COTIZACION"
            }
            else{
              procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
            }
          break;
          case "SERVICIO":
            if(tipoProducto == "NO NORMALIZADO"){
              if (monto<66593.64) procesoSugerido = "MENOR CUANTIA"
              else procesoSugerido = "COTIZACION"
            }
            else{
              procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
            }
          break;
          case "OBRAS":
            if (monto < 233077.74) procesoSugerido = "MENOR CUANTIA"
            else if (monto > 998904.59) procesoSugerido = "LICITACION"
            else procesoSugerido = "COTIZACION"
          break;
          case "CONSULTORIA":
            if (monto <= 66593.64) procesoSugerido = "CONTRATACION DIRECTA"
            else procesoSugerido = "LISTA CORTA"
          break;
        }
      break
      case "NO":
        switch (tipoCompra){
          case "CONSULTORIA":
            if (monto <= 66593.64) procesoSugerido = "CONTRATACION DIRECTA"
            if (monto >= 499452.30) procesoSugerido = "CONCURSO PUBLICO"
            else procesoSugerido = "LISTA CORTA"
          break;
          case "OBRAS":
            if (monto < 233077.74) procesoSugerido = "MENOR CUANTIA"
            else if (monto > 998904.59) procesoSugerido = "LICITACION"
            else procesoSugerido = "COTIZACION"
          break;
          case "BIEN":
          if(tipoProducto == "NORMALIZADO"){
            if(catalogoElectronico == "SI") procesoSugerido = "COMPRA POR CATALOGO ELECTRONICO"
            else{
              if (monto <= 6659.36) procesoSugerido = "INFIMA CUANTIA"
              else procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
            }
          }
          else{
            if(monto < 66593.64) procesoSugerido = "MENOR CUANTIA"
            else if (monto > 499452.30) procesoSugerido = "LICITACION"
            else procesoSugerido = "COTIZACION"
          }
            
          break;
          case "SERVICIO":
          if(tipoProducto == "NORMALIZADO"){
            if(catalogoElectronico == "SI") procesoSugerido = "COMPRA POR CATALOGO ELECTRONICO"
            else{
              if (monto <= 6659.36) procesoSugerido = "INFIMA CUANTIA"
              else procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
            }
          }
          else{
            if(monto < 66593.64) procesoSugerido = "MENOR CUANTIA"
            else if (monto > 499452.30) procesoSugerido = "LICITACION"
            else procesoSugerido = "COTIZACION"
          }
            
          break
        }
      break
    }
    return procesoSugerido;
	},
	
	verProcesoSugerido(){
		let tipoCompra = Select8.selectedOptionValue; 
		let tipoProducto = Select8Copy1.selectedOptionValue; 
		let catalogoElectronico = Select8Copy2.selectedOptionValue;
		let costoUnitario = Input2Copy.text; 
		let cantidad = Input2.text;
		let fondoBID = Select7.selectedOptionValue;
		var procesoSugerido;
		
		if (tipoCompra == '' || tipoProducto == '' || catalogoElectronico == '' || costoUnitario == '' || cantidad == '' || fondoBID == ''){
			Text6.setText("POR FAVOR COMPLETE LOS CAMPOS");
		}
		else{
			let monto = cantidad * costoUnitario;
		
			switch (fondoBID){
				case "SI":
					switch (tipoCompra){
						case "BIEN":
							if(tipoProducto == "NO NORMALIZADO"){
								if (monto<66593.64) procesoSugerido = "MENOR CUANTIA"
								else procesoSugerido = "COTIZACION"
							}
							else{
								procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
							}
						break;
						case "SERVICIO":
							if(tipoProducto == "NO NORMALIZADO"){
								if (monto<66593.64) procesoSugerido = "MENOR CUANTIA"
								else procesoSugerido = "COTIZACION"
							}
							else{
								procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
							}
						break;
						case "OBRAS":
							if (monto < 233077.74) procesoSugerido = "MENOR CUANTIA"
							else if (monto > 998904.59) procesoSugerido = "LICITACION"
							else procesoSugerido = "COTIZACION"
						break;
						case "CONSULTORIA":
							if (monto <= 66593.64) procesoSugerido = "CONTRATACION DIRECTA"
							else procesoSugerido = "LISTA CORTA"
						break;
					}
				break
				case "NO":
					switch (tipoCompra){
						case "CONSULTORIA":
							if (monto <= 66593.64) procesoSugerido = "CONTRATACION DIRECTA"
							if (monto >= 499452.30) procesoSugerido = "CONCURSO PUBLICO"
							else procesoSugerido = "LISTA CORTA"
						break;
						case "OBRAS":
							if (monto < 233077.74) procesoSugerido = "MENOR CUANTIA"
							else if (monto > 998904.59) procesoSugerido = "LICITACION"
							else procesoSugerido = "COTIZACION"
						break;
						case "BIEN":
						if(tipoProducto == "NORMALIZADO"){
							if(catalogoElectronico == "SI") procesoSugerido = "COMPRA POR CATALOGO ELECTRONICO"
							else{
								if (monto <= 6659.36) procesoSugerido = "INFIMA CUANTIA"
								else procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
							}
						}
						else{
							if(monto < 66593.64) procesoSugerido = "MENOR CUANTIA"
							else if (monto > 499452.30) procesoSugerido = "LICITACION"
							else procesoSugerido = "COTIZACION"
						}

						break;
						case "SERVICIO":
						if(tipoProducto == "NORMALIZADO"){
							if(catalogoElectronico == "SI") procesoSugerido = "COMPRA POR CATALOGO ELECTRONICO"
							else{
								if (monto <= 6659.36) procesoSugerido = "INFIMA CUANTIA"
								else procesoSugerido = "SUBASTA INVERSA ELECTRONICA"
							}
						}
						else{
							if(monto < 66593.64) procesoSugerido = "MENOR CUANTIA"
							else if (monto > 499452.30) procesoSugerido = "LICITACION"
							else procesoSugerido = "COTIZACION"
						}

						break
					}
				break
			}

			Text6.setText(procesoSugerido);
		}	
	},
	
	controlarCampos(){
		
		Text8.setVisibility(false);
		
		let tipoCompra = Select8.selectedOptionValue; 
		let tipoProducto = Select8Copy1.selectedOptionValue; 
		let catalogoElectronico = Select8Copy2.selectedOptionValue;
		let costoUnitario = Input2Copy.text; 
		let cantidad = Input2.text;
		let fondoBID = Select7.selectedOptionValue;
		
		let direccion = Select1.selectedOptionValue;
		let subgrupo = Select5.selectedOptionValue;
		let cpc = Select6.selectedOptionValue;
		let detalle = Input1.text;
		let unidad = Input2.text;
		let tipoPresupuesto = Select8CopyCopyCopy.selectedOptionValue;
		let regimen = Select8CopyCopy.selectedOptionValue;
		
		if (tipoCompra == '' || tipoProducto == '' || catalogoElectronico == '' || costoUnitario == '' || cantidad == '' || fondoBID == '' || 
			 direccion == '' || subgrupo == '' || cpc == '' || detalle == '' || unidad == '' || tipoPresupuesto == '' || regimen == ''){
			Text8.setVisibility(true);
		}
		else {
			Ingresar_datos.run()
			Text8.setVisibility(false);
			showModal('Modal1')
		}
		
	},
	
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}