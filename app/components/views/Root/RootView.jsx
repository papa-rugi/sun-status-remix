
import Form from "../../common/Form";

export default function RootView() {
    
  return (
    <section className="container root-container">
      <h1>Welcome to Sun Status! Enter the IP address of a location where you would like to determine the Sunset and Sunrise.</h1>
        <form action="/sun-status" method="GET">
        <div className="form-group">
            <label for="exampleInputEmail1">Enter IP address</label>
            <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter IP address"
            name="ipAddress"
            />
          
        </div>
        <button
            type="submit"
            value="Get sun status"
            className="btn btn-primary"
        >
            Submit
        </button>
        </form>
    </section>
  );
}
