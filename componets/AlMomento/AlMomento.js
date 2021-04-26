import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { api_tlax_Al_Momento, e_consulta_puebla_img } from '../../contanst'
import Link from 'next/link'

export default function AlMomento(){
    const [alMomento, setAlMomento] = useState({response : []});
    useEffect(() =>{
        Axios({
            url: api_tlax_Al_Momento
        })
            .then((response) =>{
                setAlMomento(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setAlMomento]);
    console.log(alMomento)
    return(
        <>
            {alMomento.response.map((momento, index) =>(
                <li key={momento.nid}>
                    <span className="number">{index+1}</span>
                    <article className="new new-summary invert" key={momento.nid}>
                        <figure className="news-media">
                            <Link href={`/${momento.alias}`}>
                                <img src={e_consulta_puebla_img+momento.img_name} alt="famaca_crop1617965274220.jpg_914860300.jpg" />
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
    )
}