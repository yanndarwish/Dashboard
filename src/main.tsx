import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ProSidebarProvider } from "react-pro-sidebar"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProSidebarProvider>
				<App />
			</ProSidebarProvider>
		</BrowserRouter>
	</React.StrictMode>
)
