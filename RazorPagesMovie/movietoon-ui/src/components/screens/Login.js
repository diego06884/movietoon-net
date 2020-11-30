import React from "react";
import PageLoggedOut from "../PageLoggedOut";
import LoginForm from "../LoginForm";

function Landing() {
  return (
    <PageLoggedOut>
      <LoginForm />
    </PageLoggedOut>
  );
}

export default Landing;
