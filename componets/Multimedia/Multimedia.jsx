import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import Image from 'next/image'

const Multimedia = () => {
    const [videos, setVideos] = useState([])
    const [current, setCurrent] = useState('')

    const obtenerMultimedia = async () => {
        const res = await axios.get(process.env.eConsultaMultimedia)
        const users = await res.data
        console.log(users);
        setVideos(users.response)
        setCurrent(users.response[0].video_link)
    }

    useEffect(() => {
        obtenerMultimedia()
    }, [])
    return (

        <div className="player-container">
            <div className="separador" id="multimedia">
                <div className="line"></div>
                <div className="title">
                    <div className="opinion-multimedia"></div>
                    <div className="name">Multimedia</div>
                </div>
            </div>
            <div className="player">
                <div className="embedded">
                    <ReactPlayer url={current} muted={true} playing={false} width="100%"/>
                </div>
            </div>
            <div className="mas_video">
            {
                videos.map((item, index) => (

                    <div key={index}>
                        <article className="new new-summary invert" key={index} onClick={(e) => { setCurrent(item.video_link) }}>

                            <div className="news-data">
                                <h1 className="news-title">{item.title}</h1>
                            </div>
                            <figure className="news-media">
                                <Image 
                                    src={process.env.eConsultaImagenes + item.img_name}
                                    alt={item.title} 
                                    layout="fill"
                                />
                            </figure>
                        </article>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Multimedia