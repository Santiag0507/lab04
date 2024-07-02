import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './stylemain.css';
import { useNavigate } from 'react-router-dom';
import feather from 'feather-icons';
import productos from './data/productosPaginaPrincipal.json';
import productosGeneral from './productosGeneral/general.json';

import './style.css';
import './category.css';
import categorias from './categoriasCarrusel/product.json';



setTimeout(() => {
    feather.replace();
}, 500);


const Main = () => {
    const productosGloria = productosGeneral.filter(producto => producto.marca === 'GLORIA');
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const productsLength = productosGloria.length;
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const totalCategories = productsLength;

    const handlePreviousClick1 = () => {
        setCurrentIndex1((prevIndex) => {
            // Calcula el nuevo índice avanzando 3 hacia atrás y usando el operador módulo para hacer el bucle
            const newIndex = (prevIndex - 3 + totalCategories) % totalCategories;
            return newIndex;
        });
    };
    
    const handleNextClick1 = () => {
        setCurrentIndex1((prevIndex) => {
            if (prevIndex === totalCategories - 1) {
                return 0; // Vuelve a la primera categoría al llegar al final
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }
    const handleClickProducto = (id) => {
        navigate("/producto/" + id);
    }
    
    // Función para avanzar al índice anterior circularmente
    const handlePreviousClick = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return totalCategories - 1; // Vuelve a la última categoría al llegar al inicio
            } else {
                return prevIndex - 1;
            }
        });
    };

    // Función para avanzar al siguiente índice circularmente
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === totalCategories - 1) {
                return 0; // Vuelve a la primera categoría al llegar al final
            } else {
                return prevIndex + 1;
            }
        });
    };



    const longText = `
        En un pequeño minimarket ubicado en el corazón del vecindario, comenzó como un sueño familiar. Con el tiempo, se convirtió en el lugar preferido de la comunidad, ofreciendo productos frescos y atención personalizada. Su éxito se atribuye a la dedicación por mantener precios justos y a la calidad del servicio, convirtiéndose en un punto de encuentro diario para vecinos y amigos.
    `;

    const longText1 = `
        Desde nuestros inicios como un sueño familiar, nos esforzamos por ofrecer una experiencia única a nuestros clientes, basada en la confianza y el compromiso. Nuestro objetivo es proporcionar productos frescos y esenciales para la comunidad, promoviendo un ambiente acogedor que fomente la conexión entre vecinos y amigos.
 `;
    
    const longText2 = `
        En nuestro minimarket, aspiramos a ser reconocidos como el corazón del vecindario, donde cada cliente se siente parte de una familia extendida. Queremos ser el punto de referencia para productos frescos y atención personalizada, manteniendo siempre nuestra dedicación a precios justos y alta calidad de servicio.                      
    `;

    return <main ClassName = "col-md-12">   
                <div className=" carousel-container-fluid">
                        <Carousel>
                            {productos.map((it, index) => (
                                <Carousel.Item key={index} onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(it.slug);
                                }}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className='carousel' src={it.picture} alt={it.name} />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                </div>
            
            
                <div className="container-fluid">
                    <div className="cate-titu">
                        C A T E G O R I A S
                    </div>
                    <div className="row align-items-center"> 
                        <div className="col-md-1 d-flex justify-content-start">
                            <div onClick={handlePreviousClick} style={{ cursor: 'pointer' }}>
                                    <div className="flechitas-cat" data-feather="arrow-left" aria-hidden="true">
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-10 d-flex justify-content-center ">
                                                    
                            {[...categorias.slice(currentIndex), ...categorias.slice(0, currentIndex)].slice(0, 5).map((categoria) => (
                                <div key={categoria.id} className="cate-prin">
                                    <div className="cate-prin-img">
                                        <img src={categoria.imageUrl} alt={categoria.altText} className="category-button" />
                                    </div>
                                    <p className="cate-prin-text  text-right text-center">{categoria.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                            <div onClick={handleNextClick} style={{ cursor: 'pointer' }}>
                                    <div className="flechitas-cat" data-feather="arrow-right" aria-hidden="true">
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center"> 
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="prom">
                                {/* Contenido que quieres centrar */}
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="container-fluid">
                    <div className="cate-new d-flex justify-content-between align-items-center">
                        <span>Lo mejor de GLORIA</span>
                        <div className="d-flex">
                            <div onClick={handlePreviousClick1} style={{ cursor: 'pointer' }}>
                                <div className="flechitas-glor" data-feather="arrow-left-circle" aria-hidden="true">
                                </div>
                            </div>
                            <div onClick={handleNextClick1} style={{ cursor: 'pointer' }}>
                                <div className="flechitas-glor" data-feather="arrow-right-circle" aria-hidden="true">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row"> 
                            <div className="glori-logo col-md-3">
                                <source src="https://i.imgur.com/apRcaJK.mp4" type="video/mp4"/>                                
                            </div>
                            <div className="col-md-9 d-flex ">
                                <div class="row justify-content-between align-items-center">
                                    {[...productosGloria.slice(currentIndex1), ...productosGloria.slice(0, currentIndex1)].slice(0, 5).map(producto => (
                                        <div className="glori-cat">
                                            <div onClick={(e) => {
                                                e.preventDefault();
                                                handleClickProducto(producto.id);
                                            }}>
                                                <div className="glori-cat-img">
                                                    <img src={producto.imagen} className="img-fluid" alt={`Imagen de ${producto.nombre}`} />
                                                </div>
                                                <div className="fuentemarca">{producto.marca}</div>
                                                <div className="fuentenombre-1">{producto.nombre}</div>
                                                <div className='fuenteslug'> {producto.slug}</div>
                                            </div>
                                            <button className="botonagre-1 stylebotonagre-1 " >AGREGAR</button>

                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                    </div>
                </div>          

                <div className="container-fluid-center empresa ">            

                    <div className=" text-right text-center">
                            <div className="text-right text-center "> 
                                <div className="tituloempr">
                                    <i data-feather="users"></i> ¿Quiénes somos?
                                </div>
                                <div className="tituloempr-1">
                                Tu mercado de confianza, siempre cerca.
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="hist col-md-4 ">
                                    <div>
                                        <div className="tituloempr">
                                            HISTORIA
                                        </div>
                                            <div className="letra">
                                            {`${longText.substring(0, 150)}...`}
                                            </div>
                                        
                                    </div>
                                    
                                    <a class="btn empres" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                        <div className="empres-1">
                                            Ver más
                                        </div>
                                    </a>

                                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <div class="text-right text-center modal-title empresita" id="historia">HISTORIA</div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body let-cuerpo">
                                                    <p>{longText}</p>   
                                                </div>
                                                <div class="modal-footer">                                        
                                                    <button class="btn empresota" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">VISIÓN</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="text-right text-center modal-title empresita" id="historia">VISIÓN</div>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body let-cuerpo">
                                                <p>{longText1}</p>    
                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn empresota" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">HISTORIA</button>
                                                <button class="btn empresota" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">MISIÓN</button>
                                                
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <div class="text-right text-center modal-title empresita" id="historia">MISIÓN</div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body let-cuerpo">
                                                    <p>{longText2}</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button class="btn empresota" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">VISIÓN</button>
                                                    <button className="btn empress" type="button" data-bs-dismiss="modal">CERRAR</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="hist col-md-4 ">
                                    <div>
                                        <div className="tituloempr">
                                            VISIÓN
                                        </div>
                                            <div className="letra">
                                            {`${longText1.substring(0, 150)}...`}
                                            </div>
                                    </div>
                                    
                                    <a class="btn empres" data-bs-toggle="modal" href="#exampleModalToggle2" role="button">
                                        <div className="empres-1">
                                            Ver más
                                        </div>
                                    </a>

                                </div>


                                <div className="hist col-md-4 ">
                                    <div>
                                        <div className="tituloempr">
                                            MISIÓN
                                        </div>
                                            <div className="letra">
                                            {`${longText2.substring(0, 150)}...`}
                                            </div>
                                    </div>
                                    
                                    <a class="btn empres" data-bs-toggle="modal" href="#exampleModalToggle3" role="button">
                                        <div className="empres-1">
                                            Ver más
                                        </div>
                                    </a> 
                                </div> 
                        </div>
                    </div>
                </div>
            </main >;

}

export default Main;