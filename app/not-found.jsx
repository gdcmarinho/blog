import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center'>
      <h2>Not Found</h2>
      <p className='mb-5'>Could not find requested resource</p>
      <Link href="/">
        <button className='cursor-pointer'>Go to homepage</button>
      </Link>
    </div>
  )
}