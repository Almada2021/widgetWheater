import {useState, useEffect} from "react";
import WeatherForm from "./WeatherForm";
import getWeather from "../helpers/getWeather";
import NotFound from './NotFound';
import WeatherMainInfo from "./WeatherMainInfo";
export default function WeatherApp (){
    const [weather,setWeather] = useState(null)
    useEffect(() =>{
        loadInfo()
       
    },[])
                
    function loadInfo(city= 'london'){
        getWeather(city) 
            .then((res) => setWeather(res)).catch((err) => console.log(err))

    }
    function handleChangeCity(city){
        loadInfo(city)

    }
    
    return(
        <div>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather ?
               <div className="WeatherSize"> <WeatherMainInfo weather={weather}/></div>
            :<div className="WeatherSize"><NotFound/></div> 
            }
        </div>
    )
}