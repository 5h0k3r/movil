import React, { useEffect } from 'react'
import Template from '../../../template/template'
import ReactHtmlParser from 'react-html-parser';
import Helmet from 'react-helmet'
import Head from 'next/head'
import Image from 'next/image'


function Opinion({ data }) {
    /*useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js")
        s.setAttribute("async", "true")
        document.head.appendChild(s);
    }, [])*/
    const content = data.data
    const html = content.cuerpo
    console.log(content)
    return (
        <Template>
            <Head>
                <title>{content.title}</title>
            </Head>
            <div className="nota-title">
                <h1>{content.title}</h1>
            </div>
            <div className="row">
                <div className="">
                    <p>{content.AUTOR}</p>
                </div>
                <div className="float-rigth">
                    <Image
                        className="img-fluid float-rigth"
                        width={150}
                        height={150}
                        src={content.src_imgs.replace('public://', process.env.eConsultaImagenes)}
                        alt={content.title}
                    />
                </div>
            </div>
            <div className="txtview text-justify" >
                {ReactHtmlParser(html)}
            </div>
        </Template>
    )
}

export async function getServerSideProps({ params }) {
    const { fecha, slug } = params
    const nota = fecha + "/" +  slug
    const res = await fetch('http://da21w.e-tlaxcala.mx/index.php/opinion/' + nota)
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}

export default Opinion