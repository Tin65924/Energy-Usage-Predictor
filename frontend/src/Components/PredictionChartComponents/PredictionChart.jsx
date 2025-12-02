import style from './predictionChart.module.css';

function PredictionChart({prediction}){
    
       if (!prediction) {
          return <div className={style.card}>No prediction yet.</div>;
        }
    return(
        <>
        <div className={`${style.card} ${style["forecast-card"]}`}>
            <h2>Predicted Energy Usage</h2>
            <div className={`${style["forecast-value-container"]}`}>
                {prediction.predicted} <span>KWh</span>
            </div>
            <p className={`${style["estimated-cost"]}`}>₱{prediction.cost}</p>
            <p>{prediction.message}</p>
        </div>
        </>
    )
}

export default PredictionChart