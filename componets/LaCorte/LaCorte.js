import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
export default function LaCorte(){
    const[corte, setCorte] = useState({ data: [] })
    //const [cont, setCont] = useState(1);
    useEffect(() => {
        Axios({
            url: process.env.eConsultaCorte
        })
        .then((response) => {
            
            setCorte(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    return(
        <fragment>
            {
                corte.data.map((info, index) =>(
                        <div className="corte"  key={index}>
                        <div className="corte-head">
                            <Image src="/images/logo-corte.png" className="corte-logo" width="110" height="50" />
                        </div>
                        <a className="corte-link" href={info.link} target="_blank">
                            <article className="corte-article text-center">
                                <Image
                                    src={process.env.eConsultaImagenes + info.img_name}
                                    alt={info.title}
                                    width={320}
                                    height={192}
                                />
                            </article>
                            <div className="corte-title text-white font-weight-bold p-5">
                                {info.title}
                            </div>
                        </a>
                    </div>
                ))
            }
        </fragment>
    )
}