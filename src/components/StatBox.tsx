import { Box, useTheme, Typography } from "@mui/material"
import { tokens } from "../theme"
import ProgressCircle from "./ProgressCircle"
import { ReactNode } from "react"

export interface IStatBoxProps {
	title: string
	subtitle: string
	icon: ReactNode
	progress: number
	increase: number
}

const StatBox = (props: IStatBoxProps) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box width="100%" m="0 30px">
			<Box display="flex" justifyContent="space-between">
				<Box>
					{props.icon}
					<Typography
						variant="h4"
						fontWeight="bold"
						sx={{ color: colors.grey[100] }}
					>
						{props.title}
					</Typography>
				</Box>
				<Box>
					<ProgressCircle progress={props.progress} />
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
						{props.subtitle}
					</Typography>
					<Typography
						variant="h5"
						fontStyle="italic"
						sx={{ color: colors.greenAccent[600] }}
					>
						{props.increase}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default StatBox
