import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { sanityClient, urlFor } from "../../sanity"
import { Collection } from "../../typings"

interface Props {
  collection: Collection
}

const NFTDropPage = ({ collection }: Props) => {
  const connect = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="select-none bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl">
            <img
              draggable={false}
              src={urlFor(collection.previewImage).url()}
              alt="nftImage"
              className="select-none w-44 p-2 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>

          <div className="select-none p-5 text-center space-y-2">
            <h1 className="text-4xl text-white font-bold">
              {collection.nftCollectionName}
            </h1>
            <h2 className="text-xl text-gray-300">{collection.description}</h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className=" lg:col-span-6 flex border-2 flex-1 flex-col p-12">
        {/* Header */}

        <header className="flex items-center justify-between">
          <Link href={"/"}>
            <h1 className="w-52 sm:w-80 select-none font-extralight cursor-pointer text-xl">
              <span className="font-extrabold underline decoration-purple-600/50">
                NEILU
              </span>{" "}
              NFT MARKET PLACE
            </h1>
          </Link>

          <button
            onClick={() => (!address ? connect() : disconnect())}
            draggable={false}
            className="rounded-full bg-purple-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base select-none"
          >
            {!address ? "Connect Wallet" : "Disconnect"}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-blue-400">
            You're logged in with wallet{" "}
            {address.substring(0, 5) +
              "..." +
              address.substring(address.length - 5)}{" "}
          </p>
        )}

        {/* Content */}
        <div className="select-none mt-10 flex flex-col flex-1 items-center text-center lg:space-y-0 space-y-6 lg:justify-center">
          <img
            className="select-none w-80 object-cover pb-10 lg:h-40"
            draggable={false}
            src={urlFor(collection.mainImage).url()}
            alt="nftGallery"
          />
          <h1 className="select-none text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {collection.title}
          </h1>

          <p className="select-none pt-2 text-xl text-green-500">
            10 / 20 NFT's claimed
          </p>
        </div>
        <button
          draggable={false}
          className="select-none h-16 w-full bg-blue-600 text-white rounded-full mt-10"
        >
          Mint NFT (0.001 ETH)
        </button>
      </div>
    </div>
  )
}
export default NFTDropPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == 'collection' && slug.current == $id][0] {
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage{
    asset
  },
  previewImage{
    asset
  },
  slug{
    current
  },
  creator->{
    _id,
    name,
    address,
    slug {
    current
  },
  },
  }`
  const collection = await sanityClient.fetch(query, { id: params?.id })
  if (!collection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      collection,
    },
  }
}
