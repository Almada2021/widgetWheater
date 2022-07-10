import { useState } from "react"
export default function WeatherForm ({onChangeCity}){
    const [city, setCity] = useState('');
    function onChange (e){
        const value =e.target.value;
        if(value !== ''){
            setCity(value);
        }
    }
    async function  handleSubmit (e){
        e.preventDefault();
        if(city.length >= 3){
           await onChangeCity(city) 
        }
    }
    return(
        <form className="WeatherForm"onSubmit={handleSubmit}>
            <input className="WeatherForm__input" type="text" onChange={onChange} placeholder="Enter a city"></input>
            <button className="WeatherForm__btn">search</button>
        </form>
    )
}