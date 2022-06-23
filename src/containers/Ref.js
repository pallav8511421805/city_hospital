import React, { useRef } from 'react';

function Ref(props) {
    const nameref = useRef();
    const emailref = useRef();
    function handle(){
        console.log(nameref.current.value);
        emailref.current.focus();
        nameref.current.style.backgroundColor = 'red';
    }
    return (
        <div>
            <form onSubmit={handle}>
                <input ref={nameref} style={{}} type="text" name='name' placeholder='Enter your name'/>
                <input ref={emailref} type="email" name='email' placeholder='Enter your email'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Ref;