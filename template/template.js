import React from 'react'
import Head from 'next/head'

import Header from '../componets/Header';
import Footer from '../componets/Footer/Footer'

export default function Template({children}){
    return(
        <div className="pt-5">
            <Head>
                <title>m.e-consulta.com | Periódico Digital de Noticias de Puebla | México 2021</title>
                <meta name="description" content="Periódico Digital de Noticias de Puebla" />
                {/*<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9342293081207723"
                    crossorigin="anonymous"></script>*/}
            </Head>
            <Header />
            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 main-heading">
                        <div className="pt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}