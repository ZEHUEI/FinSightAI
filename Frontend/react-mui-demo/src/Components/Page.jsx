import React from "react";
import { useMediaQuery } from "react-responsive";
import MuiTypography from "./MuiTypography";

const DesktopDetailedGrid = () => (
  <div>
    <div className="p-4 border border-dashed border-green-500 rounded text-green-400">
      [Desktop Detailed Grid View] - Perfect for large MUI Data Grids & charts.
    </div>

    <div className="mt-8 p-4 bg-zinc-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">
        Institutional User Authentication Gateway
      </h2>
      <p className="text-sm text-gray-400">
        Secure biometric and multi-factor session access to your cached stock
        collections.
      </p>
    </div>

    {/* 3. Market Charts Section (yfinance Data API) */}
    <div className="mt-6 p-4 bg-zinc-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">
        Real-Time Asset Market Analytics (yfinance Engine)
      </h2>
      <p className="text-sm text-gray-400">
        Interactive multi-timeline performance metric graphs pulled natively
        from the free yfinance API wrapper.
      </p>
    </div>

    {/* 4. Transaction Simulator Section */}
    <div className="mt-6 p-4 bg-zinc-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">
        Risk-Mitigated Asset Buy / Sell Simulator
      </h2>
      <p className="text-sm text-gray-400">
        Simulate spot trades with calculated transactional balances against your
        cached database values.
      </p>
    </div>
  </div>
);

const MobileCompactView = () => (
  <div>
    <div className="p-4 border border-dashed border-blue-500 rounded text-blue-400">
      [Mobile Compact View] - Perfect for stacked MUI Cards.
    </div>

    <div className="mt-8 p-4 bg-zinc-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Quick Login</h2>
      <p className="text-sm text-gray-400">
        Tap to sync your portfolio profile.
      </p>
    </div>

    {/* 3. Market Charts Section (yfinance Data API) */}
    <div className="mt-6 p-4 bg-zinc-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Live Stock Charts</h2>
      <p className="text-sm text-gray-400">Swipe to see price trends.</p>
    </div>

    {/* 4. Transaction Simulator Section */}
    <div className="mt-6 p-4 bg-zinc-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Quick Trade</h2>
      <p className="text-sm text-gray-400">
        Execute mock buy/sell actions instantly.
      </p>
    </div>
  </div>
);

const Page = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="p-6 text-white bg-[#000000] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Porfolio Manager</h1>
      {isMobile ? <MobileCompactView /> : <DesktopDetailedGrid />}

      {/*Practtive */}
      <MuiTypography />
    </div>
  );
};

export default Page;
