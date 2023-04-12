import { useEffect, useState } from 'react';
import useScript from './hooks/useScript';

function App() {
    const [loading, setLoading] = useState<boolean>(true);

    const filePath = import.meta.env.MODE === 'production' ? '/assets/js' : '/src/assets/js';

    const { loading: loadingJquery } = useScript(`${filePath}/jquery-2.1.4.js`);
    //const { loading: loadingModernizr } = useScript(`${filePath}/modernizr.js`, loadingJquery);
    const { loading: loadingVelocity } = useScript(`${filePath}/velocity.min.js`);
    const { loading: loadingVelocityUi } = useScript(`${filePath}/velocity.ui.min.js`, loadingVelocity);
    const { loading: loadingMain } = useScript(`${filePath}/main.js`, loadingVelocityUi);

    useEffect(() => {
        setLoading(loadingJquery && loadingVelocity && loadingVelocityUi && loadingMain);
    }, [loadingJquery, loadingVelocity, loadingVelocityUi, loadingMain]);

    return (
        <>
            {loading ? (
                <div>로딩중</div>
            ) : (
                <>
                    <section className='cd-section visible'>
                        <div>
                            <h2>Page Scroll Effects1</h2>
                        </div>
                    </section>
                    <section className='cd-section'>
                        <div>
                            <h2>Page Scroll Effects2</h2>
                        </div>
                    </section>
                    <section className='cd-section'>
                        <div>
                            <h2>Page Scroll Effects3</h2>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default App;
