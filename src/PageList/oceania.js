import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	root: {
		width: "100%",
		overflowX: "auto"
	},
	table: {
		minWidth: 400
	}
});

function createData(key, country, url) {
	return { key, country, url };
}

const rows = [
	createData(
		"1",
		"Australia",
		<a href="https://www.facebook.com/%E6%BE%B3%E6%B8%AF%E8%81%AFAustralia-Hong-Kong-Link-1764116977186092/?eid=ARARsZ6fwleO8Rg4_1d_e4ekcZZ4flTX08cjdyu7Y5BzM8vFPoz3FKOHzlfrjHNTBaqS5pp3Ry_AjJQZ">
			Australia Hong Kong Link
		</a>
	),
	createData(
		"2",
		"Australia - Adelaide",
		<a href="https://www.facebook.com/adlstandwithhk/">
			Adelaide-Stand with Hong Kong
		</a>
	),
	createData(
		"3",
		"Australia - Brisbane",
		<a href="https://www.facebook.com/BISSHK2019/">
			Brisbane International Student Solidarity with Hong Kong
		</a>
	),
	createData(
		"4",
		"Australia - Canberra",
		<a href="https://www.facebook.com/Canberrahkconcern/">
			Canberra Hong Kong Concern
		</a>
	),
	createData(
		"5",
		"Australia - Melbourne",
		<a href="https://www.facebook.com/VHKTSA/">
			Victoria Hong Kong Tertiary Student Association
		</a>
	),
	createData(
		"6",
		"Australia - Sydney",
		<a href="https://www.facebook.com/nswhongkongers/">NSW Hong Konger</a>
	),
	createData(
		"7",
		"New Zealand",
		<a href="https://www.facebook.com/wearehker/">
			We are Hong Konger 香港逃犯條例修訂草案紐西蘭關注組
		</a>
	),
	createData(
		"8",
		"",
		<a href="https://www.facebook.com/NZHongKonger/">
			New Zealand Hong Konger
		</a>
	)
];

const Oceania = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="europe table">
				<TableHead>
					<TableRow>
						<TableCell>
							<b>Country</b>
						</TableCell>
						<TableCell align="left">
							<b>Facebook Page</b>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.key}>
							<TableCell component="th" scope="row">
								{row.country}
							</TableCell>
							<TableCell align="left">{row.url}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
};

export default Oceania;
