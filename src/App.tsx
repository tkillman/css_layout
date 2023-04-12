import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const filePath = import.meta.env.MODE === 'production' ? '/assets/js' : '/src/assets/js';

        const addScript = (sourcePath: string) => {
            const sourcePathUrl = new URL(sourcePath, import.meta.url).href;
            const isExist = !!document.querySelector(`script[src="${sourcePathUrl}"]`);
            if (isExist) {
                return;
            }
            const s = document.createElement('script');
            s.setAttribute('src', sourcePathUrl);
            s.setAttribute('defer', 'true');
            document.body.appendChild(s);
        };

        addScript(`${filePath}/jquery-2.1.4.js`);
        addScript(`${filePath}/modernizr.js`);
        addScript(`${filePath}/velocity.min.js`);
        addScript(`${filePath}/velocity.ui.min.js`);
        addScript(`${filePath}/main.js`);
    }, []);

    return <div className='App'>App</div>;
}

export default App;
