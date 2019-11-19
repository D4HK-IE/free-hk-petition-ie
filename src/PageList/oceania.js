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
		<a href="http://www.facebook.com/%E6%BE%B3%E6%B8%AF%E8%81%AFAustralia-Hong-Kong-Link-1764116977186092/?eid=ARARsZ6fwleO8Rg4_1d_e4ekcZZ4flTX08cjdyu7Y5BzM8vFPoz3FKOHzlfrjHNTBaqS5pp3Ry_AjJQZ">
			Australia Hong Kong Link
		</a>
	),
	createData(
		"2",
		"Australia - Adelaide",
		<a
			href="http://www.facebook.com/adlstandwithhk/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Adelaide-Stand with Hong Kong
		</a>
	),
	createData(
		"3",
		"Australia - Brisbane",
		<a
			href="http://www.facebook.com/BISSHK2019/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Brisbane International Student Solidarity with Hong Kong
		</a>
	),
	createData(
		"4",
		"Australia - Canberra",
		<a
			href="http://www.facebook.com/Canberrahkconcern/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Canberra Hong Kong Concern
		</a>
	),
	createData(
		"5",
		"Australia - Melbourne",
		<a
			href="http://www.facebook.com/VHKTSA/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Victoria Hong Kong Tertiary Student Association
		</a>
	),
	createData(
		"6",
		"Australia - Sydney",
		<a
			href="http://www.facebook.com/nswhongkongers/"
			target="_blank"
			rel="noopener noreferrer"
		>
			NSW Hong Konger
		</a>
	),
	createData(
		"7",
		"New Zealand",
		<a
			href="http://www.facebook.com/wearehker/"
			target="_blank"
			rel="noopener noreferrer"
		>
			We are Hong Konger 香港逃犯條例修訂草案紐西蘭關注組
		</a>
	),
	createData(
		"8",
		"",
		<a
			href="http://www.facebook.com/NZHongKonger/"
			target="_blank"
			rel="noopener noreferrer"
		>
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
