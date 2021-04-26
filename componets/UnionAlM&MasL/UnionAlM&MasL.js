import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Axios from 'axios'
import Link from 'next/link'

export default function UnionAlMyMasL(){
    const [showAlM, setShowAlM] = useState(true)
    const [alMomento, setAlMomento] = useState({response : []});
    const [masLeidas, setMasLeidas] = useState({response : []});
    useEffect(() =>{
        Axios({
            url: process.env.eConsultaAlMomento
        })
            .then((response) =>{
                setAlMomento(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        Axios({
            url: process.env.eConsultaMasLeidas
        })
            .then((response) =>{
                setMasLeidas(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setAlMomento, setMasLeidas]);
    return(
        <>
            <div className="mod content-union">
                <header className="content-header">
                    <a className="content-mas-leidas-title" onClick={showAlM ? (()=>setShowAlM(true)):(()=>setShowAlM(!showAlM))}>Al Momento</a>
                    <div className="separacion"></div>
                    <a className="content-al-momento-title" onClick={!showAlM ? (()=>setShowAlM(false)):(()=>setShowAlM(!showAlM))}>Mas Leídas</a>
                </header>
                <ul className="content-content">
                    {showAlM ? (
                        <>
                            {alMomento.response.map((momento, index) =>(
                                <li key={momento.nid}>
                                    <span className="number">{index+1}</span>
                                    <article className="new new-summary invert" key={momento.nid}>
                                        <figure className="news-media">
                                            <Link href={`/${momento.alias}`}>
                                                <Image src={process.env.eConsultaImagenes+momento.img_name} alt={momento.img_name} layout='fill' />
                                            </Link>
                                        </figure>
                                        <div className="news-data">
                                            <Link href={`/${momento.alias}`}>
                                                <h1 className="news-title">{momento.title}</h1>
                                            </Link>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </>
                    ): (
                        <>
                            {masLeidas.response.map((masLeida, index) =>(
                                <li key={masLeida.nid}>
                                    <span className="number">{index+1}</span>
                                    <article className="new new-summary invert" key={masLeidas.nid}>
                                        <figure className="news-media">
                                            <Link href={`/${masLeida.alias}`}>
                                                <Image src={process.env.eConsultaImagenes+masLeida.img_name} alt={masLeida.img_name} layout='fill' />
                                            </Link>
                                        </figure>
                                        <div className="news-data">
                                            <Link href={`/${masLeida.alias}`}>
                                                <h1 className="news-title">{masLeida.title}</h1>
                                            </Link>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            </div>
        </>
    )
}