import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading , error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(user);
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (loading) {
    return <h3 className="text-2xl font-bold text-center">Loading</h3>
  }

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-full"
      >
        <FaGoogle className="mr-2" />
        Continue With Google
      </button>
      {error ? (
        <p className="text-center text-red-600 mt-2">
          <small>{error?.message}</small>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SocialLogin;
