import React, { useRef } from "react";
import style from "./regular.module.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterStoreData, todoStore } from "../store/atoms/todoStore";

function Navbar() {
  const title = useRef();
  const description = useRef();

  console.log("Navbar Render");

  const setTodo = useSetRecoilState(todoStore);
  const setFilter = useSetRecoilState(filterStoreData);

  function handleForm(e) {
    e.preventDefault();

    setTodo((prev) => [
      ...prev,
      {
        title: title.current.value,
        description: description.current.value,
      },
    ]);

    title.current.value = "";
    description.current.value = "";
  }

  return (
    <div className={`w-full h-[20vh] border-2 ${style.borderBottom}`}>
      <form
        className="flex items-center justify-center gap-x-9 h-full"
        onSubmit={(e) => handleForm(e)}
      >
        {/* Title Input for TODO's */}
        <div className="flex items-center">
          <label htmlFor="title" className="text-2xl m-3">
            Title
          </label>
          <input
            ref={title}
            type="text"
            name="title"
            id="title"
            placeholder="Write title"
            className="p-2 rounded-md bg-black text-white"
          />
        </div>
        {/* Desccription Input for TODO's */}
        <div className="flex items-center">
          <label htmlFor="description" className="text-2xl m-3">
            Description
          </label>
          <textarea
            ref={description}
            name="description"
            id="description"
            placeholder="Write description"
            className={`min-h-10 max-h-36 p-2 rounded-md ${style.hidden} bg-black text-white`}
          />
        </div>
        {/* Submit Button for the form */}
        <div className="flex items-center">
          <input
            type="submit"
            value="Add New ToDo"
            className="bg-green-600 text-white font-bold text-xl p-2 rounded-md cursor-pointer"
          />
        </div>
        {/* Filter Button for the Specfic Button */}
        <div className="flex items-center">
          <label htmlFor="search" className="text-2xl m-3">
            Search
          </label>
          <input
            onChange={(e)=>setFilter(e.target.value)}
            type="text"
            name="search"
            id="search"
            placeholder="Search for specfic todo"
            className={`p-2 rounded-md bg-black text-white`}
          />
        </div>
      </form>
    </div>
  );
}

export default Navbar;
