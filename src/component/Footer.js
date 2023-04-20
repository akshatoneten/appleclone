import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f7] mt-9 py-5 px-[200px]">
      {/* text */}
      <div className="flex flex-col gap-2 border-b-[1px] border-gray-500 pb-6">
        <p className="text-gray-500 text-[13px] ">
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be eligible
          to trade in for credit or for an Apple Gift Card. Trade-in value may
          be applied toward qualifying new device purchase, or added to an Apple
          Gift Card. Actual value awarded is based on receipt of a qualifying
          device matching the description provided when estimate was made. Sales
          tax may be assessed on full value of a new device purchase. In-store
          trade-in requires presentation of a valid photo ID (local law may
          require saving this information). Offer may not be available in all
          stores, and may vary between in-store and online trade-in. Some stores
          may have additional requirements. Apple or its trade-in partners
          reserve the right to refuse or limit quantity of any trade-in
          transaction for any reason. More details are available from Apple’s
          trade-in partner for trade-in and recycling of eligible devices.
          Restrictions and limitations may apply.
        </p>
        <p className="text-gray-500 text-[13px]">
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings > General >
          Software Update. Tap Download and Install.
        </p>
        <p className="text-gray-500 text-[13px]">
          Available for qualifying applicants in the United States
        </p>
        <p className="text-gray-500 text-[13px]">
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p className="text-gray-500 text-[13px]">
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
        <p className="text-gray-500 text-[13px]">
          A subscription is required for Apple TV+.
        </p>
        <p className="text-gray-500 text-[13px]">
          Major League Baseball trademarks and copyrights are used with
          permission of MLB Advanced Media, L.P. All rights reserved
        </p>
      </div>
      {/* menu links */}
      <div className="grid grid-cols-5 grid-rows-1 text-gray-500 text-[13px]">
        {/*first menu line footer*/}
        <div className="flex flex-col gap-7 py-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              Shop and Learn
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              Apple Wallet
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Wallet</li>
              <li>Apple Card</li>
              <li>Apple Pay</li>
              <li>Apple Cash</li>
            </ul>
          </div>
        </div>
        {/*second menu line footer*/}
        <div className="flex flex-col gap-7 py-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">Account</h5>
            <ul className="flex flex-col gap-2">
              <li>Manage your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              Entertainment
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>Apple Store</li>
            </ul>
          </div>
        </div>
        {/*third menu line footer*/}
        <div className="flex flex-col gap-7 py-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              Apple Store
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple Camp</li>
              <li>Apple Store App</li>
              <li>Certified refurbished</li>
              <li>Apple Trade In</li>
              <li>Financing</li>
              <li>Carrier Deals at Apple</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
        </div>
        {/*fourth menu line footer*/}
        <div className="flex flex-col gap-7 py-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              For Business
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              For Education
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Apple and Education</li>
              <li>Shop for K-12</li>
              <li>Shop for College</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              For Healthcare
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Apple in Healthcare</li>
              <li>Health on Apple Watch</li>
              <li>Health Records on iPhone</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              For Government
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Shop for Government</li>
              <li>Shop for Veterans and Military</li>
            </ul>
          </div>
        </div>
        {/*fifth menu line footer*/}
        <div className="flex flex-col gap-7 py-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              Entertainment
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Podcasts</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[14px] text-gray-700 font-semibold">
              Entertainment
            </h5>
            <ul className="flex flex-col gap-2">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Podcasts</li>
            </ul>
          </div>
        </div>
        {/* menu end */}
      </div>

      <div className="text-gray-500 text-[13px] border-b-[1px] border-gray-500 pb-4">
        <p>More ways to shop: <span className="text-blue-500">Find an Apple Store</span> or <span className="text-blue-500">other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
      </div>

      <div className="text-gray-500 text-[13px] flex justify-between p-2 gap-6">
        <div className="flex gap-10">
            <p>
            Copyright © 2023 @a_b_c_d_e . All rights reserved.
            </p>
            <ul className="flex gap-2 ">
                <li className="border-r-[1px] border-gray-400 pr-2">Privacy Policy</li>
                <li className="border-r-[1px] border-gray-400 pr-2" >Terms of Use</li>
                <li className="border-r-[1px] border-gray-400 pr-2">Sales and Refunds</li>
                <li className="border-r-[1px] border-gray-400 pr-2">Legal</li>
                <li>Site Map</li>
            </ul>
        </div>
        <div>
            <p>United States</p>
        </div>
      </div>













    </div>
  );
};

export default Footer;
