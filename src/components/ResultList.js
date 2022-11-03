import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ResultList({ suburbList, query }) {
	const { suburb, data } = useSelector((state) => state.data);
	const [listObject, setListObject] = useState([]);

	useEffect(() => {
		if (Object.keys(data).length !== 0 && suburb !== "") {
			// Create a new array Set conntaining 1 of each unique property
			// i.e. ['dog', 'cat', 'fox']
			const tempArray = [
				...new Set(suburbList.map((item) => item[`${query}`])),
			];

			let newObjectArray = [];

			tempArray.map((item) => {
				// Get count of how many times the property appears
				let total = suburbList.filter((obj) => obj[`${query}`] === item).length;
				// Push to array an object containing the Property and count of times it appears in the array
				return newObjectArray.push({
					type: item,
					count: total,
				});
			});
			setListObject(newObjectArray);
		}
	}, [suburbList, data, suburb, query]);

	return (
		<>
			{listObject.length > 0 && (
				<ul>
					{listObject.map((item, index) => {
						return item !== null ? (
							<li
								key={`reporting-${index}`}
								className={item.type === null && "not-found"}
							>
								<span className="item-type">
									{item.type === null ? <em>Null</em> : item.type}
								</span>{" "}
								<span className="item-count">{item.count}</span>
							</li>
						) : null;
					})}
				</ul>
			)}
		</>
	);
}
