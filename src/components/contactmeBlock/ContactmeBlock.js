import React, { useState } from 'react';
import contactmeImg from '../../img/contactmeImg.png'
import contactmeImg_large from '../../img/contactmeImg_large.png'
import paperplane from '../../img/paperplane.png'
import paperplane_large from '../../img/paperplane_large.png'
import './contactmeBlock.css';

const ContactmeBlock = () => {
    const [emailDirty, setEmailDirty] = useState(false);
    const [textDirty, setTextDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email cannot be empty');
    const [textError, setTextError] = useState('Message cannot be empty');
    const [info, setInfo] = useState({ email: '', message: '' });
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'text':
                setTextDirty(true)
                break
            default: break
        }
    }

    const handleEmailChange = (e) => {
        setInfo(state => ({ ...state, email: e.target.value }))
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect email')
        } else {
            setEmailError('')
        }
    }

    const handleMessageChange = (e) => {
        setInfo(state => ({ ...state, message: e.target.value }))
        if (String(e.target.value).length < 1) {
            setTextError('Incorrect message')
        } else {
            setTextError('')
        }
    }

    const sendInfo = () => {
        const postInfo = {
            'email': info.email,
            'message': info.message
        }

        console.log(postInfo);
    }

    return (
        <div className='ContactmeBlock_wrapper'>
            <h3 className='ContactmeBlock_header'>Contact me</h3>
            <div className='ContactmeBlock_content'>
                <picture className="ContactmeBlock_imgPic">
                    <source
                        className='ContactmeBlock_img'
                        media='(min-width: 500px)'
                        srcSet={contactmeImg_large}/> 
                    <img src={contactmeImg} alt="ContactmeImg" className='ContactmeBlock_img'/>
                </picture>
                <form className='ContactmeBlock_form'>
                    {(emailDirty && emailError) && <div style={{color: 'red', margin: '0px 0px 10px 0px' }}>{emailError}</div>}
                    <input 
                        name='email'
                        type='email'
                        placeholder='Enter email address' 
                        className='ContactmeBlock_email'
                        value={info.email}
                        onChange={handleEmailChange}
                        onBlur={e => blurHandler(e)}/>
                    {(textDirty && textError) && <div style={{color: 'red', margin: '20px 0px -10px 0px'}}>{textError}</div>}
                    <textarea 
                        name='text'
                        type='text'
                        placeholder='Enter message...' 
                        className='ContactmeBlock_message'
                        value={info.message}
                        onChange={handleMessageChange}
                        onBlur={e => blurHandler(e)}/>
                    <button 
                        className='ContactmeBlock_button' 
                        type='button' 
                        onClick={sendInfo}>
                        Send
                        <picture className="ContactmeBlock_button_imgPic">
                            <source
                                className='ContactmeBlock_button_img'
                                media='(min-width: 650px)'
                                srcSet={paperplane_large}/> 
                            <img src={paperplane} alt="Paperplane" className='ContactmeBlock_button_img'/>
                        </picture>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactmeBlock;