import React, { useState } from "react";

export default function NeedSupport() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "Suspendisse ultrices pharetra libero sed interdum.",
      answer: `
        Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate.
        Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod.
      `,
      points: [
        "Vivamus sed est non arcu porta aliquet et vitae nulla.",
        "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
        "Proin blandit nunc risus, at semper turpis sagittis nec.",
        "Quisque ut dolor erat.",
      ],
    },
    {
      question: "Quisque quis nunc quis urna tempor lobortis vel non orci.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.",
      answer:
        "Proin ullamcorper turpis ac eros congue, id ultrices mauris scelerisque.",
    },
    {
      question: "Nulla sed sapien maximus, faucibus massa vitae.",
      answer: "Fusce at velit id metus dapibus pretium in non turpis.",
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-8 min-h-screen p-6">
        {/* Left Section: FAQs */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                    open === index
                      ? "bg-orange-500 text-white"
                      : " text-gray-800"
                  }`}
                >
                  {faq.question}
                  <span className="text-xl">{open === index ? "-" : "+"}</span>
                </button>
                {open === index && (
                  <div className="bg-white px-4 py-3 text-gray-700">
                    <p>{faq.answer}</p>
                    {faq.points && (
                      <ul className="list-disc pl-5 mt-3">
                        {faq.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Support Form */}
        <div className="flex-1 max-w-sm bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Don’t find your answer? Ask for support.
          </h2>
          <p className="text-gray-600 mb-4">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
            molestie accumsan dui, non iaculis primis in faucibus.
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message (Optional)"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[200px] bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
