import { Link } from 'react-router-dom';
import "./Header.scss"
import React from 'react';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Header () {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    };
        return (
            <div className="MainHeader">
                <h1 className="HeaderTitle">Workout Generator</h1>
                <nav className="HeaderNav">
                    <ul className="HeaderNavBtn">


                    {!isAuth ? (
                        <Link to="/Login" > Login </Link>
                    ) : (
                        <>
                          <Link to="/" className="HeaderNavBtn-start" > Start </Link>
                          <button className="HeaderNavBtn-special" onClick={signUserOut}> Log Out</button>
                        </>
                    )}
                    </ul>
                </nav>
            </div>
        );

}

export default Header;

