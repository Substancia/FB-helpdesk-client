import React, { useEffect } from "react";
import { accountService } from "../../services";
import { history } from "../../helpers";

const PrivateRoute = ({ component: Component }) => {
  useEffect(() => {
    if(!accountService.loggedIn()) {
      history('/login');
    }
  }, []);

  return (
    <Component />
  );
}

export default PrivateRoute;