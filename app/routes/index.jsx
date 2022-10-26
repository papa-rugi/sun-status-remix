
export let meta = () => {
  return {
    title: "My Posts"
  };
};

export default function Index() {
  return (
    <div>
      <form action="/sun-status" method="POST">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="ipAddress" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit"  value="Get sun status"  className="btn btn-primary">Submit</button>
      </form>
      {/* <form action="/sun-status" method="GET">
        IP: <input  name="ipAddress" />
        <input type="submit" value="Get sun status" />
      </form> */}
    </div>
  );
}