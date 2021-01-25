import axios from "axios";

export default function Table() {

    const backendURL = "http://localhost:5000"

    axios.get(backendURL+"/scrape")
    .then(function (response) {
        console.log(response);
    })
    
    return ()
}