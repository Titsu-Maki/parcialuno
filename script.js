document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    var codigo = document.querySelector('input[name="uname"]').value;
    var password = document.querySelector('input[name="psw"]').value;
    if (password !== '1234') {
        alert('Las credenciales no son válidas');
        document.querySelector('input[name="uname"]').value = '';
        document.querySelector('input[name="psw"]').value = '';
    } else {
        fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                codigo: codigo,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/notas.html'; // Redirige a la interfaz de notas
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});
