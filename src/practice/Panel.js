import React from 'react'
import PropTypes from 'prop-types'


const Panel = ({ title, children }) => (
    <div>
        {title && <h2>{title}</h2>}
        {children}
    </div>

)

Panel.defaltProps = {
    title: '',
    children: []
}

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default Panel