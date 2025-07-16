import React from 'react';

function Notice({isTablet}) {
    //isTablet max-width 960이면 true
    return (
        <>
        <h1 className={"text-5xl"}>공지관리 페이지 작업</h1>
        </>
    );
}

export default Notice;