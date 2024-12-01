import { ConnectButton } from "@mysten/dapp-kit";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-gray-800 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-white tracking-wide">
            Web3 Dashboard
          </a>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-6">
            {/* Dashboard Button */}
            <button className="text-gray-300 hover:text-white px-6 py-2 transition-all duration-200 rounded-md bg-white/10 hover:bg-white/20">
              Dashboard
            </button>

            {/* Profile Button */}
            <button className="text-gray-300 hover:text-white px-6 py-2 transition-all duration-200 rounded-md bg-white/10 hover:bg-white/20">
              Profile
            </button>

            {/* Connect Wallet Button */}
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
