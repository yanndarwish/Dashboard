import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import TopBar from "./scenes/global/TopBar"
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team/index"
import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoices"
import Form from "./scenes/form"
import Calendar from "./scenes/calendar"
import FAQ from "./scenes/faq"
import Bar from "./scenes/bar"
import Pie from "./scenes/pie"
import Line from "./scenes/line"
import Geography from "./scenes/geography"

function App() {
	const [theme, colorMode] = useMode()

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar />
					<main className="content">
						<TopBar />
						<Routes>
							<Route path="/Dashboard" element={<Dashboard />} />
							<Route path="/Dashboard/team" element={<Team />} />
							<Route path="/Dashboard/contacts" element={<Contacts />} />
							<Route path="/Dashboard/invoices" element={<Invoices />} />
							<Route path="/Dashboard/form" element={<Form />} />
							<Route path="/Dashboard/calendar" element={<Calendar />} />
							<Route path="/Dashboard/faq" element={<FAQ />} />
							<Route path="/Dashboard/bar" element={<Bar />} />
							<Route path="/Dashboard/pie" element={<Pie />} />
							<Route path="/Dashboard/line" element={<Line />} />
							<Route path="/Dashboard/geography" element={<Geography />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
