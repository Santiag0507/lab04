import React, { useState, useEffect } from 'react';
import productosGeneral from './productosGeneral/general.json';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import productos from './productosGeneral/general.json'

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
        <div>
            Hola
        </div> 
    );
}

export default MainProducto;



