import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const [tokenLoading, setTokenLoading] = useState(false);
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { email: email, name: name };
    if (email) {
      setTokenLoading(true);
      fetch(`https://rinspeed-car.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data?.accessToken;
          localStorage.setItem("accessToken", token);
          setToken(token);
          setTokenLoading(false);
        });
    }
  }, [user]);
  return [token, tokenLoading];
};

export default useToken;
