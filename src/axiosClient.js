import axios from "axios"


export const FetchDataFromAPI=async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`;
    try{
        const data = await axios.get(url);
        return {
            error:false,
            data:data.data
        }
    }catch(err){
        return{
            error:true,
            msg:err.response.data.message
        }
    }
}