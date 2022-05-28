import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    const color = {color:'orange'}

    /* If logged in - see profile/logout */
    /* mobile first drop down see all/meet the pets - dogs/cats/match me! */

    return (
        <>
            <nav>
                <ul>
                    <Link style={color} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={color} to='/profile'>
                        <li>Profile</li>
                    </Link>
                    <Link style={color} to='/dogs'>
                        <li>See dogs</li>
                    </Link>
                    <Link style={color} to='/cats'>
                        <li>See cats</li>
                    </Link>
                    <Link style={color} to='/quiz'>
                        <li>Match me!</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
};

export default Nav;
