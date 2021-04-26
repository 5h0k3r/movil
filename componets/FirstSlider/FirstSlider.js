import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api_tlax_FirstSlider_P2, e_tlax_img } from '../../contanst';
import Link from 'next/link';

export default function FirstSlider(){
    const [firstSlider, setFirstSlider] = useState({response : []});
    useEffect(() =>{
        Axios({
            url: api_tlax_FirstSlider_P2
        })
            .then((response) =>{
                setFirstSlider(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setFirstSlider]);
    return(
        <>
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-1 wrapper-first-slider">
                {firstSlider.response.map((note) =>(
                    <div className="card card-first-slider text-white" key={note.nid}>
                        <img src={e_tlax_img+note.img_name} className="card-img card-img-first-slider" alt="..." />
                        <div className="card-img-overlay card-title-first-slider__article">
                            <Link href={`/${note.alias}`}>
                                <h2 className="card-title card-title-first-slider__title">{note.title}</h2>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}