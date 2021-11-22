import NavBar from "../NavBar";
import NewsList from "../NewsList";
// import { useLocation } from "react-router-dom";

const SearchResult = () => {
    const search = new URLSearchParams(window.location.search);
    console.log(search);
    const name = new URLSearchParams(search).get("search");
    console.log(name);
    return (
        <div>
            <NavBar />
            <h2>Search Results</h2>
            <NewsList isSearch="true" search={name} />
        </div>
    );
};

export default SearchResult;
