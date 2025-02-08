import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ChallengeCard = (props) => {
  return (
    <div className="relative flex w-full  justify-between bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm mr-2 my-3">
      {/* Icon and Title */}
      <div className="flex items-center">
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
          <FontAwesomeIcon icon={props.icon} size="lg" />
        </div>
        <div className="ml-4">
          <h3 className="text-gray-600 text-sm font-medium">{props.title}</h3>
          <div className="mt-1 flex">
            <h2 className="text-2xl font-bold-500 text-gray-900">
              {props.count}
            </h2>
            <span className="flex items-center text-sm">
              <span className="text-blue-600 bg-green-100 rounded-full px-2 py-0.5 font-semibold mr-1">
                ↑ {props.percentage}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Period */}
      <div className="absolute flex top-3 right-3">
        <p className=" text-sm  text-gray-400">{props.period}</p>
        <div className="challenge-time">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="pl-2 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
