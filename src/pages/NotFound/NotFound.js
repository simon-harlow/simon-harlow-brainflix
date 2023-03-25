import React from 'react'
import { NavLink } from 'react-router-dom'

import './NotFound.scss'
import Monkey from '../../assets/images/brainflix-404.gif'

export default function NotFound() {
    return (
            <section className="not-found">
                <div className="not-found__container">
                    <img className="not-found__img" src={Monkey} alt="404 not found" />
                    <p className="not-found__text">Monkey cannot find what you are looking for.<br></br>Click the button below to return to the Homepage.</p>
                    <NavLink to="/">
                        <button className="not-found__button">
                            Home
                        </button>
                    </NavLink>
                </div>
            </section>
    );
}
