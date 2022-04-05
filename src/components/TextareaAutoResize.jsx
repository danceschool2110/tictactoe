import React, { useEffect, useRef, useState } from 'react';

const TextareaAutoResize = () => {
    const [text, setText] = useState("")
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState("auto")
    const [wrapperTextareaHeight,setwrapperTextareaHeight] = useState("auto")
    const handleChange = (e) => {
        setTextareaHeight("auto")
        setText(e.target.value)
    }
    useEffect(() => {
            setTextareaHeight(`${textareaRef?.current.scrollHeight}px`);
    },[text])
    return (
        <div className="p-5" style={{ minHeight: wrapperTextareaHeight}}>
            <textarea 
                className="transition-all overflow-hidden p-2 rounded-lg border border-green-400 focus:border-blue-700 w-full max-w-[400px] resize-none"
                placeholder="Please enter your content ..."
                value={text}
                style={{
                    height: textareaHeight
                }}
                ref={textareaRef}
                onChange={handleChange}
            ></textarea>
        </div>
    );
};

export default TextareaAutoResize;