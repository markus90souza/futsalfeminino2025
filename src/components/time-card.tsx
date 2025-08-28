import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import React, { type FC } from 'react'

type TimeCardProps = {
  name?: string
  image: StaticImageData | string
  size?: number
  goals?: number
}

const TimeCard: FC<TimeCardProps> = ({ image, name, size = 176, goals }) => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-3">
      <div className="min-w-[176px] flex items-center justify-center">
        <Image className="" alt="" width={size} height={size} src={image} />
      </div>
      <div className="">
        <strong className="font-semibold uppercase line-clamp-1 text-center text-2xl md:text-3xl">
          {name}
        </strong>
      </div>
      {goals && (
        <span className="flex rounded-lg items-center justify-center text-3xl bg-zinc-900 w-12 h-12">
          {goals}
        </span>
      )}
    </div>
  )
}

export { TimeCard }
