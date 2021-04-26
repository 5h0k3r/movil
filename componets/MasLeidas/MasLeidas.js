import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { api_tlax_MasLeidas, e_consulta_puebla_img } from '../../contanst'
import Link from 'next/link'

export default function MasLeidas(){
    const [masLeidas, setMasLeidas] = useState({response : []});
    const [cont, setCont] = useState(1);
    useEffect(() =>{
        Axios({
            url: api_tlax_MasLeidas
        })
            .then((response) =>{
                setMasLeidas(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setMasLeidas]);
    console.log(masLeidas)
    return(
        <>
            {masLeidas.response.map((masLeida, index) =>(
                <li key={masLeida.nid}>
                    <span className="number">{index+1}</span>
                    <article className="new new-summary invert" key={masLeidas.nid}>
                        <figure className="news-media">
                            <Link href={`/${masLeida.alias}`}>
                                <img src={e_consulta_puebla_img+masLeida.img_name} alt="famaca_crop1617965274220.jpg_914860300.jpg" />
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
    )
}