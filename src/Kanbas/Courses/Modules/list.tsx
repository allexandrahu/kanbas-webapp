import "./index.css";
import { useParams } from "react-router";
import {
  deleteModule,
} from "./reducer";
import * as client from "./client";
import React, {  } from "react";
import { modules } from "../../Database";

function ModuleList() {
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const courseId = useParams(); // Add this line to declare the courseId variable
  const handleUpdateModule = async () => {
    const module: { _id: string } = { _id: "module-id" }; // Replace "module-id" with the actual module ID
    dispatch({ type: "modules/updateModule", payload: module }); // Fix: Use the correct action type for updateModule
  };

  function handleAddModule(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  function dispatch(arg0: { payload: any; type: "modules/deleteModule" | "modules/updateModule"; }) {
    throw new Error("Function not implemented.");
  }

  return (
    <ul className="list-group">
      {(modules) 
        .filter((module) => module.course === courseId.courseId) // Fix: Access the courseId property from useParams()
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => handleDeleteModule(module._id)} >
              Delete </button>
              <button onClick={handleAddModule}>Add</button>
              <button onClick={handleUpdateModule}>Update</button>
            <h3>{module.name}</h3>
          </li>
        ))}
    </ul>
  );

}

export default ModuleList;

