/**
 * 파일 위치로부터 url 반환
 *
 * @param fileFullPath 파일 위치
 * @returns url path
 */
export const getSourcePathUrl = (fileFullPath: string) => {
    return new URL(fileFullPath, import.meta.url).href;
};

/**
 * 스크립트가 존재하지 않으면 추가
 *
 * @param fileFullPath 파일 위치
 */
export const addScript = (fileFullPath: string) => {
    const sourcePathUrl = getSourcePathUrl(fileFullPath);
    let script = document.querySelector(`script[src="${sourcePathUrl}"]`);

    if (!script) {
        script = document.createElement('script');
        script.setAttribute('src', sourcePathUrl);
        script.setAttribute('defer', 'true');
    }

    document.head.appendChild(script);
    return script;
};
