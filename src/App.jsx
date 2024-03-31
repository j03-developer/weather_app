import realtime from '../public/realtime'
import { WiHumidity, WiCloudy, WiCloudyGusts, WiWindy } from "react-icons/wi";

function WeatherContainer() {
  const weatherRealtime = realtime.current;
  const weatherLocation = realtime.location;
  console.error(weatherRealtime)

  return (
    <div className="p-2">
      <header className="bg-[#33619D] max-w-md mx-auto p-2 rounded-lg">
        <div className="title flex flex-col">
          <span>{weatherLocation.country} ({weatherLocation.region} / {weatherLocation.name})</span>
          <span>time</span>
        </div>
        <div className="main flex justify-center">
          <img src={weatherRealtime.condition.icon} alt="" />
          <div className="temperature">
            <div className="degree">
              <span className="text">{weatherRealtime.temp_c}</span>
              <span>&deg; C</span>
            </div>
            <span>{weatherRealtime.condition.text}</span>
          </div>
        </div>
        <div className="listInfo flex justify-around text-center">
          <div>
            <WiHumidity className="w-[31px] h-[31px]" />
            <span>{weatherRealtime.humidity}</span>
          </div>
          <div>
            <WiCloudy className="w-[31px] h-[31px]" />
            <span>{weatherRealtime.cloud}</span>
          </div>
          <div>
            <WiCloudyGusts className="w-[31px] h-[31px]" />
            <span>{weatherRealtime.gust_kph}</span>
          </div>
          <div>
            <WiWindy className="w-[31px] h-[31px]" />
            <span>{weatherRealtime.wind_kph}</span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-[#285A99] text-[#F5F9FB] h-screen w-full">
      <WeatherContainer />
    </div>
  )
}
