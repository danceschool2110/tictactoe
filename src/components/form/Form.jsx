import React, { useState } from 'react';
import useHandleChange from '../../hooks/useHandleChange';

const Form = () => {
    // const [fullName, setFullName] = useState("")
    // const [message, setMessage] = useState("")
    // const [country, setCountry] = useState("")

    // const handleInputOnChange = (event) => {
    //     console.log(event.target.value)
    //     setFullName(event.target.value)
    // }
    // const handleTextareaChange = (event) => {
    //     console.log(event.target.value)
    //     setMessage(event.target.value)
    // }
    // const handleSelectChange = (event) => {
    //     console.log(event.target.value)
    //     setCountry(event.target.value)
    // }
    const {values, handleChange} = useHandleChange({
        fullname:'',
        email: '',
        hobby: false
    });
    const [errorName, setErrorName] = useState('')
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(values.fullname === '')
            setErrorName('Your  full name is empty')
    }
    return (
        <div className="p-5">
            <form className="flex gap-x-3" autoComplete="off" onSubmit={handleSubmitForm}>
                <div className="flex flex-col gap-y-4">
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        name="fullname"
                        className="w-full rounded-lg border border-green-300 max-w-[400px] p-3"
                        onChange={handleChange}
                    />
                    {errorName}
                </div>
                <input
                    type="email"
                    placeholder="Enter your email..."
                    name="email"
                    className="w-full rounded-lg border border-green-300 max-w-[400px] p-3"
                    onChange={handleChange}
                />
                {/* <input
                    type="checkbox"
                    name = "hobby"
                    onChange={handleChange}
                /> */}
                <button type="submit" className="rounded-lg border border-green-300 bg-blue-500 p-5">Submit</button>
            </form>
            {/*{message}
            <textarea
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                placeholder="Enter your message"
                name="message"
                onChange={handleTextareaChange}
            ></textarea>
            {country}
            <select name="country" onChange={handleSelectChange}>
                <option value="vietnam">VN</option>
                <option value="usa">USA</option>
                <option value="japan">Japan</option>
            </select> */ }
        </div>
    );
};

export default Form;