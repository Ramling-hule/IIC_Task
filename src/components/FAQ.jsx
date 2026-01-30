import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is the team size limit?", answer: "You can form a team of 2 to 4 members. Solo participation is allowed but not recommended for the 36h duration." },
    { question: "Is food and accommodation provided?", answer: "Yes! We provide meals, snacks, and coffee throughout the event. Sleeping areas (bean bags/mattresses) are available at the venue." },
    { question: "Who owns the IP of the project?", answer: "You do. The team retains full ownership of whatever they build during the hackathon." },
    { question: "Can I use pre-built templates?", answer: "No. You can use open-source libraries, but the core code must be written during the event. Pre-built projects will be disqualified." },
    { question: "Is there a registration fee?", answer: "Registration is completely free. Just bring your laptop and valid college ID." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-cyber text-4xl font-bold mb-12 text-center uppercase tracking-widest">
          Tech Fest <span className="text-green-500">FAQ</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border transition-all duration-300 rounded-lg overflow-hidden ${
                openIndex === i ? "border-green-500 bg-zinc-900" : "border-zinc-800 bg-transparent hover:border-zinc-600"
              }`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-cyber text-lg ${openIndex === i ? "text-green-400" : "text-gray-200"}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? "rotate-45 text-green-500" : "text-gray-500"}`}>
                  +
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 font-code text-gray-400 text-sm leading-relaxed border-t border-dashed border-zinc-700 mt-2">
                  &gt; {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;