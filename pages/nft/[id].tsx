const NFTDropPage = () => {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="select-none bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl">
            <img
              draggable={false}
              src="https://links.papareact.com/8sg"
              alt="nftImage"
              className="w-44 p-2 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>

          <div className="select-none p-5 text-center space-y-2">
            <h1 className="text-4xl text-white font-bold">BEAST NEILU</h1>
            <h2 className="text-xl text-gray-300">
              A Collection of Beasts Committed to the Grind
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className=" lg:col-span-6 flex border-2 flex-1 flex-col p-12">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 sm:w-80 select-none font-extralight cursor-pointer text-xl">
            <span className="font-extrabold underline decoration-purple-600/50">
              NEILU
            </span>{" "}
            NFT MARKET PLACE
          </h1>
          <button
            draggable={false}
            className="rounded-full bg-purple-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base select-none"
          >
            Sign In
          </button>
        </header>
        <hr className="my-2 border" />

        {/* Content */}
        <div className="mt-10 select-none flex flex-col flex-1 items-center text-center lg:space-y-0 space-y-6 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            draggable={false}
            src="https://links.papareact.com/bdy"
            alt="nftGallery"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            Bring Out Your Inner Beast | Neilu NFT DROP
          </h1>

          <p className="pt-2 text-xl text-green-500">10 / 20 NFT's claimed</p>
        </div>
        <button className="h-16 w-full bg-blue-600 text-white rounded-full mt-10">
          Mint NFT (0.001 ETH)
        </button>
      </div>
    </div>
  )
}
export default NFTDropPage
