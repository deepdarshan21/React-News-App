import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Food = () => {
    return (
        <div>
            <NavBar />
            <h2>Food</h2>
            <NewsList api="health" isSearch="false" search="" />
        </div>
    );
};

export default Food;
