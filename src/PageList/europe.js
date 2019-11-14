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
		"Belgium",
		<a href="https://www.facebook.com/StandwithHK.Belgium/">
			Stand With Hong Kong - Belgium
		</a>
	),
	createData(
		"2",
		"Denmark",
		<a href="https://www.facebook.com/DenmarkSupportingHongKong/">
			Støt Hong Kong 支持香港 Support Hong Kong
		</a>
	),
	createData(
		"3",
		"France",
		<a href="https://www.facebook.com/HKparapluies/">
			Les parapluies de Hong Kong
		</a>
	),
	createData(
		"4",
		"Germany",
		<a href="https://www.facebook.com/germanyswhk/">
			Germany Stand with Hong Kong
		</a>
	),
	createData(
		"5",
		"Ireland",
		<a href="https://www.facebook.com/democracy4hkinireland/">
			Democracy for HK in Ireland
		</a>
	),
	createData(
		"6",
		"Italy",
		<a href="https://www.facebook.com/antielab.italy/">
			Free Hong Kong - Pagina Italiana per la Libertà e la Democrazia a
			Hong Kong
		</a>
	),
	createData(
		"7",
		"",
		<a href="https://www.facebook.com/AntielabMN/">
			Stand with Hong Kong - Italy
		</a>
	),
	createData(
		"8",
		"Netherlands",
		<a href="https://www.facebook.com/nl4hk/">Netherlands for Hong Kong</a>
	),
	createData(
		"9",
		"Norway",
		<a href="https://www.facebook.com/standwithhk.norway/">
			Hong Kong Committee in Norway
		</a>
	),
	createData(
		"10",
		"Sweden",
		<a href="https://www.facebook.com/SV4HK/">
			Sweden for Hong Kong / Sverige för Hongkong
		</a>
	),
	createData(
		"11",
		"Switzerland",
		<a href="https://www.facebook.com/Switzerland-Stands-with-Hong-Kong-111671970235213/?eid=ARBINXkZ8DOylYWeEqlXqmJoGScX5ZKdJem_HATfFRw_IQDRwRJSmvoAUAWEfyomOVpZBJ2bG6F5kDPt">
			Switzerland Stands with Hong Kong
		</a>
	),
	createData(
		"12",
		"",
		<a href="https://www.facebook.com/hkersinswiterland/">
			香港人在瑞士 Hongkongers in Switzerland
		</a>
	),
	createData(
		"13",
		"United Kingdom",
		<a href="https://www.facebook.com/DemocracyForHongKong/">
			Democracy for Hong Kong - D4HK
		</a>
	)
];

const Europe = () => {
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

export default Europe;
