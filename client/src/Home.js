import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './Style.css';
function Home() {
   
    const [Ename, setEname] = useState('')
    const [Eid, setEid] = useState('')
    const [Edept, setEdept] = useState('')
    const [Edob, setEdob] = useState('')
    const [Egender, setEgender] = useState('')
    const [Edesign, setEdesign] = useState('')
    const [Esalary, setEsalary] = useState('')
    const navigate=useNavigate();

    const [data,setData]=useState([]);

  

    const handleSubmit = (event) =>{
        // alert('Form Submitted Successfully');
        // console.log(Ename,Eid,Edept,Edob,Egender,Edesign,Esalary);
        event.preventDefault();
        // axios.post('http://localhost:8081/',{Ename,Eid,Edept,Edob,Egender,Edesign,Esalary})
        // .then(res =>{
           
        // }).catch(err => console.log(err));
        navigate('/Homenew',{state:{Ename:Ename,Eid:Eid,Edept:Edept,Edob:Edob,Egender:Egender,Edesign:Edesign,Esalary:Esalary}});
    
    }

    
    useEffect(()=>{
        axios.get('https://emp-task-tm7l.onrender.com')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

})
    const handleDelete=(Eid)=>{
        axios.delete('https://emp-task-tm7l.onrender.com'+Eid)
        .then(res => {navigate('/')})
        .catch(err => console.log(err));
    }
   
  return (
    <div>
        <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <h1>Employee Form</h1>
                        <div className='inputs'>
                            <div className='name'>Employee Name:</div>
                            <div className='inputs'>
                                <input type='text' onChange={e => setEname(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee Id:</div>
                            <div className='inputs'>
                                <input type='text'  onChange={e => setEid(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee Department:</div>
                            <div className='inputs'>
                                <select className='select-dropdown'value={Edept} onChange={e => setEdept(e.target.value)} required>
                                    <option value="">Select Department</option>
                                    <option value="HR">HR</option>
                                    <option value="Ceo">CEO</option>
                                    <option value="Branch Manager">Branch Manager</option>
                                    <option value="Finance Manager">Finance Manager</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Tester">Tester</option>
                                </select>
                            </div>
                        </div>

                        <div className='inputs'>
                            <div className='name'>Employee DOB:</div>
                            <div className='inputs'>
                                <input type='date' onChange={e => setEdob(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="inputs">
                            <div className="name">Employee Gender</div>
                            <div className="radio-container"></div>
                                    <input className="male" type="radio" name="Gender" value="Male" checked={Egender === "Male"} onClick={(e) => setEgender(e.target.value)} />
                                    <label className="Male-label">Male</label>
                                    

            
                                    <input className="female" name="Gender" type='radio' value="Female" checked={Egender === "Female"} onClick={(e) => setEgender(e.target.value)} />
                                         <label className="Female-label">Female</label>
                        
                        </div>

                        <div className='inputs'>
                            <div className='name'>Employee Designation:</div>
                            <div className='inputs'>
                                <input type='text'  onChange={e => setEdesign(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee Salary:</div>
                            <div className='inputs'>
                                <input type='text'  onChange={e => setEsalary(e.target.value)} required/>
                            </div>
                        </div>


                        <div>
                            <button>Next</button>
                        </div>
                    </form>
                </div>
        <div className='table-container'>
            <div className='main'>
                <h1> Employee Details</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Emp_Name</th>
                            <div></div>
                            <th>Emp_ID</th>
                            <div></div>
                            <th>Emp_Department</th>
                            <div></div>
                            <th>Emp_DOB</th>
                            <div></div>
                            <th>Emp_Gender</th>
                            <div></div>
                            <th>Emp_Designation</th>
                            <div></div>
                            <th>Emp_Salary</th>
                            <div></div>
                            <th>Emp_Address</th>
                            <div></div>
                            <th>Emp_Location</th>
                            <div></div>
                            <th>Emp_Pincode</th>
                            <div></div>
                            <th>Emp_Experience</th>
                            <div></div>
                            <th>Emp_Age</th>
                            <div></div>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (
                            <tr>
                                <td>{d.Ename}</td>
                                <div></div>
                                <td>{d.Eid}</td>
                                <div></div>
                                <td>{d.Edept}</td>
                                <div></div>
                                <td>{d.Edob}</td>
                                <div></div>
                                <td>{d.Egender}</td>
                                <div></div>
                                <td>{d.Edesign}</td>
                                <div></div>
                                <td>{d.Esalary}</td>
                                <div></div>
                                <td>{d.Eaddress}</td>
                                <div></div>
                                <td>{d.Elocation}</td>
                                <div></div>
                                <td>{d.Epincode}</td>
                                <div></div>
                                <td>{d.Eexperience}</td>
                                <div></div>
                                <td>{d.Eage}</td>
                                <div></div>
                                <td>
                                    <button onClick={e=>handleDelete(d.Eid)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}
export default Home