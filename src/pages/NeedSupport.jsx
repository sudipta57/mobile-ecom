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
    <div className="max-w-[1500px] mx-auto py-20 md:py-0">
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-10 md:space-y-0 min-h-screen p-6">
        {/* Left Section: FAQs */}
        <div className="flex-1">
          <h1 className="text-[40px] font-[600] font-poppins text-[#191C1F] mb-16">
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
                  className={`w-full text-left text-[23.68px] font-[500] font-publicSans text-[#191C1F] px-4 py-3 flex justify-between items-center ${
                    open === index
                      ? "bg-orange-500 text-white"
                      : " text-gray-800"
                  }`}
                >
                  {faq.question}
                  <span className="text-xl">
                    {open === index ? (
                      <i class="fa-solid fa-minus text-[#77878F]"></i>
                    ) : (
                      <i class="fa-solid fa-plus text-[#77878F]"></i>
                    )}
                  </span>
                </button>
                {open === index && (
                  <div
                    className="bg-white px-4 py-3"
                    style={{
                      boxShadow: " 0px 10.53px 52.63px 0px #0000001F",
                    }}
                  >
                    <p className="text-[#475156] text-[18.42px] font-[400] font-publicSans">
                      {faq.answer}
                    </p>
                    {faq.points && (
                      <ul className="list-disc pl-5 mt-7">
                        {faq.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-[#475156] text-[18.42px] font-[400] font-publicSans my-2"
                          >
                            {point}
                          </li>
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
        <div className="flex-1 max-w-sm bg-[#FBF4CE] p-6 rounded-lg shadow-md">
          <h2 className="text-[#191C1F] text-[20.78px] font-[500] font-poppins mb-4">
            Don’t find your answer? Ask for support.
          </h2>
          <p className="text-[#475156] text-[18.7px] font-[400] font-poppins mb-4">
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
              className="bg-[#FA8232] text-white px-4 py-2 rounded-[3px] hover:bg-orange-600 transition flex items-center justify-center space-x-2"
            >
              <p>SEND MESSAGE</p>
              <img src="/home/right-arrow.png" alt="right-arrow" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
