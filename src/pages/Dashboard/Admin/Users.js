import React, { useState } from "react";
import { useQuery } from "react-query";
import fetcher from "../../../api";
import Loading from "../../../components/Loading";
import AdminConfirm from "./AdminConfirm";
import User from "./User";

const Users = () => {
  const [makeAdmin, setMakeAdmin] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", async () => await fetcher.get(`/user`));

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-3xl font-bold text-center py-5">MY Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th className="text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.data.map((user, index) => (
              <User
                index={index}
                user={user}
                key={index}
                setMakeAdmin={setMakeAdmin}
              />
            ))}
          </tbody>
        </table>
      </div>
      {makeAdmin && (
        <AdminConfirm
          refetch={refetch}
          makeAdmin={makeAdmin}
          setMakeAdmin={setMakeAdmin}
        />
      )}
    </div>
  );
};

export default Users;
