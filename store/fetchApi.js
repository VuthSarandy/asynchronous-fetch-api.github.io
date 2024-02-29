const URL = "http://127.0.0.1:5500/data/";
export const fetchData = async function fetchData(endPoint) {
    try {
        const res = await fetch(URL + endPoint + ".json");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
