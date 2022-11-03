import { useState, useEffect } from "react";
import { getData } from "./functions/getData";
import { useDispatch } from "react-redux";
import { updateData } from "./redux/data";
import Header from "./components/Header";
import "./scss/styles.scss";
import DateRange from "./components/DateRange";
import Search from "./components/Search";
import CardContainer from "./components/CardContainer";

function App() {
	const [data, setData] = useState(undefined);
	const dispatch = useDispatch();

	// Jul - Sep 2022 Resource ID data
	const initialResourceId = "7b00dd2f-a73a-4674-8d50-4e77bded2dd4";

	useEffect(() => {
		const bbcData = getData(initialResourceId);
		bbcData.then((result) => {
			setData(result);
			dispatch(updateData(result));
		});
	}, []);

	return (
		<div className="App">
			<Header records={data !== undefined ? data.result.records.length : 0} />
			<main>
				<DateRange />
				<Search />
				<CardContainer />
			</main>
		</div>
	);
}

export default App;
