const orderForm = document.getElementById('order-form');
const totalElement = document.getElementById('total');
const commentsElement = document.getElementById('comments');
const comboInputs = document.querySelectorAll('input[name="combo"]');
const ingredientCheckboxes = document.querySelectorAll('input[type="checkbox"]');

// Función para calcular el total
function calcularTotal() {
    let total = 0;

    // Calcular el precio del combo seleccionado
    comboInputs.forEach((input) => {
        if (input.checked) {
            total += parseFloat(input.value);
        }
    });

    // Sumar el precio de los ingredientes adicionales seleccionados
    ingredientCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
        }
    });

    // Actualizar el elemento en la página
    totalElement.textContent = total.toFixed(2);
}

// Manejar eventos de cambio en los combos e ingredientes
comboInputs.forEach((input) => {
    input.addEventListener('change', calcularTotal);
});

ingredientCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', calcularTotal);
});

// Manejar evento para mostrar/ocultar comentarios
commentsElement.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'e') {
        commentsElement.style.display = 'block';
        commentsElement.focus();
        event.preventDefault();
    } else if (event.ctrlKey && event.key === 's') {
        commentsElement.style.display = 'none';
        document.getElementById('comments-div').textContent = commentsElement.value;
        event.preventDefault();
    }
});

// Manejar evento de envío del formulario
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Aquí puedes procesar y mostrar los detalles de la orden
    alert('Detalle de la orden:\nCombo seleccionado: ' + document.querySelector('input[name="combo"]:checked + label').textContent + '\nTotal a pagar: $' + totalElement.textContent + '\nComentarios: ' + commentsElement.value);
});