import React from 'react';
import './Image.css';

const Image = ({ src }) => {
    return (
        <div className="image-container">
            <img className="image" src={src} alt={`image_${src}`} />
        </div>

    );

}

export default Image;
