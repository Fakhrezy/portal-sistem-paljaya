import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Set document title
if (typeof document !== "undefined") {
	document.title = "PALJAYA ENTERPRISE";
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
