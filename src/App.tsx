import React from 'react';
import {RootNavigation} from "./navigation";
import {clsx} from "clsx";

function App() {
  return (
    <div className={clsx(
        "bg-zinc-900",
        "text-white",
        "min-h-screen max-w-full",
        "font-sans"
    )}>
        <RootNavigation />
    </div>
  );
}

export default App;
