import React, { useEffect, useRef, useState } from 'react';

const useClickOutSide = (dom = 'button') => {
    const [show, setShow] = useState(false)
    const nodeRef = useRef(null);

    useEffect(() => {
        function handleClickDocument(e) {
            if(nodeRef.current && !nodeRef.current.contains(e.target) && !e.target.matches(dom)){
                setShow(false)
            }
        }
        document.addEventListener("click", handleClickDocument)
        return ()=>{
        document.removeEventListener("click", handleClickDocument)
        }
    },[dom, show])
    return (
       {
            show,
            setShow,
            nodeRef
       }
    );
};

export default useClickOutSide;