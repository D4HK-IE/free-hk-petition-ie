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
		<a
			href="http://www.facebook.com/StandwithHK.Belgium/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Stand With Hong Kong - Belgium
		</a>
	),
	createData(
		"2",
		"Denmark",
		<a
			href="http://www.facebook.com/DenmarkSupportingHongKong/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Støt Hong Kong 支持香港 Support Hong Kong
		</a>
	),
	createData(
		"3",
		"France",
		<a
			href="http://www.facebook.com/HKparapluies/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Les parapluies de Hong Kong
		</a>
	),
	createData(
		"4",
		"Germany",
		<a
			href="http://www.facebook.com/germanyswhk/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Germany Stand with Hong Kong
		</a>
	),
	createData(
		"5",
		"Ireland",
		<a
			href="http://www.facebook.com/democracy4hkinireland/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Democracy for HK in Ireland
		</a>
	),
	createData(
		"6",
		"Italy",
		<a
			href="http://www.facebook.com/antielab.italy/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Free Hong Kong - Pagina Italiana per la Libertà e la Democrazia a
			Hong Kong
		</a>
	),
	createData(
		"7",
		"",
		<a
			href="http://www.facebook.com/AntielabMN/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Stand with Hong Kong - Italy
		</a>
	),
	createData(
		"8",
		"Netherlands",
		<a
			href="http://www.facebook.com/nl4hk/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Netherlands for Hong Kong
		</a>
	),
	createData(
		"9",
		"Norway",
		<a
			href="http://www.facebook.com/standwithhk.norway/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Hong Kong Committee in Norway
		</a>
	),
	createData(
		"10",
		"Sweden",
		<a
			href="http://www.facebook.com/SV4HK/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Sweden for Hong Kong / Sverige för Hongkong
		</a>
	),
	createData(
		"11",
		"Switzerland",
		<a
			href="http://www.facebook.com/Switzerland-Stands-with-Hong-Kong-111671970235213/?eid=ARBINXkZ8DOylYWeEqlXqmJoGScX5ZKdJem_HATfFRw_IQDRwRJSmvoAUAWEfyomOVpZBJ2bG6F5kDPt"
			target="_blank"
			rel="noopener noreferrer"
		>
			Switzerland Stands with Hong Kong
		</a>
	),
	createData(
		"12",
		"",
		<a
			href="http://www.facebook.com/hkersinswiterland/"
			target="_blank"
			rel="noopener noreferrer"
		>
			香港人在瑞士 Hongkongers in Switzerland
		</a>
	),
	createData(
		"13",
		"United Kingdom",
		<a
			href="http://www.facebook.com/DemocracyForHongKong/"
			target="_blank"
			rel="noopener noreferrer"
		>
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
