// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


// Código del triángulo
function perimetroTriangulo(a, b, base) {
    return a + b + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Código del círculo
// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


// Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const ladoCuadrado = document.getElementById("InputCuadrado");
    const valorLadoCuadrado = ladoCuadrado.value;

    const resultadoPerimetroCuadrado = perimetroCuadrado(valorLadoCuadrado);
    alert(resultadoPerimetroCuadrado);
}

function calcularAreaCuadrado() {
    const ladoCuadrado = document.getElementById("InputCuadrado");
    const valorLadoCuadrado = ladoCuadrado.value;

    const resultadoAreaCuadrado = areaCuadrado(valorLadoCuadrado);
    alert(resultadoAreaCuadrado);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const baseTriangulo = document.getElementById("InputBaseTriangulo");
    const valorBase = parseFloat(baseTriangulo.value);
    const ladoATriangulo = document.getElementById("InputLadoATriangulo");
    const valorLadoA = parseFloat(ladoATriangulo.value);
    const ladoBTriangulo = document.getElementById("InputLadoBTriangulo");
    const valorLadoB = parseFloat(ladoBTriangulo.value);

    const resultadoPerimetroTriangulo = perimetroTriangulo(valorLadoA, valorLadoB, valorBase);
    alert(resultadoPerimetroTriangulo);
}

function calcularAreaTriangulo() {
    const baseATriangulo = document.getElementById("InputBaseAreaTriangulo");
    const valorBase = baseATriangulo.value;
    const alturaTriangulo = document.getElementById("InputAlturaTriangulo");
    const valorAltura = alturaTriangulo.value;

    const resultadoAreaTriangulo = areaTriangulo(valorAltura, valorBase);
    alert(resultadoAreaTriangulo);
}

//Circulo
function calcularDiametro() {
    const radio = document.getElementById("InputCirculo");
    const valorRadio = radio.value;

    const resultadoDiametro = diametroCirculo(valorRadio);
    alert(resultadoDiametro);
}

function calcularCircunferencia() {
    const radio = document.getElementById("InputCirculo");
    const valorRadio = radio.value;

    const resultadoCircunferencia = perimetroCirculo(valorRadio);
    alert(resultadoCircunferencia);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo");
    const valorRadio = radio.value;

    const resultadoAreaCirculo = areaCirculo(valorRadio);
    alert(resultadoAreaCirculo);
}