function verDetalle(id) {

    fetch(`/empleados/${id}`)

        .then(response => {

            if (!response.ok) {
                throw new Error('Empleado no encontrado');
            }

            return response.json();

        })

        .then(empleado => {

            document.getElementById('detalle').innerHTML = `

                <div class="card">

                    <div class="card-body">

                        <h3>
                            Detalle del empleado
                        </h3>

                        <p>
                            <strong>ID:</strong>
                            ${empleado.id}
                        </p>

                        <p>
                            <strong>Nombre:</strong>
                            ${empleado.nombre}
                            ${empleado.apellido}
                        </p>

                        <p>
                            <strong>Documento:</strong>
                            ${empleado.documento}
                        </p>

                        <p>
                            <strong>Correo:</strong>
                            ${empleado.correo}
                        </p>

                        <p>
                            <strong>Teléfono:</strong>
                            ${empleado.telefono}
                        </p>

                    </div>

                </div>

            `;

        })

        .catch(error => {

            console.error(error);

            document.getElementById('detalle').innerHTML = `

                <div class="alert alert-danger">

                    No fue posible obtener el empleado.

                </div>

            `;

        });

}

function editarEmpleado(id) {

    fetch(`/empleados/${id}`)
        .then(response => {

            if (!response.ok) {
                throw new Error('Empleado no encontrado');
            }

            return response.json();

        })
        .then(empleado => {

            const nombre = prompt('Nombre:', empleado.nombre);

            if (nombre === null) return;

            const apellido = prompt('Apellido:', empleado.apellido);

            if (apellido === null) return;

            const documento = prompt('Documento:', empleado.documento);

            if (documento === null) return;

            const correo = prompt('Correo:', empleado.correo);

            if (correo === null) return;

            const telefono = prompt('Teléfono:', empleado.telefono);

            if (telefono === null) return;


            fetch(`/empleados/${id}/editar`, {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    documento: documento,
                    correo: correo,
                    telefono: telefono
                })

            })
            .then(response => {

                if (!response.ok) {
                    throw new Error('Error al editar empleado');
                }

                window.location.href = '/empleados';

            })
            .catch(error => {

                console.error(error);

                alert('No fue posible editar el empleado');

            });

        })
        .catch(error => {

            console.error(error);

            alert('No fue posible obtener el empleado');

        });
}


function editarEmpleado(id) {

    fetch(`/empleados/${id}`)
        .then(response => {

            if (!response.ok) {
                throw new Error('Empleado no encontrado');
            }

            return response.json();

        })
        .then(empleado => {

            const nombre = prompt('Nombre:', empleado.nombre);

            if (nombre === null) return;

            const apellido = prompt('Apellido:', empleado.apellido);

            if (apellido === null) return;

            const documento = prompt('Documento:', empleado.documento);

            if (documento === null) return;

            const correo = prompt('Correo:', empleado.correo);

            if (correo === null) return;

            const telefono = prompt('Teléfono:', empleado.telefono);

            if (telefono === null) return;


            fetch(`/empleados/${id}/editar`, {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    documento: documento,
                    correo: correo,
                    telefono: telefono
                })

            })
            .then(response => {

                if (!response.ok) {
                    throw new Error('Error al editar empleado');
                }

                window.location.href = '/empleados';

            })
            .catch(error => {

                console.error(error);

                alert('No fue posible editar el empleado');

            });

        })
        .catch(error => {

            console.error(error);

            alert('No fue posible obtener el empleado');

        });

}