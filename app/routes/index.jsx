import RootView from "../components/views/Root/RootView";

import styles from "../components/views/Root/root-view.css";
import validateIp from "../../helpers/validateIP";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export let meta = () => {
  return {
    title: "My Posts",
  };
};



export default function Index() {
  return <RootView />;
}
