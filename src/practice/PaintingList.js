import React from 'react';
import PropTypes from 'prop-types'

import Painting from '../components/Painting'

const PaintingList = ({ items }) => (
    <ul>
    {items.map(({ id, url, title, author, price, quantity }) => (
        <li key={id}>
        <Painting 
        url={url}
        title={title}
        authorUrl={author.url}
        tag={author.tag}
        price={price}
        quantity={quantity}
        />
        </li>
    ))}
    </ul>
)

Painting.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ 
        id: PropTypes.string.isRequired
     })).isRequired
     //items.isRequired  marked in console as undefined
}

export default PaintingList;