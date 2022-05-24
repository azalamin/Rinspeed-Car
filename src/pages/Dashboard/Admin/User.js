import React from "react";

const User = ({ user, index, setMakeAdmin }) => {
  const { name, email, role, city } = user;
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{city}</td>
      <td className="text-center">
        {role ? (
          <span className="bg-success px-4 py-2 font-semibold">Admin</span>
        ) : (
          <label
            htmlFor="admin-confirm"
            onClick={() => setMakeAdmin(user)}
            className="btn btn-primary btn-sm"
          >
            Make Admin
          </label>
        )}
      </td>
    </tr>
  );
};

export default User;
