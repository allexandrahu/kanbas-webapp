import React, { useState } from "react";
import "./index.css";
import { modules as initialModules } from "../../Database";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="module-form-container">
        <input
          type="text"
          placeholder="New Module"
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
        }/>
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          className="edit"
        >
          Add
        </button>
        <button className="update" onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
      </div>
      <textarea
        placeholder="New Description"
        value={module.description}
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
      }/>
      <ul className="list-group wd-module">
        {moduleList.map((module, index) => (
          <li key={module._id} className="list-group-item">
            <button
              className="edit"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              className="delete-button" onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <div className="module-item">
              <div className="module-name">{module.name}</div>
              <div className="module-description">{module.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ModuleList;
