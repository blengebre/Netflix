import { useState } from "react";

export function Final() {
    const [mo,setmo]=useState(true)
    const [ba,setba]=useState(false)
    const[stan,setstan]=useState(false)
    const [prem,setprem]=useState(false)
    return (
        <div className="flex flex-col items-center p-8 text-white space-y-8">
            <p className="text-lg">Step 1 of 3</p>
            <h2 className="text-3xl font-bold text-center">
                Choose the plan that is right for you
            </h2>

            <ul className="flex flex-wrap justify-center gap-6 mt-6">
                <li   onClick={() => { setmo(true); setba(false); setstan(false); setprem(false); }} // ✅ This is correct
  className="border border-white p-4 rounded-md text-center w-40 cursor-pointer">
                    <p className="text-xl font-bold">Mobile</p>
                    <p className="text-sm">480p</p>
                </li>

                <li onClick={() => { setmo(false); setba(true); setstan(false); setprem(false); }}  className="border  border-white p-4 rounded-md text-center w-40 cursor-pointer">
                    <p className="text-2xl font-bold">Basic</p>
                    <p className="text-sm">720p</p>
                </li>

                <li onClick={() => { setmo(false); setba(false); setstan(true); setprem(false); }}  className="border border-white p-4 rounded-md text-center w-40 cursor-pointer">
                    <p className="text-2xl font-bold">Standard</p>
                    <p className="text-sm">1080p</p>
                </li>

                <li onClick={() => { setmo(false); setba(false); setstan(false); setprem(true); }}  className="border border-yellow-400 p-4 rounded-md text-center w-40 cursor-pointer bg-yellow-100 text-black">
                    <p className="uppercase text-xs font-bold mb-1">Most Popular</p>
                    <p className="text-2xl font-bold">Premium</p>
                    <p className="text-sm">4K + HDR</p>
                </li>
            </ul>
            {
                mo&&(
                    <>
                    <div className="space-y-3">
      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Monthly price</span>
        <span className="font-bold text-lg">$2.99</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Video and sound quality</span>
        <span>Fair</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Resolution</span>
        <span>480p</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Supported devices</span>
        <span>Mobile phone, tablet</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Devices your household can watch at the same time</span>
        <span>1</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Download devices</span>
        <span>1</span>
      </div>
    </div>

    <div className="text-gray-400 text-sm space-y-3">
      <p>
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our
        <a href="#" className="text-blue-500 underline">Terms of Use</a> for more details.
      </p>
      <p>
        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
      </p>
      <p>
        Live events are included with any Netflix plan and contain ads.
      </p>
    </div>
                    </>
                )
            }
            {
                ba&&(
                    <>
                     <div className="space-y-3">
      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Monthly price</span>
        <span className="font-bold text-lg">$3.99</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Video and sound quality</span>
        <span>Good</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Resolution</span>
        <span>720p</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Supported devices</span>
        <span>Tv,computer,Mobile phone, tablet</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Devices your household can watch at the same time</span>
        <span>1</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Download devices</span>
        <span>1</span>
      </div>
    </div>

    <div className="text-gray-400 text-sm space-y-3">
      <p>
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our
        <a href="#" className="text-blue-500 underline">Terms of Use</a> for more details.
      </p>
      <p>
        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
      </p>
      <p>
        Live events are included with any Netflix plan and contain ads.
      </p>
    </div>
                    </>
                )
            }
            {
                stan&&(
                    <>
                     <div className="space-y-3">
      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Monthly price</span>
        <span className="font-bold text-lg">$7.99</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Video and sound quality</span>
        <span>Great</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Resolution</span>
        <span>1080p</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Supported devices</span>
        <span>Tv,Computer,Mobile phone, tablet</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Devices your household can watch at the same time</span>
        <span>2</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Download devices</span>
        <span>2</span>
      </div>
    </div>

    <div className="text-gray-400 text-sm space-y-3">
      <p>
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our
        <a href="#" className="text-blue-500 underline">Terms of Use</a> for more details.
      </p>
      <p>
        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
      </p>
      <p>
        Live events are included with any Netflix plan and contain ads.
      </p>
    </div></>
                )
            }
            {
                prem &&(
                    <>
                     <div className="space-y-3">
      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Monthly price</span>
        <span className="font-bold text-lg">$9.99</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Video and sound quality</span>
        <span>Best</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Resolution</span>
        <span>4k+HDR</span>
      </div>
      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Spatial Audio</span>
        <span>Included</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Supported devices</span>
        <span> TV,computer,Mobile phone, tablet</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Devices your household can watch at the same time</span>
        <span>4</span>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="font-semibold">Download devices</span>
        <span>6</span>
      </div>
    </div>

    <div className="text-gray-400 text-sm space-y-3">
      <p>
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our
        <a href="#" className="text-blue-500 underline">Terms of Use</a> for more details.
      </p>
      <p>
        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
      </p>
      <p>
        Live events are included with any Netflix plan and contain ads.
      </p>
    </div></>
                )
            }
            <button className="bg-rose-600 text-white font-bold text-3xl py-3 px-13">Next</button>
        </div>
    );
}
