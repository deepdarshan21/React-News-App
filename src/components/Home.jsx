import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Home = () => {
    return (
        <div>
            <NavBar />
            <h2>Top Headlines</h2>
            <NewsList api="" isSearch="false" search="" />
        </div>
    );
};

export default Home;
