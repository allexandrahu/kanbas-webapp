import React, { useState, useEffect } from "react";
import "./table.css";
import {
  BsFillCheckCircleFill,
  BsPencil,
  BsTrash3Fill,
  BsPlusCircleFill,
} from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";
export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };
  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
    dob: "",
    email: "",
  });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async (user: client.User) => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const formatDate = (isoString: string | number | Date) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const [role, setRole] = useState("USER");
  const fetchUsersByRole = async (role: string) => {
    const users = await client.findUsersByRole(role);
    setRole(role);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {/* <select
        onChange={(e) => fetchUsersByRole(e.target.value)}
        value={role || "USER"}
        className="form-control float-end margin-left-100px"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select> */}
      <h1 className="table">User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th> {/* Added missing column */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th> {/* Added missing column */}
            <th>Date of Birth</th> {/* Added missing column */}
            <th>Role</th>
            <th>Actions</th> {/* Renamed for clarity */}
          </tr>
        </thead>
        <tbody>
          {/* New user input row */}
          <tr>
            <td>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.password}
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </td>
            <td>
              <input
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.dob}
                type="date"
                onChange={(e) => setUser({ ...user, dob: e.target.value })}
              />
            </td>
            <td>
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <button onClick={() => updateUser(user)} className="action-button add-button">
                <BsFillCheckCircleFill />
              </button>
              <button className="action-button add-button" onClick={createUser}>
                <BsPlusCircleFill className="icon" />{" "}
              </button>
            </td>
          </tr>
          {users.map((user: User) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>••••••••</td> {/* Mask password */}
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td> <td>{formatDate(user.dob)}</td>{" "}
              <td>{user.role}</td>
              <td>
                <button
                  className="action-button edit-button"
                  onClick={() => selectUser(user)}
                >
                  <BsPencil className="icon" />
                </button>
                <button
                  className="action-button delete-button"
                  onClick={() => deleteUser(user)}
                >
                  <BsTrash3Fill className="icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
