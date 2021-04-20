import React from 'react';
import PropTypes from 'prop-types'


import defaultImage from '../images/No-Image-Placeholder.svg.png'

const Painting = ({ url, title, authorUrl, tag, price, quantity }) => {

    const availability = quantity < 10 ? 'Low product quantity' : 'Available'
    
    return  (
    <div>
        <img src={url} alt={title} width="400"/>
        <h2>{title}</h2>
        <p>Author <a href={authorUrl}>{tag}</a></p>
        <p>Price {price} credits</p>
        <p>{availability}</p>
        <button type="button">Add to cart</button>
    </div>
    )
}

Painting.defaultProps = {
    price: 'Specify the price',
    url: defaultImage
}

Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    price: PropTypes.number,
    quantity: PropTypes.number.isRequired 
}


export default Painting;