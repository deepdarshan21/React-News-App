import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Lifestyle = () => {
    return (
        <div>
            <NavBar />
            <h2>Science</h2>
            <NewsList api="science" isSearch="false" search="" />
        </div>
    );
};

export default Lifestyle;
