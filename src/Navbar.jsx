import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ürünler</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hakkımızda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">İletişim</a>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Ara" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Ara</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
