import React from "react";
import { useAuth0 } from "./react-auth0-spa";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button onClick={() => logout()}>Log Out</button>;
};

export default LogoutButton;