// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import "../css/Search.css"
// import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import { Link } from "react-router-dom";
// import NewsList from "./NewsList";
import TextField from "@mui/material/TextField";


const Search = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <TextField
                value={value}
                onInput={(evt) => setValue(evt.target.value)}
                placeholder="Search..."
            />
            <Link to={`/search=${value}`}>
                <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
            </Link>
        </div>
    );
};

export default Search;

