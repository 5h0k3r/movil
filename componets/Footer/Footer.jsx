import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="row footer">
            <div className="col-md-12 col-xs-12">
                <div className="row pre-menu">
                    <div className="redes-sociales">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/econsulta.noticias" target="_blank"><i className="fa fa-facebook"></i></a>
                        </div>
                        <div className="social-icon">
                            <a href="https://twitter.com/e_consulta" target="_blank"><i className="fa fa-twitter"></i></a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.youtube.com/user/videoeconsulta" target="_blank"><i className="fa fa-youtube-play"></i></a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.instagram.com/e_consulta/?hl=es-la" target="_blank"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="linea"/>


            <div className="col-md-12 col-xs-12 ">
                
                <Image 
                    src="https://www.e-consulta.com/assets/images/logo_02.png"
                    width={270}
                    height={90}
                    alt="Logo e-consulta"
                />
                <div className="brand">Es una marca registrada, propiedad de 
                    <a href="http://contracorriente.lat/" target="__blank">
                        CONTRACORRIENTE
                    </a>
                </div>
            </div>
            <div className="col-md-12 col-xs-12">
                <hr className="linea"/>
                <Image
                    className="logo-3"
                    src="https://www.e-consulta.com/assets/images/comscore-logo.png"
                    alt="Logo comscore footer"
                    width={450}
                    height={100}
                />
            </div>
        </div>
    )
}