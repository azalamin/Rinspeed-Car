import { useEffect, useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(true);
  useEffect( () => {
      ( async() => {
        //   const {data} = fetcher.get('')
      })()
  }, [])

  return [admin];
};

export default useAdmin;
