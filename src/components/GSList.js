import React from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import Europe from "../PageList/europe";
import NA from "../PageList/na";
import Oceania from "../PageList/oceania";
import "./tabs.css";
import "./Hero.css";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

	return (
		<button className={cn("tab", isActive && "active")} onClick={onClick}>
			{children}
		</button>
	);
};

const GSList = () => {
	return (
		<div className="hero">
			<div className="header">
				<h1>Global Solidarity with Hong Kong’ rallies</h1>

				<Tabs>
					<div className="tabs">
						<div className="tab-list">
							<Tab>Europe</Tab>
							<Tab>North America</Tab>
							<Tab>Oceania</Tab>
						</div>

						<div className="tab-progress" />

						<Panel>
							<Europe />
						</Panel>
						<Panel>
							<NA />
						</Panel>
						<Panel>
							<Oceania />
						</Panel>
					</div>
				</Tabs>
				<div className="hoverblock"></div>
			</div>
		</div>
	);
};

export default GSList;
