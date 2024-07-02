import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import productos from './productosGeneral/general.json'
import AgregarProducto from './agregarProducto';
import ProductRelacionado from './productRelacionado';


function MainProducto() {
    const { id } = useParams();
    const pro = productos.find(it => it.id==id)
    console.log(pro)

    const [nombreCategoria, setNombreCategoria] = useState('');
    const [mostrarMarcas, setMostrarMarcas] = useState(false);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [precioSeleccionado, setPrecioSeleccionado] = useState('');
    const handleChangeCategoria = (e) => {
        const categoria = e.target.value;
        setCategoriaSeleccionada(categoria);
    
        // Obtener y establecer el nombre de la categoría seleccionada
        const nombre = e.target.options[e.target.selectedIndex].text;
        setNombreCategoria(nombre);
    };
    const toggleMostrarMarcas = () => {
        setMostrarMarcas(!mostrarMarcas);
    };
    return (
        <div className="container">
            <div className="prouni row ml-md-12">
                <div className="col-md-2"></div>
                <div className="col-md-4 ">
                    <div className='prominiprod'>
                        <div className="miniprod">
                            <img src={pro.imagen} className="img-fluid" alt={pro.nombre} />
                        </div>
                    </div>
                </div>

                <div className="prouni-1 col-md-3 ">
                    <div className="fuentemarcapro">{pro.marca}</div>
                    <div className="fuentenombrepro">{pro.nombre}</div>  
                    <hr className="linea-horizontal" />
                    
                        <div class='separar'>
                            <span className='precio-antes'> Precio regular: 
                            </span>
                            <span className='fuentestachadopro'>
                                    {pro.descuento ? (
                                            <span style={{ textDecoration: 'line-through' }}>{pro.descuento}</span>
                                    ) : (
                                            <span>&nbsp;</span> // o puedes usar null si prefieres no renderizar nada
                                        )}
                            </span>
                        </div>
                        <div className=''>
                            <span className='fuenteslugpres'>Precio online: </span>
                            <span className='fuenteslugpro'>{pro.slug}</span>
                        </div>
                        <div className="caract"> Características principales </div>
                        <hr className="linea-horizontal" />                
                        <div className="fuentepresentpro">{pro.cantidad}</div>
                        <AgregarProducto producto={pro} />

                </div>
            </div > 
            <div className=" row ml-md-12 mt-5">
            <ProductRelacionado match={{ params: { id } }} />
            </div>
            
        </div>
        
    );
}

export default MainProducto;



