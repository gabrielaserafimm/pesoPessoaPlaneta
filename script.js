function calcular() {
    let planeta   = parseFloat(document.getElementById('planeta').value);
    let peso       = parseFloat(document.getElementById('peso').value);
    let resultado = 0;

    if (isNaN(peso)) {
        return alert('Valor inválido');
    }

    if (peso === 0) {
        return alert('Peso não pode ser zero.');
    }

    resultado = peso/10 * planeta;

    document.getElementById('peso-resultado').innerHTML = resultado.toFixed(2) + 'kg';
}

function cancelar() {
    document.getElementById('planeta').value = '0';
    document.getElementById('peso').value = '';
    document.getElementById('peso-resultado').innerHTML = ''
}