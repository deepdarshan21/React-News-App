import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Sports = () => {
    return (
        <div>
            <NavBar />
            <h2>Sports</h2>
            <NewsList api="sports" />
        </div>
    );
};

export default Sports;
