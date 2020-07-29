import React, {useState, FormEvent, ChangeEvent} from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'


const Contact = () => {

    const history = useHistory();

    const [form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    })

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(form);
        alert('Mensagem Enviada ;D');
        history.push('/')
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setForm({...form, [name] : value})
    }

    function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setForm({...form, [name] : value})
    }

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h1>Vamos tomar um café?</h1>
                    </legend>
                    <h2>Nome*</h2>
                    <input required name="name" type="text" onChange={handleInputChange} />
                    <h2>Email*</h2>
                    <input required name="email" type="email" onChange={handleInputChange} />
                    <h2>Como posso te ajudar?*</h2>
                    <textarea required name="message" onChange={handleTextAreaChange} />
                </fieldset>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Contact