// Homenew.js
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const Homenew = () => {
    const navigate = useNavigate();
    const [Eaddress, setEaddress] = useState('');
    const [Elocation, setElocation] = useState('');
    const [Epincode, setEpincode] = useState('');
    const [Eexperience, setEexperience] = useState('');
    const [Eage, setEage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Epincode.length !== 6) {
            alert('Pincode must be a 6-digit number');
            return;
        }
        const experience = parseInt(Eexperience);
        if (experience < 0 || experience > 99 || isNaN(experience)) {
            alert('Invalid Experience. It should be a non-negative number less than 100.');
            return;
        }
        // Proceed with form submission
        axios.post('https://emp-task-cvkq.onrender.com/',{Ename,Eid,Edept,Edob,Egender,Edesign,Esalary,Eaddress,Elocation,Epincode,Eexperience,Eage})
        .then(res => {
            alert('Form Submitted Successfully');
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h1>Enter Employee Details</h1>
                    <div className='inputs'>
                        <div className='name'>Employee Address:</div>
                        <div className='inputs'>
                            <input type='text' placeholder='Address:' value={Eaddress} onChange={e => setEaddress(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='name'>Employee Location:</div>
                        <div className='inputs'>
                            <input type='text' placeholder='Location:' value={Elocation} onChange={e => setElocation(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='name'>Employee Pincode:</div>
                        <div className='inputs'>
                            <input type='text' placeholder='Pincode:' value={Epincode} onChange={e => setEpincode(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='name'>Employee Experience:</div>
                        <div className='inputs'>
                            <input type='text' placeholder='Experience :' value={Eexperience} onChange={e => setEexperience(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='name'>Employee Age:</div>
                        <div className='inputs'>
                            <input type='text' placeholder='Age:' value={Eage} onChange={e => setEage(e.target.value)} required/>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Homenew;
