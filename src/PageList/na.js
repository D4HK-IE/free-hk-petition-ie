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
		<a
			href="http://www.facebook.com/CHKLink/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Canada-Hong Kong Link
		</a>
	),
	createData(
		"2",
		"",
		<a
			href="http://www.facebook.com/CanadaHongKonger/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Canada HongKonger
		</a>
	),
	createData(
		"3",
		"Canada - Halifax",
		<a
			href="http://www.facebook.com/HalifaxHK/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Halifax-Hong Kong Link
		</a>
	),
	createData(
		"4",
		"Canada - Montreal",
		<a
			href="http://www.facebook.com/freehkmtl"
			target="_blank"
			rel="noopener noreferrer"
		>
			Action Free Hong Kong Montreal 滿地可撐香港行動頁 #Freehkmtl
		</a>
	),
	createData(
		"5",
		"Canada - Ottawa",
		<a
			href="http://www.facebook.com/TFHKR/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Ottawans Stand With HK 渥太華人撐香港 Ottaviens en solidarité avec
			HK
		</a>
	),
	createData(
		"6",
		"Canada - Toronto",
		<a
			href="http://www.facebook.com/antielab.italy/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Torontonians Stand with Hong Kong 多倫多人撐香港
		</a>
	),
	createData(
		"7",
		"Canada - Winnipeg",
		<a
			href="http://www.facebook.com/Winnipeg-Hong-Kong-Concern-100942907924733/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Winnipeg Hong Kong Concern
		</a>
	),
	createData(
		"8",
		"Canada - Vancouver",
		<a
			href="http://www.facebook.com/vansavehk/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Vancouverites Concerned About Hong Kong
		</a>
	),
	createData(
		"9",
		"USA - Boston",
		<a
			href=" http://www.facebook.com/HKSAMBOS/"
			target="_blank"
			rel="noopener noreferrer"
		>
			波士頓香港人權組織 Hong Kong Social Action Movements in Boston
		</a>
	),
	createData(
		"10",
		"USA - Chicago",
		<a
			href="http://www.facebook.com/chicagohkdemocracy/"
			target="_blank"
			rel="noopener noreferrer"
		>
			芝援香港 Global Solidarity with Hong Kong - Chicago
		</a>
	),
	createData(
		"11",
		"USA - L.A.",
		<a
			href="http://www.facebook.com/HKFLA"
			target="_blank"
			rel="noopener noreferrer"
		>
			洛杉磯香港論壇 Hong Kong Forum, Los Angeles - Public
		</a>
	),
	createData(
		"12",
		"USA - New York",
		<a
			href="http://www.facebook.com/NY4HK/"
			target="_blank"
			rel="noopener noreferrer"
		>
			NY4HK - New Yorkers Supporting Hong Kong
		</a>
	),
	createData(
		"13",
		"USA - Washington",
		<a
			href="http://www.facebook.com/DC4HK/"
			target="_blank"
			rel="noopener noreferrer"
		>
			DC4HK - Washingtonians Supporting Hong Kong
		</a>
	),
	createData(
		"14",
		"USA - California",
		<a
			href="http://www.facebook.com/ncal.hkclub/"
			target="_blank"
			rel="noopener noreferrer"
		>
			N. Calif Hong Kong Club - 北加州香港會
		</a>
	),
	createData(
		"15",
		"USA - Minneapolis",
		<a
			href="http://www.facebook.com/AntielabMN/"
			target="_blank"
			rel="noopener noreferrer"
		>
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
