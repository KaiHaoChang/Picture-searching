import './imageList.css'
import React from 'react'
import ImageCard from './imageCard'

const ImageList = (props) => {

  const images = props.images.map(images => {
    return <ImageCard key={images.id} imageCard= {images}/>
  })

  return (
    <div className='image-list'>{images}</div>
  )
}

export default ImageList