import React from "react";
import { Link } from "react-router-dom";


export default function Header() {

    return (
        <>
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <Link
                            to="/"
                            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                        >
                            <h1 className="m-0 text-primary text-uppercase">Hottels</h1>
                        </Link>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <Link to="/" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">Hottels</h1>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}