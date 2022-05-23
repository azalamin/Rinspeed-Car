import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { email: email, name: name };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          //   const token = data?.accessToken;
          //   localStorage.setItem("accessToken", token);
          setToken(true);
          console.log(data);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
