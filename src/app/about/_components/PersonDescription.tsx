import React from 'react'

function PersonDescription({ description }: { description: string }) {
  return (
    <p className='text-sm text-white dark:text-slate-300 mb-4 leading-relaxed text-justify'>{description}</p>
  )
}

export default PersonDescription