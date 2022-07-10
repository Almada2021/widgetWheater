export default function WeatherMainInfo ({weather}){
    return(
        <div className="WeatherMainInfo">          
            <div className="WeatherMainInfo__location">{weather?.location.name}</div>
            <div className="WeatherMainInfo__country">{weather?.location.country}</div>
            <div>
                <div className="WeatherMainInfo__container">
                    <img className="WeatherMainInfo__container-img" src={`http:${weather?.current.condition.icon}`} width="128px" alt={weather?.current.condition.text}></img>
                </div>
                <div className="WeatherMainInfo__text">
                    <div>{weather?.current.condition.text}</div>
                    <div className="WeatherMainInfo__text-temperature">{weather?.current.temp_c}°</div>
                </div>
            </div>
        </div>
    )
}