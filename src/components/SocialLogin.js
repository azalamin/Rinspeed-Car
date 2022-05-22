import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import auth from "../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
