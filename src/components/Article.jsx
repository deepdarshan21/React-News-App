import "../css/Article.css";

const Article = (props) => {
    const { image, headLine, newsDescription, url } = props;
    return (
        <div className="article">
            <div>
                <img src={image} alt="News" className="article-image" />
            </div>
            <div className="article-content">
                <h3 className="article-heading">{headLine}</h3>
                <h6 className="article-description">{newsDescription}</h6>
                <a className="whole" href={url}>
                    ...Read More
                </a>
            </div>
        </div>
    );
};
export default Article;
