'use client'

import * as React from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { PlaceholderImage } from '@/components/placeholder-image'

type Partner = {
  name: string
  image: StaticImageData | string
}
interface PartnerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  partner: Partner
}

export function PartnerCard({
  partner,
  className,
  ...props
}: PartnerCardProps) {
  return (
    <Card
      className={cn('size-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <Link aria-label={partner.name} href={`#`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {partner.image ? (
              <Image
                src={partner.image ?? '/images/product-placeholder.webp'}
                alt={partner.name}
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
        <span className="sr-only">{partner.name}</span>
      </Link>

      <CardContent className="space-y-1.5 p-4">
        <CardTitle className="line-clamp-1 text-lg uppercase text-center">
          {partner.name}
        </CardTitle>
      </CardContent>
    </Card>
  )
}
