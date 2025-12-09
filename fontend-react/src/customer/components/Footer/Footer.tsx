import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-200 py-8 px-4 mt-10">
      <div className="container mx-auto">
        {/* Top section */}
        <div className="mb-8">
          <h1 className=" font-audiowide text-4xl font-bold mb-4 text-[#a700fc]">Hotshop</h1>

          <h2 className="text-2xl font-bold mb-4 text-white">OUR PROMISE</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Support section */}
            <div>
              <h2 className="font-semibold mb-2 text-white">SUPPORT</h2>
              <p className="text-sm mb-4 text-gray-300">Contact our Shows Delivery</p>
              <p className="text-sm font-semibold text-white">NO: SECURE TRANSACTION</p>
              <p className="text-sm text-gray-300">Secure SSL encryption</p>
              <p className="text-sm mt-2 text-gray-300">No Cost EMI Available*</p>
            </div>

            {/* Services section */}
            <div>
              <h2 className="font-semibold mb-2 text-white">OUR SERVICES</h2>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">HotShop for Schools</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">HotShop for Corporate</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">HotShop for Sport Clubs</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">HotShop Gift Cards</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Installation & Assembly Services</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Affiliate Program</li>
              </ul>
            </div>

            {/* About section */}
            <div>
              <h2 className="font-semibold mb-2 text-white">ABOUT US</h2>
              <p className="text-sm mb-2 text-gray-300">Easy Returns*</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Who we are</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Careers</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Made In India</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Social Initiatives</li>
              </ul>
              <p className="text-sm mt-4 text-gray-300">1 million+ Happy Customers</p>
            </div>

            {/* Legal section */}
            <div>
              <h2 className="font-semibold mb-2 text-white">LEGAL</h2>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Return Policy</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Terms and Conditions</li>
                <li className="text-sm text-gray-300 hover:text-white cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle section */}
        <div className="mb-8">
          <h2 className="font-semibold mb-4 text-white">EXPERIENCE HOTSHOP APP ON MOBILE</h2>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button className="bg-white text-slate-900 px-4 py-2 rounded font-medium hover:bg-gray-200 transition">
              VISUAL USE
            </button>
            <button className="bg-white text-slate-900 px-4 py-2 rounded font-medium hover:bg-gray-200 transition">
              APP SHOW
            </button>
          </div>

          <h3 className="font-semibold mb-2 text-white">FOLLOW US</h3>
          <h3 className="font-semibold mt-4 text-white">SPORT ADVICE FOR YOU</h3>
        </div>

        {/* Children sports section */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-white">CHILDREN SPORTS EVENTS MEAN YOU</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-white">Name</th>
                <th className="text-left py-2 text-white">Location</th>
                <th className="text-left py-2 text-white">Date</th>
                <th className="text-left py-2 text-white">Signature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 border-b border-gray-700"></td>
                <td className="py-2 border-b border-gray-700"></td>
                <td className="py-2 border-b border-gray-700"></td>
                <td className="py-2 border-b border-gray-700"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom section */}
        <div className="text-center pt-4 border-t border-gray-700">
          <h3 className="font-semibold mb-2 text-white">SECURITY AND PROFESSIONAL</h3>
          <p className="text-sm text-gray-400">© 2025 HotShop Sports India Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;