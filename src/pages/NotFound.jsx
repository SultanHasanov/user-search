import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound-body">
      <h1>
        Ничего не найдено <span>😕</span>
      </h1>
      <h1>
        Перейдите на главную
        <Link to="/">
          <span>страницу</span>
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
