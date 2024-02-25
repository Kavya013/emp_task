import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Style.css';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://emp-task-cvkq.onrender.com/')
            .then(res => {
                setData(res.data);
                setFilteredData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (Eid) => {
        axios.delete('https://emp-task-cvkq.onrender.com/' + Eid)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    };

    const handleSearch = () => {
        const filtered = data.filter(employee =>
            Object.values(employee).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name, ID, department, DOB, gender, designation, salary..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

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
                            {filteredData.map((d, i) => (
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
                                        <button onClick={() => handleDelete(d.Eid)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;

