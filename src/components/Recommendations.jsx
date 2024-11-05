import React from "react";
import PropTypes from "prop-types";
import Card from "./ui/Card";

function Recommendations({ articles }) {
  return (
    <article className="py-5 w-full h-fit bg-cover bg-center rounded-lg shadow-md p-5">
      <h1 className="text-xl mb-5 text-center">Recomendaciones según tu estado</h1>
      <ul className="flex flex-col gap-3 py-5">
        {articles.map((article, index) => (
          <li key={index} className="flex">
            <Card>
              <div className="flex gap-3">
                <img src={article.image} alt={article.title} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h2 className="text-lg font-bold">{article.title}</h2>
                  <p className="text-sm">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2 block">
                    Leer más
                  </a>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </article>
  );
}

Recommendations.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Recommendations;
