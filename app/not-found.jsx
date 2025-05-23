import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center'>
      <h2>Not Found</h2>
      <p className='mb-5'>Could not find requested resource</p>
      <Link href="/">
        <button className="cursor-pointer w-full py-2 px-4 bg-stone-700 hover:bg-stone-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-stone-900 transition duration-150 ease-in-out">Go to homepage</button>
      </Link>
    </div>
  )
}