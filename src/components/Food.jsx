import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Food = () => {
    return (
        <div>
            <NavBar />
            <h2>Food</h2>
            <NewsList api="health" />
        </div>
    );
};

export default Food;
