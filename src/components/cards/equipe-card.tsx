'use client'

import * as React from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { PlaceholderImage } from '@/components/placeholder-image'

type Time = {
  name: string
  image: StaticImageData | string
}
interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  time: Time
  variant?: 'default' | 'switchable'
}

export function EquipeCard({
  time,
  variant = 'default',
  className,
  ...props
}: ProductCardProps) {
  return (
    <Card
      className={cn('size-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <Link aria-label={time.name} href={`#`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {time.image ? (
              <Image
                src={time.image ?? '/images/product-placeholder.webp'}
                alt={time.name}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            ) : (
              <PlaceholderImage className="rounded-none" asChild />
            )}
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{time.name}</span>
      </Link>
      <Link href={`/`} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{time.name}</CardTitle>
          <CardDescription className="line-clamp-1"></CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-1">
        {variant === 'default' ? (
          <div className="flex w-full items-center space-x-2">
            <Button
              aria-label="Add to cart"
              size="sm"
              className="h-8 w-full rounded-sm"
              onClick={() => {}}
            >
              Add to cart
            </Button>
          </div>
        ) : null}
      </CardFooter>
    </Card>
  )
}
