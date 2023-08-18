import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button type="button" className="btn">
                  <FontAwesomeIcon icon={faLocationDot} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
