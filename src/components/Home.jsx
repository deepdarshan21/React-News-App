import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Home = () => {
    return (
        <div>
            <NavBar />
            <h2>Top Headlines</h2>
            <NewsList api="" />
        </div>
    );
};

export default Home;
