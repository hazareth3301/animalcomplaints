import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Header() {
	const { data } = useSelector((state) => state.data);
	const [totalRecords, setTotalRecords] = useState("");

	useEffect(() => {
		if (Object.keys(data).length !== 0) {
			setTotalRecords(data.result.records.length);
		}
	}, [data]);

	return (
		<header>
			<p className="bcc">
				<strong>Brisbane City Council</strong>
			</p>
			<h1>Animal Complaints</h1>
			<p className="total-complaints">
				Total complaints: <span className="record-number">{totalRecords}</span>
			</p>
		</header>
	);
}
