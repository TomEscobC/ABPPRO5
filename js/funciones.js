// Función para mostrar la fecha y hora actuales
function mostrarFecha() {
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const mesesAno = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const ahora = new Date();

    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = mesesAno[ahora.getMonth()];
    const ano = ahora.getFullYear();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${ano}, y son las ${horas} horas, ${minutos} minutos con ${segundos} segundos`;

    // Mostrar en el contenedor
    document.getElementById("fechaActual").innerHTML = `<p>${mensaje}</p>`;
}

// Ejecutar función al cargar la página
window.onload = mostrarFecha;