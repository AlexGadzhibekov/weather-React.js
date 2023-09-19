import LocationBox from "../LocationBox/LocationBox";
import WeatherBox from "../WeatherBox/WeatherBox";
export default function InfoBox({ weather }) {
  return (
    <div>
      <LocationBox weather={weather} />
      <WeatherBox weather={weather} />
    </div>
  );
}
