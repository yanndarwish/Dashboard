import Header from "../../components/Header"
import { Box } from "@mui/material"

export interface IDashboardProps {}

const Dashboard = (props: IDashboardProps) => {
	return (
		<Box m="20px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
			</Box>
		</Box>
	)
}

export default Dashboard
