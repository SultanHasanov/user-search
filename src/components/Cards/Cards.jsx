import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cards.scss";
import star from "./star.svg";
import glaz from "./glaz.svg";

import { removeCard } from "../../features/cardsSlice";

const Cards = () => {
  const { repositories } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const deleteCard = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div id="wrapper-card" class="row row-cols-3">
      {repositories.map((item) => (
        <div key={item.id} id="card" className="col-lg-4 col-md-6">
          <button onClick={() => deleteCard(item.id)} className="btn">
            X
          </button>
          <div id="card-body" className="container">
            <span>
              <a href={item.html_url} target="_blank">
                {item.name}
              </a>
            </span>
            <div className="col">
              <img className="icon" src={item.owner.avatar_url} alt="" />
              <a href={item.owner.html_url} target="_blank">
                {item.owner.login}
              </a>
            </div>
            <div className="row">
              <div className="col">
                <img className="icon" src={star} alt="" />
                <span>{item.stargazers_count}</span>
              </div>
              <div className="col">
                <img className="icon" src={glaz} alt="" />
                <span>{item.watchers}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
