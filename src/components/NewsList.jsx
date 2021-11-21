import { useEffect, useState } from "react";
import Axios from "axios";
import Article from "./Article";
// import "../css/NewsList.css";

const Content = (props) => {
    const apiKey="4a9c1e40430d47c5b3ab3a58b85ae6dd";

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        let api;
        if(!(props.isSearch==="true")){
            api= `https://newsapi.org/v2/top-headlines?country=in&category=${props.api}&apiKey=${apiKey}`;
            console.log("Yes");
        }
        else{
            api = `https://newsapi.org/v2/everything?q=${props.search}&from=2021-11-20&to=2021-11-20&sortBy=popularity&apiKey=${apiKey}`;
            console.log("No");
            console.log(props.search);
        }
        const getArticles = async () => {
            const res = await Axios.get(api);
            setArticles(res.data.articles);
        };
        getArticles();
    }, []);

    return (
        <div>
            {articles.map(({ urlToImage, title, description }) => (
                <Article
                    image={urlToImage}
                    headLine={title}
                    newsDescription={description}
                />
            ))}
        </div>
    );
};

export default Content;
