import { Outlet } from "react-router";
import SunStatusView from "../components/views/SunStatus/SunStatus";
import styles from "../components/views/SunStatus/sun-status-view.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function SunStatus() {
  return (
    <>
      <SunStatusView>
        <Outlet />
      </SunStatusView>
    </>
  );
}

//Added an error boundary in case this specific view fails.
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <div>
      <h2>We hit a problem with your submission!</h2>
      <br />
      <h3>Please try again!</h3>
    </div>
  );
}
