document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const email = document.getElementById('resetEmail').value;

    // Realizar la solicitud POST para restablecer la contraseña
    fetch('/solicitar-reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        // Verificar que la respuesta sea exitosa
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            // Mostrar la nueva contraseña en una alerta de SweetAlert
            Swal.fire({
                title: '¡Contraseña restablecida!',
                text: `Su nueva contraseña es: ${data.newPassword}`,
                icon: 'success',
                toast: true,
                confirmButtonText: 'Aceptar',
                position: 'top',
                showConfirmButton: true,
                customClass: {
                    confirmButton: 'custom-btn',
                }
            });
        } else {
            // Si el servidor devuelve un mensaje de error
            Swal.fire({
                title: 'Error',
                text: data.message || 'Error al restablecer la contraseña.',
                icon: 'error',
                toast: true,
                position: 'top',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                customClass: {
                    confirmButton: 'custom-btn',
                }
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error',
            text: 'Error al restablecer la contraseña.',
            icon: 'error',
            toast: true,
            position: 'top',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'custom-btn',
            }
        });    
    });
});
