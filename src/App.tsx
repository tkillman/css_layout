import { useEffect, useState } from 'react';
import useScript from './hooks/useScript';
import Section from '~/components/section/Section';
import Header from './components/header/Header';
import section1Url from '~/assets/images/temp-section-01.jpg';
import section2Url from '~/assets/images/temp-section-02.jpg';
import section3Url from '~/assets/images/temp-section-03.jpg';
import section4Url from '~/assets/images/temp-section-04.jpg';
import section5Url from '~/assets/images/temp-section-05.jpg';
import section6Url from '~/assets/images/temp-section-06.jpg';
import section7Url from '~/assets/images/temp-section-07.jpg';

function App() {
    const [loading, setLoading] = useState<boolean>(true);

    const filePath = '/assets/js';

    const { loading: loadingJquery } = useScript(`${filePath}/jquery-2.1.4.js`);
    //const { loading: loadingModernizr } = useScript(`${filePath}/modernizr.js`, loadingJquery);
    const { loading: loadingVelocity } = useScript(`${filePath}/velocity.min.js`);
    const { loading: loadingVelocityUi } = useScript(`${filePath}/velocity.ui.min.js`, loadingVelocity);
    const { loading: loadingMain } = useScript(`${filePath}/main.js`, loadingVelocityUi);

    useEffect(() => {
        setLoading(loadingJquery || loadingVelocity || loadingVelocityUi || loadingMain);
    }, [loadingJquery, loadingVelocity, loadingVelocityUi, loadingMain]);

    return (
        <>
            <Section imgSrc={section1Url} isVisible />
            <Section imgSrc={section2Url} />
            <Section imgSrc={section3Url} />
            <Section imgSrc={section4Url} />
            <Section imgSrc={section5Url} />
            <Section imgSrc={section6Url} />
            <Section imgSrc={section7Url} />
            <Header />
        </>
    );
}

export default App;
