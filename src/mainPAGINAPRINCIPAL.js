import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './stylemain.css';
import { useNavigate } from 'react-router-dom';
import feather from 'feather-icons';
import productos from './data/productosPaginaPrincipal.json';

import './style.css';
import './category.css';
import categorias from './categoriasCarrusel/product.json';



setTimeout(() => {
    feather.replace();
}, 500);


const Main = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const numVisibleCategories = 5;
    const totalCategories = categorias.length;

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
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
                        <img
                            src="https://i.imgur.com/E0JILF1.png"
                            alt="Previous"
                            className="navigation-button"
                            onClick={handlePreviousClick}
                        />
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
                        <img
                            src="https://i.imgur.com/HmKmTNd.png"
                            alt="Next"
                            className="navigation-button"
                            onClick={handleNextClick}
                        />
                    </div>
                </div>
            </div>

            

            <div class="popular-products-section text-center">
                <h2 class="text-center" ><i data-feather="clipboard"></i> PRODUCTOS MÁS VENDIDOS</h2>
                <div>
                    <div class="product-card">
                        <img src="https://www.prisa.cl/media/cache/attachment/filter/product_gallery_main/b6b1adc76b36bd6a7f81344215e93277/76961/Prisa-6321140456538918788443.png" alt="Producto 1" class="product-image">
                        </img>
                        <div class="product-name">CLORO</div>
                    </div>
                    <div class="product-card">
                        <img src="https://wongfood.vtexassets.com/arquivos/ids/230542/Sapolio-Lejia-Original-5000-g-1-144025.jpg?v=636664861447600000" alt="Producto 2" class="product-image">
                        </img>
                        <div class="product-name">LEJIA</div>
                    </div>
                    <div class="product-card">
                        <img src="https://media.justo.mx/products/7500435140010.jpg" alt="Producto 3" class="product-image">
                        </img>
                        <div class="product-name">DETERGENTE</div>
                    </div>
                    <div class="product-card">
                        <img src="https://i0.wp.com/lepotmarket.com/wp-content/uploads/2021/03/LP-Gloria-Leche-Reconstituida.png?fit=700%2C700&ssl=1" alt="Producto 4" class="product-image">
                        </img>
                        <div class="product-name">LECHE</div>
                    </div>
                    <div class="product-card">
                        <img src="https://media.freshmart.pe/products/62237.png" alt="Producto 5" class="product-image">
                        </img>
                        <div class="product-name">SIBARITA</div>
                    </div>
                </div>
            </div>
            <div className="container-fluid empresa ">            

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
                                        <div className="let-cuerpo">
                                        {`${longText1.substring(0, 150)}...`}
                                        </div>
                                </div>
                                
                                <a class="btn empres" data-bs-toggle="modal" href="#exampleModalToggle2" role="button">
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
                                            <div class="modal-body">
                                            En un pequeño minimarket ubicado en el corazón del vecindario, comenzó como un sueño familiar. Con el tiempo, se convirtió en el lugar preferido de la comunidad, ofreciendo productos frescos y atención personalizada. Su éxito se atribuye a la dedicación por mantener precios justos y a la calidad del servicio, convirtiéndose en un punto de encuentro diario para vecinos y amigos.

                                            </div>
                                            <div class="modal-footer">                                        
                                                <button class="btn empresota" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
                                                    VISIÓN
                                                </button>
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
                                        <div class="modal-body">
                                            En un pequeño minimarket ubicado en el corazón del vecindario, comenzó como un sueño familiar. Con el tiempo, se convirtió en el lugar preferido de la comunidad, ofreciendo productos frescos y atención personalizada. Su éxito se atribuye a la dedicación por mantener precios justos y a la calidad del servicio, convirtiéndose en un punto de encuentro diario para vecinos y amigos.
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
                                        <div class="modal-body">
                                            En un pequeño minimarket ubicado en el corazón del vecindario, comenzó como un sueño familiar. Con el tiempo, se convirtió en el lugar preferido de la comunidad, ofreciendo productos frescos y atención personalizada. Su éxito se atribuye a la dedicación por mantener precios justos y a la calidad del servicio, convirtiéndose en un punto de encuentro diario para vecinos y amigos.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn empresota" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">VISIÓN</button>
                                            <button className="btn empresota" type="button" data-bs-dismiss="modal">CERRAR</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
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

                                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="text-right text-center modal-title empresita" id="historia">HISTORIA</div>
                                                <button class="btn empresota" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal"></button>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                            En un pequeño minimarket ubicado en el corazón del vecindario, comenzó como un sueño familiar. Con el tiempo, se convirtió en el lugar preferido de la comunidad, ofreciendo productos frescos y atención personalizada. Su éxito se atribuye a la dedicación por mantener precios justos y a la calidad del servicio, convirtiéndose en un punto de encuentro diario para vecinos y amigos.

                                            </div>
                                            <div class="modal-footer">                                        
                                                <button class="btn empresota" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
                                                    VISIÓN
                                                </button>
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
                                        <div class="modal-body">
                                            En un pequeño minimarket ubicado en el corazón del vecindario, comenzó como un sueño familiar. Con el tiempo, se convirtió en el lugar preferido de la comunidad, ofreciendo productos frescos y atención personalizada. Su éxito se atribuye a la dedicación por mantener precios justos y a la calidad del servicio, convirtiéndose en un punto de encuentro diario para vecinos y amigos.
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
                                        <div class="modal-body">
                                            En un pequeño minimarket ubicado en el corazón del vecindario, comenzó como un sueño familiar. Con el tiempo, se convirtió en el lugar preferido de la comunidad, ofreciendo productos frescos y atención personalizada. Su éxito se atribuye a la dedicación por mantener precios justos y a la calidad del servicio, convirtiéndose en un punto de encuentro diario para vecinos y amigos.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn empresota" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">VISIÓN</button>
                                            <button className="btn empresota" type="button" data-bs-dismiss="modal">CERRAR</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                    </div>
                </div>
            </div>



   
    </main >;

}

export default Main;