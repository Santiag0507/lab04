import React from 'react';
import productosGeneral from './productosGeneral/general.json';
import { useNavigate } from 'react-router-dom';
import {useFilters} from './useFilter'

function MainContenedorProductos() {
    const { marca } = useFilters()
    const productos = productosGeneral;
    const navigate = useNavigate();
 
    console.log("Contenedor",marca)
    const productosFiltrados = productos.filter(producto => {
        let categoriaValida = true;
        if (marca) {
            categoriaValida = producto.categoria === marca;
        }
        return categoriaValida
    });

    const handleClickProducto = (id) => {
        navigate("/producto/" + id);
    }
    return (
              <div>
                <div className="col-md-9">
                        <h4 className="text-right text-center tit-pro">PRODUCTOS</h4>
                        <div className="procard row">
                            {productosFiltrados.map((producto, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="procardcat">
                                        <div>
                                            <div onClick={(e) => {
                                                    e.preventDefault();
                                                    handleClickProducto(producto.id);
                                                }}>
                                                <div className="minicard">
                                                    <img src={producto.imagen} className="img-fluid" alt={`Imagen de ${producto.nombre}`} />
                                                </div>
                                                <div className="fuentemarca">{producto.marca}</div>
                                                <div className="fuentenombre">{producto.nombre}</div>
                                                <div className="fuentemarca">{producto.cantidad}</div>
                                                <div className='fuentestachado'>
                                                    {producto.descuento ? (
                                                        <span style={{ textDecoration: 'line-through' }}>{producto.descuento}</span>
                                                    ) : (
                                                        <span>&nbsp;</span> // o puedes usar null si prefieres no renderizar nada
                                                    )}
                                                </div>
                                                <div className='fuenteslug'> {producto.slug}</div>
                                            </div>
                                            <button className="botonagre stylebotonagre " >AGREGAR</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> 
              </div>
    );
}

export default MainContenedorProductos;



