import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1280px-International_Pokémon_logo.svg.png' />
        </header> 
    );
}

export default Header;