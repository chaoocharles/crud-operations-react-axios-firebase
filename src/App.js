import React from "react";
import Results from "./components/results/Results";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Results />
      <Loading />
      <ToastContainer />
    </div>
  );
}

export default App;
