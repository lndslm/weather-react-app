import React from "react";

/*import "./Search.css";*/

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="search-engine">
          <div className="card-body">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  name="city"
                  className="city-name"
                  placeholder="Enter city name"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <button type="button" className="btn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button type="button" className="btn">
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
