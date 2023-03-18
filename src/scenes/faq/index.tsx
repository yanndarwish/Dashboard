import { Box, useTheme, Accordion, Typography } from "@mui/material"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { ExpandMore } from "@mui/icons-material"
import { tokens } from "../../theme"
import Header from "../../components/Header"

const Faq = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently Asked Questions Page" />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colors.greenAccent[500]}>
						An Important question
					</Typography>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							commodi numquam repellendus doloremque hic quae mollitia ipsam.
							Inventore, quod corporis error fuga doloremque aperiam blanditiis
							dicta. Doloremque ducimus commodi aspernatur?
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colors.greenAccent[500]}>
						An Other Important question
					</Typography>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							commodi numquam repellendus doloremque hic quae mollitia ipsam.
							Inventore, quod corporis error fuga doloremque aperiam blanditiis
							dicta. Doloremque ducimus commodi aspernatur?
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colors.greenAccent[500]}>
						Your Favorite question
					</Typography>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							commodi numquam repellendus doloremque hic quae mollitia ipsam.
							Inventore, quod corporis error fuga doloremque aperiam blanditiis
							dicta. Doloremque ducimus commodi aspernatur?
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colors.greenAccent[500]}>
						One More question
					</Typography>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							commodi numquam repellendus doloremque hic quae mollitia ipsam.
							Inventore, quod corporis error fuga doloremque aperiam blanditiis
							dicta. Doloremque ducimus commodi aspernatur?
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colors.greenAccent[500]}>
						The Final question
					</Typography>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							commodi numquam repellendus doloremque hic quae mollitia ipsam.
							Inventore, quod corporis error fuga doloremque aperiam blanditiis
							dicta. Doloremque ducimus commodi aspernatur?
						</Typography>
					</AccordionDetails>
				</AccordionSummary>
			</Accordion>
		</Box>
	)
}

export default Faq
