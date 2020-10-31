import React from "react";

const Form = (): JSX.Element => {
  return (
    <>
      <h2 className="mt-16 mb-4">Tell me more / Request a quote</h2>
      <div className="w-full max-w-xs">
        <form
          method="POST"
          name="iam-contact"
          data-netlify="true"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <input type="hidden" name="form-name" value="iam-contact" />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="your_name"
            >
              Your name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="your_name"
              type="text"
              placeholder="Name yourself, please"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="your@email.address"
            />
            <p className="text-center text-gray-500 text-xs italic">
              Please specify your email.
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone #
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="+123-456-7890"
            />
            <p className="text-center text-gray-500 text-xs italic">
              Please specify your phone number.
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="textarea"
              placeholder="Your message comes here ..."
            />
            <p className="text-center text-gray-500 text-xs italic">
              Please enter your message.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          Thank you for submitting ...
        </p>
      </div>
    </>
  );
};

export default Form;
