import logoUrl from '~/assets/images/logo.png';

const Header = () => {
    return (
        <header>
            <div className='gnb-inner'>
                <div className='logo'>
                    <a href='#none'>
                        <img src={logoUrl} alt='로고'></img>
                    </a>
                </div>
                <div className='gnb'>
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
                <div className='trigger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
