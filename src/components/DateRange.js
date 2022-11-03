import React from "react";
import { getData } from "../functions/getData";
import { useDispatch } from "react-redux";
import { updateData } from "../redux/data";

export default function DateRange() {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const dateRange = e.target.value;
		let newDateRange = "";

		switch (dateRange) {
			case "jul-sep-2022":
				newDateRange = "7b00dd2f-a73a-4674-8d50-4e77bded2dd4";
				break;
			case "apr-jun-2022":
				newDateRange = "430c75dc-35db-4dde-926e-8c1b7d0dc33f";
				break;
			case "jan-mar-2022":
				newDateRange = "e0e0f49d-ce70-4721-b5f9-ecaafc493b5c";
				break;
			case "oct-dec-2021":
				newDateRange = "fe3e8008-d015-4da0-92cb-5ac8b69d020c";
				break;
			case "jul-sep-2021":
				newDateRange = "929ad3b8-ac1b-459c-abb9-eae7849b22e4";
				break;
			// case "apr-jun-2021":
			// 	newDateRange = "e5b0102b-b573-4c90-8e97-beb605998548";
			// 	break;
			// case "jan-mar-2021":
			// 	newDateRange = "8b5eb983-2c99-4a72-8b1f-d757a3182bc5";
			// 	break;
			default:
				alert("Date range could not be found.");
				break;
		}

		const newData = getData(newDateRange);
		newData.then((result) => {
			dispatch(updateData(result));
		});
	};
	return (
		<div className="date-range-container">
			<h2>Select date range</h2>
			<select onChange={(e) => handleChange(e)}>
				<option value="jul-sep-2022">Jul&ndash;Sep 2022</option>
				<option value="apr-jun-2022">Apr&ndash;Jun 2022</option>
				<option value="jan-mar-2022">Jan&ndash;Mar 2022</option>
				<option value="oct-dec-2021">Oct&ndash;Dec 2021</option>
				<option value="jul-sep-2021">Jul&ndash;Sep 2021</option>
				{/* <option value="apr-jun-2021">Apr&ndash;Jun 2021</option>
				<option value="jan-mar-2021">Jan&ndash;Mar 2021</option> */}
			</select>
		</div>
	);
}
