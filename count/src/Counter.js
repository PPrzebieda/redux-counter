import React from "react";
import { connect } from "react-redux";

const Counter = ({ count, increment }) => {
  return (
    <div className="bg-neutral-100 h-screen w-full flex items-center justify-center ">
      <div className="custom-number-input h-10 w-32">
        <label
          htmlFor="custom-input-number"
          className="w-full text-gray-700 text-sm font-semibold"
        >
          Licznik
        </label>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value={count}
          ></input>
          <button
            onClick={increment}
            data-action="increment"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
