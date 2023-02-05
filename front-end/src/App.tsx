import React from "react";
import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            border: "2px solid var(--gray-1)",
          },
        }}
      />
      <RoutesMain />
    </>
  );
}

export default App;
