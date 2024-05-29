import React from 'react';
import {Router} from "./navigation";
import {clsx} from "clsx";

function App() {
  return (
    <div className={clsx(
        "bg-zinc-900",
        "text-white",
        "min-h-screen max-w-full",
        "font-sans"
    )}>
        <Router />
    </div>
  );
}

export default App;
