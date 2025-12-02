import style from './predictionChart.module.css';

function PredictionChart({prediction}){
    return(
        <>
        <div className={`${style.card} ${style["forecast-card"]}`}>
            <h2>Predicted Energy Usage</h2>
            <div className={`${style.forecast-value-container}`}>
                {prediction.predicted} <span>KWh</span>
            </div>
            <p className={`${style[estimated-cost]}`}>₱{prediction.cost}</p>
        </div>
        <canvas>{prediction.message}</canvas>
        </>
    )
}

export default PredictionChart