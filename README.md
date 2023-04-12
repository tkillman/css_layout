# 실행
yarn && yarn dev

# 변경사항

|파일명|수정사항|라인|
|---|:---:|---:|
| main.js | bindEvents 함수 | 36
| main.js | scrollHijacking 함수 | 122

```javascript
bindEvents 함수 변경사항

window.addEventListener('mousewheel', scrollHijacking, {passive: false});
window.addEventListener('DOMMouseScroll', scrollHijacking, {passive: false});
```

```javascript
scrollHijacking 함수 변경사항

function scrollHijacking(event) {
    // on mouse scroll - check if animate section
    if (event.detail < 0 || event.wheelDelta > 0) { 
        delta--;
        ( Math.abs(delta) >= scrollThreshold) && prevSection();
    } else {
        delta++;
        (delta >= scrollThreshold) && nextSection();
    }
    return false;
}

```
