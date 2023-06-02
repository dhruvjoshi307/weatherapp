import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand mx-3" id="#logo" href="/" style={{fontFamily:"cursive"}}><strong>WEATHERMONKEY</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <strong>
                        <ul className="navbar-nav ml-auto" style={{fontFamily:"cursive"}}>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/" >Home</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </strong>
                </div>
            </nav>
        </>
    )
}
