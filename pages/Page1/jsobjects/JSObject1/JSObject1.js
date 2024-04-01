export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		var direccion = Select1.selectedOptionValue;
var subgrupo =  Select5.selectedOptionValue;
var CPC =  Select6.selectedOptionValue;
var detalle =  Input1.text;
var fondoBID =  Select7.selectedOptionValue;
var tipo_compra =  Select8.selectedOptionValue;
var tipo_producto =  Select8Copy1.selectedOptionValue;
var cantidad_anual =  Input2.text;
var catalogo_electronico =  Select8Copy2.selectedOptionValue;
var unidad =  Select8Copy.selectedOptionValue;
var tipo_regimen =  Select8CopyCopy.selectedOptionValue;
var costo_unitario =  Input2Copy.text;
var tipo_presupuesto =  Select8CopyCopy.selectedOptionValue;
var codigo_prestamo_BID =  Input2Copy1.text;
var codigo_proyecto_BID =  Input2Copy1Copy.text;
var procedimiento_sugerido =  Select10.selectedOptionValue;

// Realizar validaciones
if (direccion === "" || subgrupo === "" || CPC === "" || detalle === "" || fondoBID === "" || tipo_compra === "" || tipo_producto === "" || cantidad_anual === "" || catalogo_electronico === "" || unidad === "" || tipo_regimen === "" || costo_unitario === "" || tipo_presupuesto === "" || codigo_prestamo_BID === "" || codigo_proyecto_BID === "" || procedimiento_sugerido === "") {
    // Si algún campo está vacío, muestra un mensaje de error
    showAlert({
        title: "Error",
        message: "Por favor, complete todos los campos del formulario.",
        severity: "error"
    });
} else {
    Api2.run().then(() => {
  showModal('Modal1');
});
}
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}