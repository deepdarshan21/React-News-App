import "../css/Article.css";

const Article = (props) => {
    const { image, headLine, newsDescription } = props;
    return (
        <div className="article">
            <div>
                <img src={image} alt="News" className="article-image" />
            </div>
            <div className="article-content">
                <h3 className="article-heading">{headLine}</h3>
                <p className="article-description">
                    {newsDescription}
                    {/* <spam className="">
                        <a href="#">...Read More</a>
                    </spam> */}
                </p>
            </div>
        </div>
    );
};
export default Article;
