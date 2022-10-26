import { useActionData, useLoaderData } from "@remix-run/react";

export default function RootView() {
  const actionData = useLoaderData();
  console.log(actionData);

  return (
    <section className="container root-container">
      <h1>
        Welcome to Sun Status! Enter the IP address of a location where you
        would like to determine the Sunset and Sunrise.
      </h1>
      <form action="/sun-status" method="GET">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter IP address</label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter IP address"
            name="ipAddress"
            defaultValue={actionData?.values.name}
          />
        </div>
        {actionData?.errors.name ? (
          <p style={{ color: "red" }}>{actionData.errors.name}</p>
        ) : null}
        {actionData?.errors.description ? (
          <p style={{ color: "red" }}>{actionData.errors.description}</p>
        ) : null}
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
