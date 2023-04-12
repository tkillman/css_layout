import { useEffect, useState } from 'react';
import './assets/css/velocity.css';
import { addScript } from './utils/pathUtil';

function App() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const filePath = import.meta.env.MODE === 'production' ? '/assets/js' : '/src/assets/js';

        setLoading(true);

        addScript(`${filePath}/jquery-2.1.4.js`);
        addScript(`${filePath}/modernizr.js`);
        addScript(`${filePath}/velocity.min.js`);
        addScript(`${filePath}/velocity.ui.min.js`);
        addScript(`${filePath}/main.js`);

        setLoading(false);
    }, []);

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
