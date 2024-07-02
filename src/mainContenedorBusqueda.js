import React from 'react';
import  MainProductos from './mainPAGINAPRODUCTOS.js'
import { CartProvider } from './CarContext.js'
import MainContenedorProductos from './mainContenedorPRODUCTOS.js'

function MainContenedorBusqueda() {
   
    return (
        <CartProvider>
            <div>
                <div className="container">
                    <div className="row mt-4">
                    <MainProductos/>
                    <MainContenedorProductos />
                    </div>
                </div>
            </div>
        </CartProvider>
        
    );
}

export default MainContenedorBusqueda;



