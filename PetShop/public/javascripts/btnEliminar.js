window.addEventListener('load', function () {
    console.log('JS vinculado correctamente');

    let btnEliminar = document.querySelectorAll('#eliminarProducto');
    for (let i = 0; i < btnEliminar.length; i++) {
        btnEliminar[i].addEventListener('submit', (e) => {
            e.preventDefault()
            Swal.fire({
                title: '¿Quiere eliminar este producto?',
                text: "¡No podrás revertir esto!",
                icon: '¡advertencia!',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, bórralo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Eliminado!',
                        'Tu archivo ha sido eliminado.',
                        'success'
                    )
                    .then(() => {
                    btnEliminar[i].submit()
                })
                }
            })
                
        })
    }

})