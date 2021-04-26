import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

export default function MainNote(){
    const [notaPrincipal, setNotaPrincipal] = useState([]);
    const [galeria, setGaleria] = useState({response: []});
    useEffect(() =>{
        Axios({
            url: process.env.eConsultaMainNota
        })
        .then((response) =>{
            setNotaPrincipal(response.data.response.slice(0, 1));
            const eliminado = response.data.response.shift();
            setGaleria(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [setNotaPrincipal]);
    return(
        <>
            {notaPrincipal.map((notap, index) =>(
                <div className="card card-main-note text-white" key={index}>
                    <Image src={process.env.eConsultaImagenes+notap.img_name} className="card-img card-img-main-note" alt={notap.title} layout='fill' />
                    <div className="card-img-overlay card-title-main-note__article">
                        <Link href={`/${notap.alias}`}>
                            <h3 className="card-title-main-note__title">{notap.title}</h3>
                        </Link>
                    </div>
                </div>
            ))}
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-1 wrapper-galeria">
                {galeria.response.map((nota, index) =>(
                    <div className="card card-galeria text-white" key={index}>
                        <Image src={process.env.eConsultaImagenes+nota.img_name} className="card-img card-img-galeria" alt={nota.title} layout='fill' />
                        <div className="card-img-overlay card-title-galeria__article">
                            <Link href={`/${nota.alias}`}>
                                <h2 className="card-title card-title-galeria__title">{nota.title}</h2>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
