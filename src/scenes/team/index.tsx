import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataTeam } from "../../data/mockData"
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlined from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header"

const Team = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const columns: GridColDef[] = [
		{
			field: "id",
			headerName: "ID",
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "access",
			headerName: "Access Level",
			flex: 1,
			renderCell: ({ row: { access } }: { row: { access: string } }) => {
				return (
					<Box
						width="60%"
						m="0 auto"
						p="5px"
						display="flex"
						justifyContent="center"
						sx={{
							backgroundColor:
								access === "admin"
									? colors.greenAccent[600]
									: colors.greenAccent[700],
						}}
						borderRadius="4px"
					>
						{access === "admin" && <AdminPanelSettingsOutlined />}
						{access === "manager" && <SecurityOutlined />}
						{access === "user" && <LockOpenOutlined />}
						<Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
							{access}
						</Typography>
					</Box>
				)
			},
		},
	]

	return (
		<Box m="20px">
			<Header title="TEAM" subtitle="Managing the Team Members" />
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						border: "none !important",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[500],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						border: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colors.blueAccent[700],
					},
				}}
			>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	)
}

export default Team
