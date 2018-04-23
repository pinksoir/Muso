import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__content">
                    <Link to="/">
                        <h1>Muso</h1>
                    </Link>
                </div>
            </div>
        )
    }
}