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

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  console.log(data);
  // outputs { name: '', email: '', password: '', confirmPassword: '' }

  const formErrors = {
    ipIsValid: validateIp(data.ipAddress),
  };

  //if there are errors, we return the form errors
  if (Object.values(formErrors).some(Boolean)) return { formErrors };

  //if there are no errors, we return the form data
  return { data };
};

export default function Index() {
  return <RootView />;
}
