import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Business = () => {
    return (
        <div>
            <NavBar />
            <h2>Business</h2>
            <NewsList api="business" />
        </div>
    );
};

export default Business;
