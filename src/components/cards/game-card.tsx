'use client'

import * as React from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '../ui/badge'

type Time = {
  name?: string
  shield: StaticImageData | string
  goal: number | string
}

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  time1: Time
  time2: Time
  group?: string
  round?: string
  date?: string
  hour?: string
  stadium?: string
  status?: 'Finalizado' | 'Em andamento'
  link?: string
}

export function GameCard({
  time1,
  time2,
  round,
  date,
  hour,
  stadium,
  status,
  link = '#',
  className,
  ...props
}: ProductCardProps) {
  return (
    <Link className="" href={String(link) || '#'}>
      <Card
        className={cn('size-full overflow-hidden rounded-sm', className)}
        {...props}
      >
        <CardHeader className="p-0 space-y-0  flex flex-row relative">
          <Badge
            className="rounded-full z-40 absolute right-1/2 bg-zinc-950 transform translate-x-1/2 translate-y-1  uppercase text-center text-xs py-1 px-2"
            variant="outline"
          >
            {round}
          </Badge>

          <AspectRatio ratio={4 / 3}>
            <Image
              src={time1.shield ?? '/images/product-placeholder.webp'}
              alt={time1.name!}
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              fill
              loading="lazy"
            />
          </AspectRatio>

          {time1.goal && (
            <div className="absolute left-[72px] bottom-4 rounded-md  flex items-center justify-center w-10 h-10 bg-zinc-900">
              <span className="text-3xl">{time1.goal}</span>
            </div>
          )}

          <div className="w-8 h-8 flex items-center bg-zinc-900 justify-center absolute top-1/2 left-1/2 z-50 transform -translate-x-[60%] -translate-y-1/2 rounded-md">
            <span className="font-bold text-xs">VS</span>
          </div>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={time2.shield ?? '/images/product-placeholder.webp'}
              alt={time2.name!}
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              fill
              loading="lazy"
            />
          </AspectRatio>

          {time2.goal && (
            <div className="absolute bottom-4 right-[72px] rounded-md  flex items-center justify-center w-10 h-10 bg-zinc-900">
              <span className="text-3xl">{time2.goal}</span>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-0 py-2 bg-zinc-900">
          <div className="grid grid-cols-2 gap-2 w-full">
            <div className="">
              <CardTitle className="line-clamp-1 text-center text-sm uppercase">
                {time1.name}
              </CardTitle>
            </div>

            <div className="">
              <CardTitle className="line-clamp-1 text-center text-sm uppercase">
                {time2.name}
              </CardTitle>
            </div>
          </div>

          {status === 'Finalizado' ? null : (
            <div className="w-full mt-4 items-center flex justify-between px-2">
              <div className="">
                <span className="text-lg uppercase">{date}</span>
              </div>
              <div className="">
                <span className="text-3xl uppercase">{hour}</span>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 ">
          <div className="flex w-full items-center justify-center space-x-2">
            <span className="text-xs block uppercase text-center">
              {stadium}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
