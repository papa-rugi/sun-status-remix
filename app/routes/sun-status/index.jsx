import axios from "axios";
import { useLoaderData, redirect } from "remix";
import ResultsHeader from "~/components/common/ResultsHeader";

import validateIp from "../../../helpers/validateIP";

//handle form validation, and api requests on the server. (ensuring maximum speed for the user, regardless of bandwith)
export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const ipAddress = search.get("ipAddress");

    //validate user submission
    if (!validateIp(ipAddress)) return "IP is not valid";

    const resCoords = await axios.get(
      `https://api.ipbase.com/v2/info?apikey=ZDjDeWuYWxsqnQRbABvj5QTmbJ8Zkxk0ey8VZFEx&ip=${ipAddress}`
    );

    const lat = resCoords.data.data.location.latitude;
    const long = resCoords.data.data.location.longitude;
    const res = await axios.get(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`
    );

    return {
      ipAddress,
      title: `sunrise and sunset for ip ${ipAddress}`,
      body: res.data.results,
    };
  } catch (err) {
    //handle errors
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
      <h2>Results for the IP: {data.ipAddress} </h2>
      <br />
      <ResultsHeader headerText={<>🌇SUNSET:</>} resultText={sunset} />
     
      <br />
      <ResultsHeader headerText={<>🌄SUNRISE:</>} resultText={sunrise} />

    </div>
  );
}
