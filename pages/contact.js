import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NextSeo } from "next-seo";

function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    function resetForm() {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }

    setSubmitted(true);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Successfully Sent!");
      } else {
        toast.error("This didn't work. Please try again later.");
      }
      resetForm();
    });
  }

  const SEO = {
    title: "Contact - Stephen Rutherford",
    description: "How to get in touch with me.",
    openGraph: {
      title: "Contact - Stephen Rutherford",
      description: "How to get in touch with me.",
    },
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-18rem)]">
      <NextSeo {...SEO} />

      <div className="prose">
        <h1>Contact Me</h1>
        <p className="">
          Please use the contact form below and I will reply back to you as soon
          as possible.
        </p>
        <p>
          Alternatively, you can message me on{" "}
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank">
            LinkedIn
          </a>{" "}
          as well.
        </p>
        <form action="submit" method="POST" onSubmit={handleOnSubmit}>
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
                  type="text"
                  required
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  required
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Your Message</span>
                <textarea
                  required
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows="3"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </label>

              <button
                type="submit"
                disabled={submitted ? true : false}
                className="text-white bg-purple-600 hover:bg-blue-500 rounded-lg px-5 py-2.5 text-center mb-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {submitted ? "Processing..." : "Submit"}
              </button>
              <Toaster position="top-center" reverseOrder={false} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contact;
