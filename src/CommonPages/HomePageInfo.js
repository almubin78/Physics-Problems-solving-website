import React from "react";

const HomePageInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* শিরোনাম */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Phy&Tech-এ স্বাগতম
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          পদার্থবিজ্ঞানের সমস্যার সমাধান, একক রূপান্তর এবং সূত্র অনুসন্ধানের জন্য
          একটি সহজ ও নির্ভরযোগ্য প্ল্যাটফর্ম।
        </p>

        {/* বৈশিষ্ট্য সমূহ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* বৈশিষ্ট্য ১: একক রূপান্তর */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-blue-500 mb-4">🧮</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              একক রূপান্তর
            </h2>
            <p className="text-gray-600">
              সময়, দূরত্ব, বেগ ও শক্তির একক সহজেই পরিবর্তন করতে পারবে।
            </p>
          </div>

          {/* বৈশিষ্ট্য ২: সূত্র ভিত্তিক সমস্যার সমাধান */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-green-500 mb-4">📐</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              সূত্র ভিত্তিক সমস্যার সমাধান
            </h2>
            <p className="text-gray-600">
              পরিচিত সূত্র ব্যবহার করে ধাপে ধাপে পদার্থবিজ্ঞানের সমস্যা সমাধান করতে পারবে।
            </p>
          </div>

          {/* বৈশিষ্ট্য ৩: সূত্র অনুসন্ধান */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-purple-500 mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              সূত্র অনুসন্ধান
            </h2>
            <p className="text-gray-600">
              প্রশ্নে উল্লেখিত মান প্রবেশ করাও  আর সমাধানের জন্য সঠিক সূত্র খুঁজে বের কর 😎।
            </p>
          </div>
        </div>

        {/* যোগাযোগ বিভাগ */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help? যোগাযোগ কর!
          </h2>
          <p className="text-gray-600 mb-6">
            যদি তোমার সাহায্যের প্রয়োজন হয়, তাহলে নির্দ্বিধায় যোগাযোগ কর। 
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:your-email@example.com"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              📧 ইমেইল করুন
            </a>
            <a
              href="tel:+8801701906543"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              📞 কল করুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageInfo;
