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
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

})
    const handleDelete=(Eid)=>{
        axios.delete('http://localhost:8081/'+Eid)
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
                                    <input className="male" type="radio" name="Gender" value="Male" checked={Egender === "Male"} onChange={(e) => setEgender(e.target.value)} />
                                    <label className="Male-label">Male</label>
                                    

            
                                    <input className="female" name="Gender" type='radio' value="Female" checked={Egender === "Female"} onChange={(e) => setEgender(e.target.value)} />
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
                            
                            <th>Emp_ID</th>
                            
                            <th>Emp_Department</th>
                            
                            <th>Emp_DOB</th>
                            
                            <th>Emp_Gender</th>
                            
                            <th>Emp_Designation</th>
                            
                            <th>Emp_Salary</th>
                            
                            <th>Emp_Address</th>
                            
                            <th>Emp_Location</th>
                            
                            <th>Emp_Pincode</th>
                            
                            <th>Emp_Experience</th>
                            
                            <th>Emp_Age</th>
                            
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (
                            <tr key={i}>
                                <td>{d.Ename}</td>
                               
                                <td>{d.Eid}</td>
                              
                                <td>{d.Edept}</td>
                               
                                <td>{d.Edob}</td>
                                
                                <td>{d.Egender}</td>
                                
                                <td>{d.Edesign}</td>
                                
                                <td>{d.Esalary}</td>
                                
                                <td>{d.Eaddress}</td>
                                
                                <td>{d.Elocation}</td>
                                
                                <td>{d.Epincode}</td>
                               
                                <td>{d.Eexperience}</td>
                                
                                <td>{d.Eage}</td>
                                
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