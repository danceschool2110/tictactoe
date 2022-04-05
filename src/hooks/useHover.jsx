import React, {useEffect, useRef, useState} from 'react';

const useHover = () => {

    const [hover, setHover] = useState(false);
    const nodeRef = useRef(null)
    useEffect(() => {
        const dom = nodeRef?.current
        const handleMouseOver = ()=>{
            setHover(true)
        }
        const handleMouseOut = ()=>{
            setHover(false)
        }
        if(dom) {
            dom.addEventListener("mouseover", handleMouseOver);
            dom.addEventListener("mouseout", handleMouseOut);
        }

        return ()=>{
            dom.removeEventListener("mouseover", handleMouseOver);
            dom.removeEventListener("mouseout", handleMouseOut);
        }
    },[])
    return (
        {
            hover,
            nodeRef
        }
    );
};

export default useHover;