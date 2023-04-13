import { useSetRecoilState } from 'recoil';
import { menuState } from '~/src/recoil/menu';

/**
 * imgSrc 이미지 url
 * isVisible boolean
 */
interface Iprops {
    imgSrc: string;
    isVisible?: boolean;
}

const Section: React.FC<Iprops> = ({ imgSrc, isVisible }) => {
    const setMenu = useSetRecoilState(menuState);

    const handleSectionClick = () => {
        setMenu((prev) => ({
            ...prev,
            isActive: false,
        }));
    };

    return (
        <section className={`cd-section ${isVisible ? 'visible' : ''}`} onClick={handleSectionClick}>
            <div>
                <div className='content'>
                    <img src={imgSrc} />
                </div>
            </div>
        </section>
    );
};

export default Section;
