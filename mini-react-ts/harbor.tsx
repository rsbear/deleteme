import React from "react";
import ReactDOM from "react-dom/client";

// The App now receives the Harbor API as a prop, allowing it to interact
// with the main application shell.
function App() {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 animate-fade-in">
      <h1 className="text-2xl font-bold text-white">
        Your installed mini apps
      </h1>
      <div>ye</div>
    </div>
  );
}

console.log("Hello from mini-react-ts!", App);

export const harborMini = "react";
export function harborMount(targetElement: HTMLElement, harborApi: any) {
  // we dont need an onSubmit for this app yet
  const root = ReactDOM.createRoot(targetElement);
  root.render(<App />);
}
