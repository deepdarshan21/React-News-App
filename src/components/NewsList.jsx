import { useEffect, useState } from "react";
import Axios from "axios";
import Article from "./Article";

const Content = (props) => {
    // console.log(process.env);
    const apiKey = "6a1d4f2afd3b4379bd04f56e72a8bb6d";
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        let api;
        if (!(props.isSearch === "true")) {
            api = `https://newsapi.org/v2/top-headlines?country=in&category=${props.api}&apiKey=${apiKey}`;
            console.log("Yes");
        } else {
            api = `https://newsapi.org/v2/everything?q=${props.search}&from=2021-11-20&to=2021-11-20&sortBy=popularity&apiKey=${apiKey}`;
            console.log("No");
            console.log(props.search);
        }
        const getArticles = async () => {
            const res = await Axios.get(api);
            setArticles(res.data.articles);
        };
        getArticles();
    }, [props.api, props.isSearch, props.search]);

    return (
        <div>
            {articles.map(({ urlToImage, title, description, url }) => (
                <Article
                    image={urlToImage}
                    headLine={title}
                    newsDescription={description}
                    url={url}
                />
            ))}
        </div>
    );
};

export default Content;
