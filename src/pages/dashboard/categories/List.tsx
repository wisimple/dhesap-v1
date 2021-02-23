import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const List = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <div className="row end-xs">
        <Link to={`${url}/create`} className="btn btn--primary">
          <i className="ri-add-line"></i> Kategori Oluştur
        </Link>
      </div>

      {["Ali", "Ulasim", "Elektronik", "Ev"].map((cat) => (
        <div className="card">
          <div className="row between-xs middle-xs">
            <i className="ri-drag-move-2-line ri-xl"></i>
            <span className="col-xs">{cat}</span>

            <Link to={`${url}/id`} className="btn btn--primary">
              Ayrıntılar
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
