import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Link from 'next/link';
import Image from 'next/image'

export default function Municipios(){
    const [municipios, setMunicipios] = useState({ data : [] });
    useEffect(() =>{
        Axios({
            url: process.env.eConsultaMunicipios
        })
            .then((response) =>{
                setMunicipios(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setMunicipios]);
    return(
        <>
            <div className="separador-municipios">
                <div className="line-municipios"></div>
                <div className="title-municipios">
                    <div className="municipios-logo"></div>
                    <div className="name-municipios">Municipios</div>
                </div>
            </div>
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-1 wrapper-first-slider">
                {municipios.data.map((municipio) =>(
                    <div className="card card-first-slider text-white" key={municipio.nid}>
                        <Image 
                            src={process.env.eConsultaImagenes+municipio.img_name} 
                            className="card-img card-img-first-slider" 
                            alt={municipio.title}
                            layout="fill"
                        />
                        <div className="card-img-overlay card-title-first-slider__article">
                            <Link href={`/${municipio.alias}`}>
                                <h2 className="card-title card-title-first-slider__title">{municipio.title}</h2>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}