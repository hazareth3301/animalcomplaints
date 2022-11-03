import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import ResultList from "./ResultList";

export default function CardContainer() {
	const { suburb, data } = useSelector((state) => state.data);
	const [recordList, setRecordList] = useState([]);

	useEffect(() => {
		!suburb && setRecordList([]);

		if (Object.keys(data).length !== 0 && suburb !== "") {
			let tempArray = [];
			data.result.records.map((item) => {
				if (item["Location: Suburb"] === suburb) {
					return tempArray.push(item);
				} else {
					return null;
				}
			});
			setRecordList(tempArray);
		}
	}, [suburb, data]);

	return (
		<>
			{suburb && <h2>{suburb}</h2>}
			<div id="card-container">
				{recordList.length > 0 && (
					<>
						<Card title="Total">
							<p className="total-number">{recordList.length}</p>
						</Card>
						<Card title="Category type" styles="category-type">
							<ResultList suburbList={recordList} query="Category: Type" />
						</Card>
						<Card title="Reporting level" styles="category-type">
							<ResultList
								suburbList={recordList}
								query="Category: Reporting Level"
							/>
						</Card>
					</>
				)}
			</div>
		</>
	);
}
