import React, { useState } from 'react';
import style from './userForm.module.css';

function UserForm() {
    const [resultPredicted, setResultPredicted] = useState("");
    const [resultCost, setResultCost] = useState("");
    const [resultMessage, setResultMessage] = useState("");
    const [hour, setHour] = useState("");
    const [temp, setTemp] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Hour: parseInt(hour),
                Temperature: parseFloat(temp),
                Machine_Status: status,
            }),
        });

        const data = await response.json();
        setResultPredicted(data.predicted);
        setResultCost(data.cost);
        setResultMessage(data.message);
    };

    return (
        <div className={style["main-grid"]}>
            <div className={`${style.card} ${style["predict-card"]}`}>
                <h2 className={style["card-title"]}>Input Form</h2>

                <form onSubmit={handleSubmit}>
                    <div className={style["form-group"]}>
                        <label htmlFor="predict-hour">Hour to predict:</label>
                        <input
                            type="number"
                            id="predict-hour"
                            value={hour}
                            className={`${style["input-text"]} ${style["full-width"]}`}
                            onChange={(e) => setHour(e.target.value)}
                            placeholder="Hour"
                        />
                    </div>

                    <div className={style["form-group"]}>
                        <label htmlFor="predict-temperature">Predict Temperature:</label>
                        <input
                            type="number"
                            id="predict-temperature"
                            value={temp}
                            min={-20}
                            max={50}
                            step={0.1}
                            className={`${style["input-text"]} ${style["full-width"]}`}
                            onChange={(e) => setTemp(e.target.value)}
                        />
                    </div>

                    <div className={style["form-group"]}>
                        <label htmlFor="machine-status">Machine Operating Status:</label>
                        <select
                            onChange={(e) => setStatus(e.target.value)}
                            name="machine-status"
                            className={`${style["input-text"]} ${style["full-width"]}`}
                        >
                            <option value="Idle">Idle</option>
                            <option value="On">On</option>
                            <option value="Off">Off</option>
                        </select>

                        <button
                            type="submit"
                            id="submitBtn"
                            className={`${style.btn} ${style["btn-primary"]}`}
                        >
                            Submit
                        </button>

                        <div className={style["status-message"]} id="status">
                            <p>Predicted: {resultPredicted}</p>
                            <p>Cost: {resultCost}</p>
                            <p>Message: {resultMessage}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
