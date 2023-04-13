import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/velocity.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
);
