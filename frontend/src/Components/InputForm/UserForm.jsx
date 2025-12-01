import React, {useState} from 'react';
import style from './userForm.module.css';

function UserForm(){

    const [hour, setHour] = useState("");
    const [temp, setTemp] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                Hour: parseInt(hour),
                Temperature: parseFloat(temp),
                Machine_Status: status,
            }),
        });

        const data = await response.json();
        alert(data.data);
    };

    return(
        <div className={style.formContainer}>
            <h2>Input Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">
                    Date to predict:
                    <input value={hour} onChange={(e) => setHour(e.target.value)} type="number" name="" id="Hours" placeholder='Hours'/>
                </label><br />
                <label htmlFor="temperature">
                    Temperature:
                    <input value={temp} onChange={(e) => setTemp(e.target.value)} type="number" name="" id="temperature" placeholder='Temperature'/>
                </label><br />
                <label htmlFor="status">
                    Machine Operating Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" id="status">
                        <option value="">--Select Operating Status--</option>
                        <option value="On">On</option>
                        <option value="Off">Off</option>
                        <option value="Idle">Idle</option>
                    </select>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm