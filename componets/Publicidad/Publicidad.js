import React from 'react'
import Image from 'next/image'

export default function Publicidad({width, height, name}){
    return(
        <>
            <div className="content-publicidad content-publicidad-wrapper">
                <Image  src={"/images/"+name} alt="Logo de e-consulta" width={width} height={height} />
            </div>
        </>
    )
}