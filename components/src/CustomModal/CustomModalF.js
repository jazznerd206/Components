import React, { useState, useEffect } from 'react';

const CustomModalF = () => {

    const modalHandler = (e) => {
        // setContent(e.detail.data);
        setVisible(true);
    }

    const show = (data) => {
        document.dispatchEvent(new CustomEvent('modal', {
            detail: {
                data
            }
        }));
    }

    const [ title, setTitle ] = useState('');
    const [ closeOnClick, setCloseOnClick ] = useState(false);
    const [ content, setContent ] = useState('');
    const [ visible, setVisible ] = useState(false);
    

    const close = () => {
        setTitle('');
        setCloseOnClick(false);
        setContent('');
        setVisible('');
    }

    const modalClick = () => {
        if (closeOnClick) this.close();
    }


    useEffect(() => {
        document.addEventListener('modal', modalHandler());
        return () => {
            document.removeEventListener('modal', modalHandler());
        }
    }, [])


    return !visible ? <p>+++++++++========++++++++++++++++++++++++++</p> 
    
        : 
    
        <div className="modal" onClick={modalClick}>
            <div className="dialog">
                <div className="dialog-title">{ title }
                    <span className="dialog-close" onClick={ close }>+</span>
        
                </div>
                <div className="dialog-content">
                    {
                        content
                    }
                </div>
            </div>
        </div>
    }

export default CustomModalF
