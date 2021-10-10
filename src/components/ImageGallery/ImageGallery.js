import React from 'react'

const ImageGallery = ({data, img, galleryList}) => {   
            return (
                <div>
                    <ul className="ImageGallery" ref={galleryList}>
                    {data.map(e=>{return <li className="ImageGalleryItem" key={e.id} >
                    <img src={e.webformatURL} alt={e.tags} className="ImageGalleryItem-image" onClick={()=>img(e.largeImageURL)}/>
                     </li>})}
                    </ul>
                </div>
            )
            }  


export default ImageGallery