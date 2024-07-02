import React, { useState, useEffect } from 'react';
import productos from './productosGeneral/general.json';
import './stylemain.css';

function ProductRelacionado({ match }) {
    const { id } = match.params; // Suponiendo que id es pasado como parámetro de ruta
    const [producto, setProducto] = useState(null);
    const [productosRecomendados, setProductosRecomendados] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Simular carga del producto desde productos.json
    useEffect(() => {
        const productoEncontrado = productos.find(prod => prod.id === id);
        setProducto(productoEncontrado);

        // Filtrar productos recomendados por la misma categoría
        if (productoEncontrado) {
            const productosRecomendados = productos.filter(prod => prod.categoria === productoEncontrado.categoria && prod.id !== id);
            setProductosRecomendados(productosRecomendados);
        }
    }, [id]);

    const handleClickProducto = (productId) => {
        // Implementa la lógica para manejar el clic en el producto
        console.log(`Producto ${productId} clickeado`);
        // Por ejemplo, agregar al carrito, navegar a detalles, etc.
    };

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? productosRecomendados.length - 1 : (prevIndex - 1)));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % productosRecomendados.length);
    };

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="prouni">
            <div className="cate-new d-flex justify-content-between align-items-center">
                <span>Productos recomendados</span>
                <div className="d-flex">
                    <div onClick={handlePrevClick} style={{ cursor: 'pointer' }}>
                        <div className="flechitas-glor" data-feather="arrow-left-circle" aria-hidden="true">
                            &lt;
                        </div>
                    </div>
                    <div onClick={handleNextClick} style={{ cursor: 'pointer' }}>
                        <div className="flechitas-glor" data-feather="arrow-right-circle" aria-hidden="true">
                            &gt;
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-start align-items-center">
                {productosRecomendados.length > 0 && productosRecomendados.slice(currentIndex, currentIndex + 7).map((prod, index) => (
                    <div className="glori-cat" key={index}>
                        <div onClick={() => handleClickProducto(prod.id)}>
                            <div className="glori-cat-img">
                                <img src={prod.imagen} className="img-fluid" alt={`Imagen de ${prod.nombre}`} />
                            </div>
                            <div className="fuentemarca">{prod.marca}</div>
                            <div className="fuentenombre-1">{prod.nombre}</div>
                            <div className='fuenteslug'> {prod.slug}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductRelacionado;

