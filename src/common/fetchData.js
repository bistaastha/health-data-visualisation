import { csv } from "d3-fetch";

function fetchData(props) {
    console.log(`/data/${props.cityName}_${props.monthName}_15_16.csv`);
    return csv(`/data/${props.cityName}_${props.monthName}_15_16.csv`).then((data) => (data));
}

export default fetchData;