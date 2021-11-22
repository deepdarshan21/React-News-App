import NavBar from "../NavBar";
import NewsList from "../NewsList";

const Business = () => {
    return (
        <div>
            <NavBar />
            <h2>Business</h2>
            <NewsList api="business" isSearch="false" search="" />
        </div>
    );
};

export default Business;
