import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <h1 className="navbar-brand" >{props.title}</h1>
                    </div>
                </nav>
            </div>
        </div>
    )
}

Header.defaultProps ={
    title: "Your Title Here"
}

Header.propTypes = {
    title: PropTypes.string
}

