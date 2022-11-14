import React from "react";
import "./lesson_4";
import { createPromiseInit, handlePromise } from "./lesson_4";

const createPromiseHandler = () => {
  createPromiseInit();
};

const resolveButtonHandler = () => {
  if (handlePromise.resolve) {
    return handlePromise.onsuccess("I am fulfilled");
  }
};
const rejectButtonHandler = () => {
  if (handlePromise.reject) {
    return handlePromise.onError("Some Error");
  }
};

const Lesson4 = () => {
  return (
    <div>
      <button onClick={createPromiseHandler} id="btn-create-promise">
        Create Promise
      </button>
      <button onClick={resolveButtonHandler} id="btn-resolve-promise">
        Resolve Promise
      </button>
      <button onClick={rejectButtonHandler} id="btn-reject-promise">
        Reject Promise
      </button>
    </div>
  );
};

export default Lesson4;
