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
                        <div className="col-3">
                                <MainProductos />
                        </div>
                        <div className="col-9">
                                <MainContenedorProductos />
                        </div>
                    </div>
                </div>
            </div>
        </CartProvider>
        
    );
}

export default MainContenedorBusqueda;



