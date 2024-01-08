import React from "react";

const questionAnswer = [
  {
    title: "How can I install this?",
    describtion:
      "Flypro camera is an optical for instrument for recording capturing more images, may be transmitted to another location, or both. The images may be individual the best camera in the world for photographs.",
  },
  {
    title: "How can I buy Flypro Y6 pro camera online?",
    describtion:
      "Flypro camera is an optical for instrument for recording capturing more images, may be transmitted to another location, or both. The images may be individual the best camera in the world for photographs.",
  },
  {
    title: "How can I manage my tasks?",
    describtion:
      "Flypro camera is an optical for instrument for recording capturing more images, may be transmitted to another location, or both. The images may be individual the best camera in the world for photographs.",
  },
  {
    title: "How to create a reminder?",
    describtion:
      "Flypro camera is an optical for instrument for recording capturing more images, may be transmitted to another location, or both. The images may be individual the best camera in the world for photographs.",
  },
];

function FrequentlyQuestion() {
  return (
    <section>
      <div className="container md:my-20 my-[60px]">
        <h2 className="text-center mb-2.5">Frequently asked questions?</h2>
        <p className="text-center mb-14">
          Flypro camera is an optical instrument for capturing super images.
        </p>
        <div className="grid md:grid-cols-2 gap-[30px]">
          {questionAnswer.map(({title, describtion}, index) => (
            <div key={index}>
              <div className="flex gap-1.5 mb-2.5">
                <span className="text-lg font-semibold text-gray-900">
                  {index + 1 + "."}
                </span>
                <h3>{title}</h3>
              </div>
              <p>{describtion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrequentlyQuestion;
