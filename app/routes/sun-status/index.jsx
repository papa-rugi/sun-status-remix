import axios from "axios";
import { useLoaderData, redirect } from "remix";

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const ipAddress = search.get("ipAddress");
    const resCoords = await axios.get(
      `https://api.ipbase.com/v2/info?apikey=lT8NFXKLq72sKqiexcEhveLwazWuCQky4fsDsmLp&ip=${ipAddress}`
    );

    const lat = resCoords.data.data.location.latitude;
    const long = resCoords.data.data.location.longitude;
    const res = await axios.get(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`
    );



    return { ipAddress, title: `sunrise and sunset for ip ${ipAddress}`, body: res.data.results };
  } catch (err) {
    console.error(err);
    redirect("/");
    return {};
  }
}

export default function Index() {
  const data = useLoaderData();
  let sunset = new Date(`${data.body.sunset}`).toLocaleString();
  let sunrise = new Date(`${data.body.sunrise}`).toLocaleString();

  return (
    <div>
      <h1>{data.ipAddress} </h1>
      <h2>'sunset'{sunset}</h2>
      <h4>'sunrise'{sunrise}</h4>
    </div>
  );
}