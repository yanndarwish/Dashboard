import { ReactNode, useState } from "react"
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"
import {
	Box,
	IconButton,
	Typography,
	useTheme,
	useMediaQuery,
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
	toggleSidebar?: () => void
}

const Item = ({
	title,
	to,
	icon,
	selected,
	setSelected,
	toggleSidebar,
}: IItem) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const handleClick = () => {
		setSelected(title)
		if (toggleSidebar) {
			toggleSidebar()
		}
	}

	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => handleClick()}
			icon={icon}
			component={<Link to={to} />}
		>
			<Typography>{title}</Typography>
		</MenuItem>
	)
}

const MySidebar = () => {
	const isNonMobile = useMediaQuery("(min-width:768px)")
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { collapseSidebar, collapsed } = useProSidebar()
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState("")

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return isNonMobile ? (
		<Box
			sx={{
				zIndex: 100,
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
				<Menu style={{ height: "100%" }}>
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
									<MenuOutlinedIcon />
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
							to="/Dashboard"
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
							to="/Dashboard/team"
							icon={<PeopleOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Contacts"
							to="/Dashboard/contacts"
							icon={<ContactsOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Invoices Balances"
							to="/Dashboard/invoices"
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
							to="/Dashboard/form"
							icon={<PersonOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Calendar"
							to="/Dashboard/calendar"
							icon={<CalendarTodayOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="FAQ Page"
							to="/Dashboard/faq"
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
							to="/Dashboard/bar"
							icon={<BarChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Pie Chart"
							to="/Dashboard/pie"
							icon={<PieChartOutlinedOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Line Chart"
							to="/Dashboard/line"
							icon={<TimelineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Geography Chart"
							to="/Dashboard/geography"
							icon={<MapOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</Sidebar>
		</Box>
	) : (
		<>
			<Box height="fit-content" p="15px" position="absolute">
				<IconButton onClick={() => toggleSidebar()}>
					<MenuOutlinedIcon />
				</IconButton>
			</Box>
			{isOpen && (
				<Box
					sx={{
						zIndex: 100,
						position: "fixed",
						top: "0",
						left: "0",
						bottom: "0",
						height: "100%",
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
						backgroundColor="transparent"
						style={{
							border: "none",
							height: "100%",
							width: "min(100%, 480px",
						}}
					>
						<Menu
							style={{
								width: "min(100%, 480px",
								backgroundColor: colors.primary[400],
							}}
						>
							<MenuItem
								icon={
									collapsed ? (
										<MenuOutlinedIcon onClick={() => toggleSidebar()} />
									) : undefined
								}
								style={{
									margin: "20px 0 20px 0",
									color: colors.grey[100],
								}}
							>
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									ml="15px"
								>
									<Typography variant="h3" color={colors.grey[100]}>
										ADMINIS
									</Typography>
									<IconButton onClick={() => toggleSidebar()}>
										<MenuOutlinedIcon />
									</IconButton>
								</Box>
							</MenuItem>

							{/* USER */}

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
							{/* MENU ITEMS */}
							<Box paddingLeft="10%">
								<Item
									title="Dashboard"
									to="/Dashboard"
									icon={<HomeOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
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
									to="/Dashboard/team"
									icon={<PeopleOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
								<Item
									title="Contacts"
									to="/Dashboard/contacts"
									icon={<ContactsOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
								<Item
									title="Invoices Balances"
									to="/Dashboard/invoices"
									icon={<ReceiptOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
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
									to="/Dashboard/form"
									icon={<PersonOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
								<Item
									title="Calendar"
									to="/Dashboard/calendar"
									icon={<CalendarTodayOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
								<Item
									title="FAQ Page"
									to="/Dashboard/faq"
									icon={<HelpOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
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
									to="/Dashboard/bar"
									icon={<BarChartOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
								<Item
									title="Pie Chart"
									to="/Dashboard/pie"
									icon={<PieChartOutlinedOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
								<Item
									title="Line Chart"
									to="/Dashboard/line"
									icon={<TimelineOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
								<Item
									title="Geography Chart"
									to="/Dashboard/geography"
									icon={<MapOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
									toggleSidebar={toggleSidebar}
								/>
							</Box>
						</Menu>
					</Sidebar>
				</Box>
			)}
		</>
	)
}

export default MySidebar
