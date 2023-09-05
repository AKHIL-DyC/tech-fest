import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Dashboard
      <Link href='/dashboard/login'>login</Link>
    </div>
  )
}

export default page
