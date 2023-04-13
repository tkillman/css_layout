import { useEffect, useState } from 'react';
import { addScript } from '../utils/pathUtil';

const useScript = (fileFullPath: string, isPrevLoading: boolean = false) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleLoad = () => setLoading(false);
    const handleError = (error: any) => setError(error);

    useEffect(() => {
        // 이전내용이 로딩중이면 skip
        if (isPrevLoading) {
            return;
        }
        const targetScript = addScript(fileFullPath);

        targetScript?.addEventListener('load', handleLoad);
        targetScript?.addEventListener('error', handleError);

        return () => {
            targetScript?.removeEventListener('load', handleLoad);
            targetScript?.removeEventListener('error', handleError);
        };
    }, [fileFullPath, isPrevLoading]);

    return { loading, error };
};

export default useScript;
