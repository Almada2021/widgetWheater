const getWeather = async (city ='london') =>{
    const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`) ;
    if(request.ok) {
        return request.json()
    }    
}
export default getWeather