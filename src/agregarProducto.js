import React, { useState } from 'react';

const AgregarProducto = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1); // Estado inicial del contador

    // Función para incrementar la cantidad
    const incrementarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    // Función para decrementar la cantidad, evitando que sea menor que 1
    const decrementarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    // Función para agregar el producto con la cantidad seleccionada
    const agregarAlCarrito = () => {
        // Aquí podrías implementar la lógica para agregar al carrito
        console.log(`Agregando ${cantidad} ${producto.nombre} al carrito.`);
    };

    return (
        <div className="agregar-producto">
            <span className="contador">
                <button className='botonagre-2 stylebotonagre-2' onClick={decrementarCantidad}>-</button>
                <span>{cantidad}</span>
                <button className='botonagre-2 stylebotonagre-2' onClick={incrementarCantidad}>+</button>
            </span>
            <span>
                <button className='botonagre-1 stylebotonagre-1' onClick={agregarAlCarrito}>AGREGAR</button>
            </span>
        </div>

    );
};

export default AgregarProducto;
