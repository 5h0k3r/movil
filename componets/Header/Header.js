import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Header(){
    useEffect(() => {
        const mainNavigation = document.querySelector(".main-navigation");
        const overlay = mainNavigation.querySelector(".overlay");
        const toggler = mainNavigation.querySelector(".navbar-toggler");

        const openSideNav = () => mainNavigation.classList.add("active");
        const closeSideNav = () => mainNavigation.classList.remove("active");

        toggler.addEventListener("click", openSideNav);
        overlay.addEventListener("click", closeSideNav);
    });
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top main-navigation">
                <div className="container-fluid">
                    <a className="navbar-brand order-2 order-lg-1 mx-auto mr-lg-3 ml-3 ml-lg-0" href="#home">
                        <Image src="/images/logo.png" alt="Logo de e-consulta" className="prueba" width="136" height="35" />
                    </a>
                    <button className="navbar-toggler " type="button" aria-label="Justify">
                        <span className="navbar-toggler-icon" aria-hidden="true"></span>
                    </button>
                    <div className="overlay d-flex d-lg-none"></div>
                    <div className="order-lg-2 d-lg-flex w-100 sidebar pb-3 pb-lg-0 menu">
                        <ul className="navbar-nav mr-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="scrollmenu">
                    <Link href="/">
                        <a className="active">Inicio</a>
                    </Link>
                    <Link href="/seccion/gobierno">
                        <a>Gobierno</a>
                    </Link>
                    <Link href="/seccion/seguridad">
                        <a>Seguridad</a>
                    </Link>
                    <Link href="/seccion/política">
                        <a>Política</a>
                    </Link>
                    <Link href="/seccion/nación">
                        <a>Nación</a>
                    </Link>
                    <Link href="/seccion/salud">
                        <a>Salud</a>
                    </Link>
                    <a href="#home">Sociedad</a>
                    <a href="#home">Opinión</a>
                    <a href="#home">Educación</a>
                    <a href="#home">Municipios</a>
                    <a href="#home">Ciudad</a>
                    <a href="#home">Saludable</a>
                    <a href="#home">Virales</a>
                    <a href="#home">Espectáculos</a>
                    <a href="#home">Entretenimiento</a>
                    <a href="#home">Deportes</a>
                    <a href="#home">Ciencia</a>
                    <a href="#home">Cultura</a>
                    <a href="#home">En su Tinta</a>
                    <a href="#home">Elecciones</a>
                    <a href="#home">Mundo</a>
                    <a href="#home">Medio Ambiente</a>
                    <a href="#home">Universidades</a>
                    <a href="#home">Economía</a>
                    <a href="#home">Obiturario</a>
                </div>
            </nav>
        </>
    )
}