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
		"Canada",
		<a href="https://www.facebook.com/CHKLink/">Canada-Hong Kong Link</a>
	),
	createData(
		"2",
		"",
		<a href="https://www.facebook.com/CanadaHongKonger/">
			Canada HongKonger
		</a>
	),
	createData(
		"3",
		"Canada - Halifax",
		<a href="https://www.facebook.com/HalifaxHK/">Halifax-Hong Kong Link</a>
	),
	createData(
		"4",
		"Canada - Montreal",
		<a href="https://www.facebook.com/freehkmtl">
			Action Free Hong Kong Montreal 滿地可撐香港行動頁 #Freehkmtl
		</a>
	),
	createData(
		"5",
		"Canada - Ottawa",
		<a href="https://www.facebook.com/TFHKR/">
			Ottawans Stand With HK 渥太華人撐香港 Ottaviens en solidarité avec
			HK
		</a>
	),
	createData(
		"6",
		"Canada - Toronto",
		<a href="https://www.facebook.com/antielab.italy/">
			Torontonians Stand with Hong Kong 多倫多人撐香港
		</a>
	),
	createData(
		"7",
		"Canada - Winnipeg",
		<a href="https://www.facebook.com/Winnipeg-Hong-Kong-Concern-100942907924733/">
			Winnipeg Hong Kong Concern
		</a>
	),
	createData(
		"8",
		"Canada - Vancouver",
		<a href="https://www.facebook.com/vansavehk/">
			Vancouverites Concerned About Hong Kong
		</a>
	),
	createData(
		"9",
		"USA - Boston",
		<a href=" https://www.facebook.com/HKSAMBOS/">
			波士頓香港人權組織 Hong Kong Social Action Movements in Boston
		</a>
	),
	createData(
		"10",
		"USA - Chicago",
		<a href="https://www.facebook.com/chicagohkdemocracy/">
			芝援香港 Global Solidarity with Hong Kong - Chicago
		</a>
	),
	createData(
		"11",
		"USA - L.A.",
		<a href="https://www.facebook.com/HKFLA">
			洛杉磯香港論壇 Hong Kong Forum, Los Angeles - Public
		</a>
	),
	createData(
		"12",
		"USA - New York",
		<a href="https://www.facebook.com/NY4HK/">
			NY4HK - New Yorkers Supporting Hong Kong
		</a>
	),
	createData(
		"13",
		"USA - Washington",
		<a href="https://www.facebook.com/DC4HK/">
			DC4HK - Washingtonians Supporting Hong Kong
		</a>
	),
	createData(
		"14",
		"USA - California",
		<a href="https://www.facebook.com/ncal.hkclub/">
			N. Calif Hong Kong Club - 北加州香港會
		</a>
	),
	createData(
		"15",
		"USA - Minneapolis",
		<a href="https://www.facebook.com/AntielabMN/">
			Liberty for Hong Kong - MN
		</a>
	)
];

const NA = () => {
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

export default NA;
