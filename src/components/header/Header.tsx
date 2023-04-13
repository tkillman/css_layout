import { useState } from 'react';
import { useRecoilState } from 'recoil';

import logoUrl from '~/assets/images/logo.png';
import { menuState } from '~/src/recoil/menu';

const Header = () => {
    const [menu, setMenu] = useRecoilState(menuState);

    const toggle = () => {
        setMenu((prev) => ({
            ...prev,
            isActive: !prev.isActive,
        }));
    };

    return (
        <header>
            <div className='gnb-inner'>
                <div className='logo'>
                    <a href='#none'>
                        <img src={logoUrl} alt='로고'></img>
                    </a>
                </div>
                <div className={`gnb ${menu.isActive ? 'active' : ''}`}>
                    <div className='menu'>
                        <a href='#none'>Home</a>
                        <a href='#none'>About</a>
                        <a href='#none'>Project</a>
                        <a href='#none'>Plan & History</a>
                        <a href='#none'>Awards</a>
                        <a href='#none'>Location</a>
                        <a href='#none'>Contact</a>
                    </div>
                    <div className='slogan'>We design places, not projects.</div>
                </div>
                <div className={`trigger ${menu.isActive ? 'active' : ''}`} onClick={toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
