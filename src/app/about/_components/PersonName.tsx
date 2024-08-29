import React from 'react'

function TitleName({ name }: { name: string }) {
  return (
    <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-100 mb-2">
      {name}
    </h2>
  )
}

export default TitleName