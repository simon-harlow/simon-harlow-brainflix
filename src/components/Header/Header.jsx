import React from 'react'
import './Header.scss'
import Logo from '../../assets/images/BrainFlix-logo.svg'
import Avatar from '../../assets/images/Mohan-muruge.jpg'

export default function Header() {
    return (
        <>
            <header className="header-container">
                <div className="header">
                    <div className="header__logo">
                        <img className="header__logo--img" src={Logo} alt="brainflix logo"/>
                    </div>
                    <div className="header__search">
                        <form>
                            <input className="header__search--input" type="text" defaultValue="Search"/>
                        </form>
                    </div>
                    <div className="header__avatar">
                        <img className="header__avatar--img"src={Avatar} alt="user avatar"/>
                    </div>
                    <div className="header__button">
                        <button className="header__button--btn">UPLOAD</button>
                    </div>
                </div>
            </header>
        </>
    )
}
