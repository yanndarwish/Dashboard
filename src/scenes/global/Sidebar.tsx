import { ReactNode, useState } from "react"
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"
import {
	Box,
	IconButton,
	Typography,
	useTheme,
	SvgIconTypeMap,
} from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from "../../theme"
import profile from "../../assets/profile.jpg"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlinedOutlinedIcon from "@mui/icons-material/PieChartOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"

interface IItem {
	title: string
	to: string
	icon: ReactNode
	selected: string
	setSelected: (title: string) => void
}

const Item = ({ title, to, icon, selected, setSelected }: IItem) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => setSelected(title)}
			icon={icon}
			component={<Link to={to} />}
		>
			<Typography>{title}</Typography>
		</MenuItem>
	)
}

const MySidebar = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { collapseSidebar, collapsed } = useProSidebar()

	const [selected, setSelected] = useState("")

	return (
		<Box
			sx={{
				"& .ps-active": {
					color: "#6870fa !important",
				},
				"& .ps-menu-button": {
					padding: "5px 35px 5px 20px !important",
				},
				"& .ps-menu-button:hover": {
					color: "#868DFB !important",
					background: "none !important",
				},
			}}
		>
			<Sidebar
				backgroundColor={colors.primary[400]}
				style={{ border: "none", height: "100%" }}
			>
				<Menu>
					<MenuItem
						icon={
							collapsed ? (
								<MenuOutlinedIcon onClick={() => collapseSidebar()} />
							) : undefined
						}
						style={{
							margin: "20px 0 20px 0",
							color: colors.grey[100],
						}}
					>
						{!collapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Typography variant="h3" color={colors.grey[100]}>
									ADMINIS
								</Typography>
								<IconButton onClick={() => collapseSidebar()}>
									<MenuOutlinedIcon
									// onClick={(e) => {
									// 	e.stopPropagation()
									// 	collapseSidebar()
									// }}
									/>
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/* USER */}
					{!collapsed && (
						<Box mb="25px">
							<Box display="flex" justifyContent="center" alignItems="center">
								<img
									alt="profile-user"
									width="100px"
									height="100px"
									src={profile}
									style={{
										cursor: "pointer",
										borderRadius: "50%",
										objectFit: "cover",
									}}
								/>
							</Box>
							<Box textAlign="center">
								<Typography
									variant="h2"
									color={colors.grey[100]}
									fontWeight="bold"
									sx={{ m: "10px 0 0 0" }}
								>
									Yann Darwish
								</Typography>
								<Typography variant="h5" color={colors.greenAccent[500]}>
									Front End Developper
								</Typography>
							</Box>
						</Box>
					)}
					{/* MENU ITEMS */}
					<Box paddingLeft={collapsed ? undefined : "10%"}>
						<Item
							title="Dashboard"
							to="/"
							icon={<HomeOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 15px 20px" }}
						>
							Data
						</Typography>
						<Item
							title="Manage Team"
							to="/team"
							icon={<PeopleOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Contacts"
							to="/contacts"
							icon={<ContactsOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Invoices Balances"
							to="/invoices"
							icon={<ReceiptOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 15px 20px" }}
						>
							Pages
						</Typography>
						<Item
							title="Profile Form"
							to="/form"
							icon={<PersonOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Calendar"
							to="/calendar"
							icon={<CalendarTodayOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="FAQ Page"
							to="/faq"
							icon={<HelpOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 15px 20px" }}
						>
							Charts
						</Typography>
						<Item
							title="Bar Chart"
							to="/bar"
							icon={<BarChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Pie Chart"
							to="/pie"
							icon={<PieChartOutlinedOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Line Chart"
							to="/line"
							icon={<TimelineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Geography Chart"
							to="/geography"
							icon={<MapOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</Sidebar>
		</Box>
	)
}

export default MySidebar
