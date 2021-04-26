import React from 'react';
import Head from 'next/head'
import Template from '../template/template'
import { link_canonical } from '../contanst'

import MainNote from '../componets/MainNote'
import Municipios from '../componets/Municipios'
import UnionAlMyMasL from '../componets/UnionAlM&MasL'
import Publicidad from '../componets/Publicidad'
import LaCorte from '../componets/LaCorte'
import NotasSoft from '../componets/NostasSoft'
import Multimedia from '../componets/Multimedia/Multimedia'
import Ad from '../componets/Ad/Ad'
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default function Home() {
  return (
    <Template>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type": "Organization",
            "name": "e-consulta.com",
            "alternateName": "e-consulta.com",
            "url": `${link_canonical}`,
            "logo": {
              "@type":"ImageObject",
              "url":"https://www.e-consulta.com/assets/images/logo_02.png"
            },
            "sameAs": [
              "https://www.facebook.com/econsulta.noticias",
              "https://twitter.com/e_consulta",
              "https://www.youtube.com/user/videoeconsulta"
            ]
          })}}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type": "WebPage",
            "headline": "e-consulta.com | Periódico Digital de Noticias de Puebla | México 2019",
            "description": "e-consulta – Periódico Digital de Noticias de Puebla,Periódico Digital e-consulta, sitio de Referencia Obligada en noticias minuto por minuto de Puebla, Tlaxcala, Oaxaca Veracruz y el mundo, con secciones de Política, Gobierno, Ciudad, Educación, Universidades, Salud, Economía, Sociedad, Ecología, Seguridad, Nación, Mundo, Cultura, Turismo, Ciencia, Columnas, Artículos, cartones, videos, fotogalerías, gráficos, foros, blogs, chats, redes sociales, Twitter, Facebook, comentarios en notas, obituarios",
            "publisher": {
              "@type": "Organization",
              "name": "e-consulta.com",
              "url": `${link_canonical}`,
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.e-consulta.com/assets/images/logo_02.png"
              },
              "sameAs": [
                "https://www.facebook.com/econsulta.noticias",
                "https://twitter.com/e_consulta",
                "https://www.youtube.com/user/videoeconsulta"
              ]
            }
          })}}
        />
      </Head>
      <Publicidad width={320} height={50} name={"banner.jpeg"} />
      <DFPSlotsProvider dfpNetworkId="138222292">
        <div className="mobile-ads">
      <AdSlot adUnit="/138222292/MovilPortada_FullTop_320x50" sizes={[[320, 50]]} />
        </div>
      </DFPSlotsProvider>
      <MainNote />
      <Municipios />
      <Publicidad width={300} height={250} name={"banner2.jpeg"} />
      <Multimedia />
      <UnionAlMyMasL />
      <LaCorte />
      <Publicidad width={300} height={250} name={"banner2.jpeg"} />
      <NotasSoft path="virales" title="Virales"/>
      <NotasSoft path="nacionymundo" title="Nacion Y Mundo" />
      <NotasSoft path="deportes" title="Deportes" />
    </Template>
  )
}
