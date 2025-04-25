import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateStD } from "../api/api";
import useForm from "../hooks/useForm";
import Inputs from "./Inputs";

const Edit = () => {
  const { inputState, handleOnchange } = useForm();
  const {id} = useParams();
  const navigate = useNavigate();

  const onEdit = async (e) => {
    e.preventDefault();
    console.log(inputState)
    const { name, email, work } = inputState;
    await updateStD(id, { name, email, work });

    navigate('/', {replace: true})
  };
  return (
    <>
      <div className="app-container">
        <form
          className="max-w-xl w-full m-auto flex flex-col gap-9 rounded-lg ring-1 ring-gray-900 shadow-md shadow-black/25 bg-black/30 p-7"
          onSubmit={onEdit}
        >
          <Inputs
            type={"text"}
            label={"Name"}
            name={"name"}
            placeholder={"Jhon Doe"}
            value={inputState.name}
            onChange={handleOnchange}
          />
          <Inputs
            type={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"email@example.com"}
            value={inputState.email}
            onChange={handleOnchange}
          />
          <Inputs
            type={"text"}
            name={"work"}
            label={"Work"}
            placeholder={"Developer"}
            value={inputState.work}
            onChange={handleOnchange}
          />
          <button type="submit" className="button-theme">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
