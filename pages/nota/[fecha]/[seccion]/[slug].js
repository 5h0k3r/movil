import React, { useEffect } from 'react'
import Template from '../../../../template/template'
import ReactHtmlParser from 'react-html-parser';
import Slider from "react-slick"
import Helmet from 'react-helmet'
import Head from 'next/head'
import Image from 'next/image'
import Ad from '../../../../componets/Ad/Ad'

 
function Nota({data}){
    
    useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js")
        s.setAttribute("async", "true")
        document.head.appendChild(s)

        //ad 1
        const AD1 = "<div class='ad-mobile'><div id='div-gpt-ad-1595629171961-0' style='width: 300px; height: 250px;'>" +
            "<script>" +
            "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1595629171961-0'); });" +
            "<\/script>" +
            "</div></div>"
        
        const ADCOMPONENT = <Ad slotId='/138222292/test' width={300} height={250} />
        //extracción de los parrafos
        const ps = document.getElementById("body_note").querySelectorAll("p")

        console.log(ADCOMPONENT)

        ps.forEach(function (pf, index) {
            if(index === 3)
            {
                pf.prepend(ADCOMPONENT)
            }
        })

    }, [])
    const content = data.data
    const { src_imgs } = data.data
    const html = content.cuerpo
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: false
    }
    return(
        <Template>
            <Helmet>
            </Helmet>
            <Head>
                {ReactHtmlParser(content.seo)}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content.nota_schema }} ></script>
            </Head>
            <div className="row">
                {src_imgs.length > 1 ? (
                    <Slider {...setting}>
                        {src_imgs.map((image, index) =>(
                            /*<img className="img-fluid" src={e_consulta_puebla_img+image.img_name} alt={image.img_name} key={index} />*/
                            <Image
                                className="img-fluid"
                                layout="responsive"
                                layout="fill"
                                src={image.img_uri.replace('public://', process.env.eConsultaImagenes)}
                                alt={content.title}
                                key={index}
                            />
                        ))}
                    </Slider>
                ) : (
                        <img className="img-fluid" src={src_imgs[0].img_uri.replace('public://', process.env.eConsultaImagenes)} alt={content.title} />
                )}
            </div>
            
            <div className={`row mx-2  ${content.SECCION.toLowerCase()}`}>
                <div className="separador mt-2">
                    <span className="nota-seccion">{content.SECCION}</span>
                </div>
                <div className="nota-title">
                    <h1>{content.title}</h1>
                </div>
                <div className="nota-autor">
                    {content.AUTOR}
                </div>
                {content.sumario ? (
                    <div className="nota-sumario">
                        {content.sumario}
                    </div>
                ) : <></>}
                <div className="txtview text-justify note-body" id="body_note" >
                    {ReactHtmlParser(html)}
                </div>
            </div>
            <div className="">
                <div className="fb-comments" data-href={"https://www.e-consulta.com/" + content.URL_ALIAS} data-numposts="10" data-width=""></div>
                <div id="fb-root"></div>
                <script dangerouslySetInnerHTML={{ __html: '(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7&appId=522731284465449";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook - jssdk"));' }}></script>
            </div>
            <div className="relativas" dangerouslySetInnerHTML={{ __html: content.relativas_render }}></div>
        </Template>
    )
}

export async function getServerSideProps({params}){
    const { fecha, seccion, slug } = params
    const nota = fecha+"/"+seccion+"/"+slug
    const res = await fetch(process.env.eConsultaNota+nota)
    const data = await res.json()
    return{
        props: {
            data: data
        }
    }
}

export default Nota