import React from "react";
import { useSelector } from "react-redux";
import AuthLink from "./AuthLink";
import GuestLink from "./GuestLink";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.authReducer);
  return <div>{isAuth ? <AuthLink /> : <GuestLink />}</div>;
};

export default Navbar;
