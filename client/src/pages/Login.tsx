import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import type { RootState } from "../app/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [loggedIn, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-light w-full h-full">
      <h1 className="font-heading text-3xl text-primary mb-8">Login</h1>
      <Button
        variant="contained"
        color="primary"
        className="font-heading text-lg px-8 py-3 shadow-lg"
        onClick={() => dispatch(login())}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
