import axios from 'axios';

import { useState, useEffect } from "react";

function TenorSearch (props: any) {
    
    const [searchResults, setSearchResults] = useState<[]>([]);
    const [imgUrl, setImgUrl] = useState<string>("");

    var passData = props.passData;
    useEffect(() => {
        passData(imgUrl);
    }, [passData, imgUrl]);

    async function executingSearch(term: string) {
        const apikey = "AIzaSyDWFvFcdJM08ooKmAx6d2s_Lkem53DNyJA";
        const clientkey = "Sylvester"
        const limit = 1;

        const search_url = "https://tenor.googleapis.com/v2/search?q=" + term 
                         + "&key=" + apikey + "&client_key=" + clientkey + "&limit=" + limit;

        await axios.get(search_url)
        .then((response) => setSearchResults(response.data.results))
        .catch((error) => console.log(error));
    }

    function searchTenor(s: string) {
        if (s.length === 0) {
            setSearchResults([]);
            setImgUrl("");
        } else {
            executingSearch(s);
        }
    }

    function displayResults(results : [], myUrl = "") {
        if (results.length > 0) {
            for (var result of results) {
                var url = result["media_formats"]["gif"]["url"];
                setImgUsingUrl(url);
                return (
                    <div>
                        <img id="unique_id_12o3987" alt = "" src={ url } />
                    </div>
                )
            }
        } else if (myUrl !== "") {
            return (
                <div>
                    <img id="unique_id_12o3987" alt = "" src={ myUrl } />
                </div>
            )
        }

        return <div></div>
    }

    function setImgUsingUrl(s: string) {
        if (s !== imgUrl) {
            setImgUrl(s);
        }
    }

    return (
        <div>
            <div className="flex flex-col  rounded shadow-md w-full" >
                <input className="p-1 bg-gray-100 mb-2 rounded-md " 
                    placeholder="Enter Search Terms... "
                    onChange = {(e) => searchTenor(e.target.value)}/>
                
                <input className="p-1 bg-gray-100 rounded-md "
                    id = "unique_id_019876091287"
                    placeholder= "(or) Enter Image URL..."
                    value = {imgUrl}
                    onChange = {(e) => setImgUsingUrl(e.target.value)}/>
            </div>
            { displayResults(searchResults, imgUrl) }
        </div>
    )
}

export default TenorSearch;