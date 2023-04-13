/**
 * imgSrc 이미지 url
 * isVisible boolean
 */
interface Iprops {
    imgSrc: string;
    isVisible?: boolean;
}

const Section: React.FC<Iprops> = ({ imgSrc, isVisible }) => {
    return (
        <section className={`cd-section ${isVisible ? 'visible' : ''}`}>
            <div>
                <div className='content'>
                    <img src={imgSrc} />
                </div>
            </div>
        </section>
    );
};

export default Section;
