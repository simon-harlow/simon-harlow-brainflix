import React from 'react'
import './Header.scss'
import Logo from '../../assets/images/BrainFlix-logo.svg'
import Avatar from '../../assets/images/Mohan-muruge.jpg'
import UploadIcon from '../../assets/images/upload.svg'
import SearchIcon from '../../assets/images/search.svg'


export default function Header() {
    return (
        <>
            <header className="header-container">
                <div className="header">
                    <div className="header__logo">
                        <img className="header__logo-img" src={Logo} alt="brainflix logo"/>
                    </div>
                    <form className="header__search-container">
                        <div className="header__search">
                            <img className="header__search-img" src={SearchIcon} alt="search icon" />
                            <input className="header__search-input" type="text" placeholder="Search"/>
                        </div>
                    </form>
                    <div className="header__avatar">
                        <img className="header__avatar-img"src={Avatar} alt="user avatar"/>
                    </div>
                    <div className="header__button-container">
                        <button className="header__button">
                            <img className="header__button-img" src={UploadIcon} alt="upload icon" />
                            <span className="header__button-text">UPLOAD</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
