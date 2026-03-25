export default function GetHelp() {
  return (
    <main className="pt-24 pb-12 px-4 flex justify-center">

      {/* CARD */}
      <div className="w-full max-w-xl bg-gray-100 p-6 md:p-8 rounded-2xl shadow-md">

        {/* TITLE */}
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Send Us Your Query
        </h1>

        {/* FORM */}
        <input type="hidden" name="_next" value="https://empathyseeds.com/thank-you" />
        <form
          action="https://formspree.io/f/xrezdjay"
          method="POST"
          className="space-y-4"
        >

          {/* CHILD NAME */}
          <input
            type="text"
            name="Child Name"
            placeholder="Child Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* CHILD AGE */}
          <input
            type="number"
            name="Child Age"
            placeholder="Child Age"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* GENDER */}
          <select
            name="Gender"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Child Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="Query"
            rows={4}
            placeholder="Type your Query"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>
      </div>

    </main>
  );
}