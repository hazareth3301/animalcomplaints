import axios from "axios";

// Get 10,000 records
export default {
	getData: (id) => {
		return axios({
			method: "get",
			url: `https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search?resource_id=${id}&limit=10000`,
			headers: {
				accept: "application/json",
			},
		})
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return `Error: ${error}`;
			});
	},
};
