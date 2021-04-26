import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Genericitem({title, img, src, count}) {
    return (
        <div className="virales">
            {
                count == 0 ?
                (
                <div className="card mb-2 fst-virales" key={count}>
                    <p className="w-100">
                    <Link href={src}>
                        <a>
                        <Image 
                            src={img} 
                            alt={title}
                            layout="fill"
                        />
                        </a>
                    </Link>
                    </p>
                    <div className="card-header news-data">
                        <Link href={src}>
                            <h1 className="news-title card-title">{title}</h1>
                        </Link>
                    </div>
                    
                </div>
                )
                :
                (
                <article className="new new-summary invert" key={count}>

                    <div className="news-data">
                        <Link href={src}>
                            <h1 className="news-title">{title}</h1>
                        </Link>
                    </div>
                    <figure className="news-media">
                        <Link href={src}>
                            <a>
                            <Image src={img} alt={title} layout="fill"/>
                            </a>
                        </Link>
                    </figure>
                </article>
                )
            }
        </div>
    )
}