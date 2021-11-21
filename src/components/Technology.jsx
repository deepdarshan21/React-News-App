import NavBar from "./NavBar";
import NewsList from "./NewsList";

const Technology = () => {
    return (
        <div>
            <NavBar />
            <h2>Technology</h2>
            <NewsList api="technology" isSearch="false" search="" />
        </div>
    );
};

export default Technology;
