import React, { useEffect } from 'react'

const Ad = ({ slotId, width, height }) => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }, [])

    return (
        <ins
            className='adsbygoogle'
            style={{ display: 'inline-block', width: `${width}px`, height: `${height}px` }}
            data-ad-client='ca-pub-9342293081207723'
            data-ad-slot={slotId} />
    )
}

export default Ad