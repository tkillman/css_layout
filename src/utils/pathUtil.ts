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
 * 스크립트가 존재하는지 확인
 *
 * @param fileFullPath 파일 위치
 * @returns boolean
 */
export const isScriptExist = (fileFullPath: string) => {
    return !!document.querySelector(`script[src="${getSourcePathUrl(fileFullPath)}"]`);
};

/**
 * 스크립트가 존재하지 않으면 추가
 *
 * @param fileFullPath 파일 위치
 */
export const addScript = (fileFullPath: string) => {
    const isExist = isScriptExist(fileFullPath);

    if (isExist) {
        return;
    }

    const sourcePathUrl = getSourcePathUrl(fileFullPath);
    const s = document.createElement('script');
    s.setAttribute('src', sourcePathUrl);
    s.setAttribute('defer', 'true');
    document.body.appendChild(s);
};
