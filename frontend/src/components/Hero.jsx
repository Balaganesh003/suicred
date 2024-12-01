import { useNavigate } from "react-router";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <div className="max-h-screen overflow-hidden bg-[radial-gradient(100%_100%_at_50%_0,rgba(0,122,255,.7)_0,transparent_100%)] bg-black  text-white ">
      <div className="container max-w-[1080px] mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Reputation Layer
              <br />
              for Sui
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300">
              Designed for users to access and take advantage of their wallet history
            </p>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300">
              Utilized by BUIDLers to grow faster by engaging and incentivizing genuine contributors and early adopters
            </p>

            <button onClick={() => navigate('/dashboard')} className="bg-gray-900/60 hover:bg-gray-900/80 text-white px-8 py-4 rounded-lg text-lg transition-colors duration-200 backdrop-blur-sm">
              Check your Reputation Score
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
