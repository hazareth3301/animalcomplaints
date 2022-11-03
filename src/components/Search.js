import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSuburb } from "../redux/data";

import suburbs from "../localfiles/suburbs.json";

export default function Search() {
	const [suburbList, setSuburbList] = useState([]);
	const [suburbNotFound, setSuburbNotFound] = useState(false);
	const dispatch = useDispatch();

	// Update store with selected Suburb name
	const handleClick = (e) => {
		e.preventDefault();

		removeActiveButtonClass();
		updateActiveButtonClass(e.target.id);

		const suburbName = e.target.value.toUpperCase();
		dispatch(updateSuburb(suburbName));
	};

	const removeActiveButtonClass = (id) => {
		const activeButton = Array.from(
			document.getElementsByClassName("suburb-button isActive")
		);
		if (activeButton.length > 0) {
			activeButton.forEach((item) => {
				item.classList.remove("isActive");
			});
		}
	};

	const updateActiveButtonClass = (id) => {
		document.getElementById(id).classList.add("isActive");
	};

	// Check if postcode is valid on each input
	const handleChange = (e) => {
		e.preventDefault();

		setSuburbNotFound(false);
		setSuburbList([]);
		dispatch(updateSuburb(""));

		const postcode = e.target.value;
		let suburbNames = [];

		if (postcode.length === 4 && isNumeric(postcode)) {
			suburbs &&
				suburbs.map((suburb) => {
					if (suburb.Postcode.toString() === postcode) {
						return suburbNames.push(suburb.Place);
					} else {
						return null;
					}
				});
			if (suburbNames.length === 0) {
				setSuburbNotFound(true);
			} else {
				setSuburbList(suburbNames);
			}
		}
	};

	// Return true if only numbers are inputted
	const isNumeric = (value) => {
		return !isNaN(parseFloat(value)) && isFinite(value);
	};

	return (
		<div id="search-container" aria-live="polite">
			<form>
				<label aria-label="Enter postcode">
					<input
						className="search-input"
						type="text"
						placeholder="Enter postcode"
						pattern="[0-9]{4}"
						maxLength="4"
						required
						onChange={(e) => handleChange(e)}
					/>
				</label>
			</form>
			{suburbNotFound && (
				<p className="not-found">Brisbane postcode not found</p>
			)}
			{suburbList.length > 0 && (
				<div className="suburb-list-container">
					<ul>
						{suburbList.map((item, index) => {
							return (
								<li key={`suburb-${index}`}>
									<button
										id={`suburb-button-${index}`}
										className="suburb-button"
										value={item}
										onClick={(e) => handleClick(e)}
									>
										{item}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
