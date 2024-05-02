import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import googleFoto from "../images/googlefoto.png";
import elfsightLogo from "../images/elfsight.png";

const ReviewsPattern = ({ h2, p, id, textColor }) => {
  return (
    <section
      className={`w-[24%] text-center flex flex-col justify-center ${textColor}`}
    >
      <div className="flex justify-center mb-2">
        {/*<img src={src} alt={alt} className="w-auto h-12 mr-2" />*/}
        <h2 id={id} className="font-bold text-5xl">
          {h2}
        </h2>
      </div>
      <p className="font-normal">{p}</p>
    </section>
  );
};

const Reviews = ({ textColor }) => {
  return (
    <section className="flex justify-evenly h-4/6">
      <ReviewsPattern
        h2="5.00"
        p="Our service has received top ratings from hundred of satisfied
                  customers."
        id="review-first-section"
        textColor={textColor}
      />
      <ReviewsPattern
        h2={"#1"}
        p="The service provided by Wimple is considered the best in the
                  Industry."
        id="review-second-section"
        textColor={textColor}
      />
      <ReviewsPattern
        h2={"99%"}
        p="Customers are satisfied with fine service."
        id="review-third-section"
        textColor={textColor}
      />
    </section>
  );
};

const CommentReviewsPattern = ({
  userName,
  time,
  comment,
  paragraphHigh,
  readmMoreDisplay,
}) => {
  const [paragraphHighState, setParagraphHighState] = useState(paragraphHigh);
  const [readMoreButtonContent, setReadMoreButtonContent] =
    useState("Read more");

  const handleReadMoreButtonClick = () => {
    paragraphHighState != "h-full"
      ? setParagraphHighState("h-full")
      : setParagraphHighState("h-[4.5rem]");

    readMoreButtonContent != "Read more"
      ? setReadMoreButtonContent("Read more")
      : setReadMoreButtonContent("Hide");
  };

  return (
    <div className="bg-white max-w-[22%] basis-1/4 h-auto max-h-full tablet:min-h-full tablet:min-w-full rounded-md">
      <div className="p-4 flex flex-col gap-1 justify-around h-full">
        <div className="flex">
          <div className="bg-slate-600 rounded-full w-11 h-11"></div>
          <div className="flex flex-col items-start ml-3">
            <p className="text-sm">{userName}</p>
            <p className="font-normal text-sm">{time}</p>
          </div>
        </div>
        <div className="flex justify-start mt-3">
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
        </div>
        <div className="text-start mt-2">
          <p className={`font-normal overflow-hidden ${paragraphHighState}`}>
            {comment}
          </p>
          <button
            className={`hover:underline font-normal text-sm text-slate-400 ${readmMoreDisplay}`}
            onClick={handleReadMoreButtonClick}
          >
            {readMoreButtonContent}
          </button>
        </div>
        <div>
          <img src={googleFoto} alt="posted on google photo" />
        </div>
      </div>
    </div>
  );
};

const CommentReviewsSection = () => {
  return (
    <div className="bg-slate-100 rounded-xl w-8/12 h-auto flex flex-col items-evenly p-6">
      <div className="w-full h-4/6 flex items-start justify-evenly tablet:overflow-hidden">
        <CommentReviewsPattern
          userName="User_1"
          time="1 month ago"
          comment="excellent service would recommend. Received my car on time"
          paragraphHigh="h-[4.5rem]"
          readmMoreDisplay="hidden"
        />
        <CommentReviewsPattern
          userName="User_2"
          time="1 month ago"
          comment="Definitely recommend. 5-star business. Will look forward to do business in the future again."
          paragraphHigh="h-[4.5rem]"
          readmMoreDisplay="hidden"
        />
        <CommentReviewsPattern
          userName="User_3"
          time="2 month ago"
          comment="Good and reliable business, I got my car as I expected timely , friendly people, thank you."
          paragraphHigh="h-[4.5rem]"
          readmMoreDisplay="hidden"
        />
        <CommentReviewsPattern
          userName="User_4"
          time="3 month ago"
          comment="I just had my first experience with this company and I must say the people here are some of the friendliest I've ever encountered! They were polite and communicated really well, making everything super easy and stress free. Working with Wimple was awesome. Thank you"
          paragraphHigh="h-[4.5rem]"
        />
      </div>
      <div className="flex w-full f-center mt-5">
        <div className="bg-slate-200 flex ft-center rounded-xl px-3 py-[0.8rem] max-h-6 max-w-44">
          <img
            src={elfsightLogo}
            alt="elfsight logo"
            className="max-w-6 max-h-6"
          />
          <p className="text-[0.8rem] text-slate-500">Free Reviews widget</p>
        </div>
      </div>
    </div>
  );
};

export { CommentReviewsSection };
export default Reviews;
