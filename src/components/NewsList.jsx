import { useEffect, useState } from "react";
import Axios from "axios";
import Article from "./Article";

const Content = (props) => {
    console.log(process.env);
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        let api;
        if (!(props.isSearch === "true")) {
            api = `https://newsapi.org/v2/top-headlines?country=in&category=${props.api}&apiKey=${process.env.REACT_APP_API_KEY}`;
            console.log("Yes");
        } else {
            api = `https://newsapi.org/v2/everything?q=${props.search}&from=2021-11-20&to=2021-11-20&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;
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
