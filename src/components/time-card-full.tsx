import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import React, { type FC } from 'react'
import { Badge } from './ui/badge'

type Time = {
  sku?: string
  name?: string
  shield: StaticImageData | string
  goals?: number
}

type TimeCardProps = {
  time1: Time
  time2: Time
  group?: string
  rodada?: string
  date?: string
  time?: string
  stadium?: string
}
const TimeCardFull: FC<TimeCardProps> = ({
  time1,
  time2,
  rodada,
  date,
  time,
  stadium = 'Quadra Poliesportiva AG 11',
}) => {
  return (
    <div className="w-full py-4 flex flex-col gap-4">
      <div className="flex w-full gap-4">
        <Badge
          className="rounded-md uppercase text-center border-green-400 py-2 px-2"
          variant="outline"
        >
          {rodada}
        </Badge>
      </div>

      <div className="flex w-full justify-center">
        <div className="flex items-center gap-4">
          <span>{time1.name}</span>
          <Image src={time1.shield} alt="" width={80} height={80} />
          {time1.goals ? <span>{time1.goals}</span> : <div />}
        </div>
        <div className="w-12 flex items-center justify-center">
          <span className="font-bold block uppercase mx-4 text-yellow-400">
            VS
          </span>
        </div>

        <div className="flex items-center gap-4">
          {time2.goals ? <span>{time2.goals}</span> : <div />}
          <Image src={time2.shield} alt="" width={80} height={80} />
          <span>{time2.name}</span>
        </div>
      </div>

      <div className="bg-zinc-900 w-full flex items-center justify-between">
        <div className=" flex flex-col gap-4">
          <span>Data</span>
          <span>Horario</span>
        </div>

        <div className="flex flex-col gap-4">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>

      <div className="">
        {stadium && (
          <div className="w-full flex items-center justify-center">
            <span className="block text-center">{stadium}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export { TimeCardFull }
