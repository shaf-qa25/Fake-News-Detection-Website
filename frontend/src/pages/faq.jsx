import React, { useState } from "react";
import ComplexFooter from "./footer";

const faqs = [
    {
        question: "What is the Fake News Detector?",
        answer:
            "It's a web-based platform that checks the credibility of online news using a trained AI model and verified databases.",
    },
    {
        question: "How accurate are the results?",
        answer:
            "Our model is in development, and while it shows strong accuracy on tested data, we encourage users to review results critically.",
    },
    {
        question: "Who built this platform?",
        answer:
            "We are a group of second-year students from [Your College Name], working on this as our academic project.",
    },
    {
        question: "Can I trust the results completely?",
        answer:
            "This tool provides a probability-based result — it should be used as a reference, not as the final authority.",
    },
    {
        question: "How can I contribute or give feedback?",
        answer:
            "You can share your suggestions using our Contact Us form below — we'd love to hear from you!",
    },
    {
        question: "Is my data safe?",
        answer:
            "Yes. We do not share any text entered in the detector. All analysis is performed securely.",
    },
];

const FaqPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative w-full min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-20 px-4">
                <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
                    Frequently Asked Questions
                </h1>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-medium text-gray-800">
                                    {faq.question}
                                </span>
                                <span className="text-indigo-600 font-bold text-xl">
                                    {openIndex === index ? "▲" : "▼"}
                                </span>

                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 border-t border-gray-200 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <ComplexFooter/>
        </div>
    );
};

export default FaqPage;
