import React from "react";

const TermsConditionsTitle = ({ content }) => {
  return <h1 className="uppercase text-2xl font-bold mt-10">{content}</h1>;
};

const TermsConditionsSubTitle = ({ content }) => {
  return <h2 className="font-bold text-xl mt-10">{content}</h2>;
};

const TermsConditionsParagraph = ({ content }) => {
  return <p className="mt-4">{content}</p>;
};

function TermsConditions() {
  return (
    <div className="w-full h-auto flex flex-col f-center mt-32">
      <div className="w-[60%] mb-32">
        <h1 className="uppercase text-3xl font-bold">
          AGREEMENT TO OUR LEGAL TERMS
        </h1>
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsTitle content="1. our services" />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsTitle content="2. Lorem ipsum dolor sit" />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsSubTitle content="Lorem Ipsum" />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
        <TermsConditionsParagraph
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a est
          eligendi commodi. Dolore doloremque perspiciatis facilis dolorem,
          recusandae illum sapiente adipisci soluta porro quas dicta ad
          blanditiis vitae natus."
        />
      </div>
    </div>
  );
}

export default TermsConditions;
