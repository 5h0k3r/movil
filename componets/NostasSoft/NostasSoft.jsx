import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Genericitem from '../Genericitem/Genericitem'
import Slider from "react-slick"

export default function NotasSoft({ path, title }) {

    const [notas, setNotas] = useState([])
    const [fst, setFst] = useState([])
    const [snd, setSnd] = useState([])

    const obtenerNotas = async () => {
        const res = await axios.get(process.env.eConsultaNotasSoft+path)
        const notasD = await res.data
        setNotas(notasD.data)

        setFst(notasD.data.slice(0, 1))
        const eliminado = notasD.data.shift()
        setSnd(notasD.data)

    }
    useEffect(() => {
        obtenerNotas()
    }, [])
    /* SETTINGS for slider/slick */
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        rows: 1,
        slidesPerRow: 3
    }

    return(
        <div className="virales-module mt-4 mb-4">
            <div className="separador">
                <div className="line">
                </div>
                <div className="title">
                    <div className="name">{title}</div>
                </div>
            </div>
            
            {
                fst.map((item, index) => (
                    <Genericitem 
                        title={item.title} 
                        img={`https://fotos.e-consulta.com/${item.img_name}`}
                        src={process.env.eConsultaCanonical+item.alias}
                        count={index}>
                    </Genericitem>
                ))
            }
            <div className="row">
            {
                <Slider {...setting}>
                    {snd.map((item, index) => (
                        <Genericitem
                            title={item.title}
                            img={`https://fotos.e-consulta.com/${item.img_name}`}
                            src={process.env.eConsultaCanonical+item.alias}
                            count={index + 1}>
                        </Genericitem>
                    ))}
                </Slider>
                
            }
            </div>
        </div>
            
    )
}
