import {
	useNextSanityImage,
	type UseNextSanityImageOptions,
} from 'next-sanity-image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { preload } from 'react-dom'
import type { ComponentProps } from 'react'

const SIZES = [
	120, 240, 360, 480, 640, 720, 800, 880, 960, 1280, 1440, 1600, 1800, 2000,
]

export default function Img({
	image,
	imageWidth,
	imageSizes = SIZES,
	options,
	...props
}: {
	image: Sanity.Image | undefined
	imageWidth?: number
	imageSizes?: number[]
	options?: UseNextSanityImageOptions
} & ComponentProps<'img'>) {
	if (!image?.asset) return null

	const { src, width, height } = useNextSanityImage(
		client,
		image,
		imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
	)

	if (props.loading === 'eager') {
		preload(src, { as: 'image' })
	}

	return (
		<img
			src={src}
			{...generateSrcset(image, { width: imageWidth, sizes: imageSizes })}
			width={width}
			height={height}
			decoding="async"
			{...props}
		/>
	)
}

export function Source({
	image,
	imageWidth,
	imageSizes = SIZES,
	options,
	media = '(max-width: 768px)',
	...props
}: {
	image: Sanity.Image | undefined
	imageWidth?: number
	imageSizes?: number[]
	options?: UseNextSanityImageOptions
	media?: string
} & ComponentProps<'img'>) {
	if (!image?.asset) return null

	const { src, width, height } = useNextSanityImage(
		client,
		image,
		imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
	)

	if (props.loading === 'eager') {
		preload(src, { as: 'image' })
	}

	return (
		<source
			{...generateSrcset(image, { width: imageWidth, sizes: imageSizes })}
			width={width}
			height={height}
			media={media}
		/>
	)
}

function generateSrcset(
	image: Sanity.Image,
	{
		width,
		sizes = SIZES,
	}: {
		width?: number
		sizes: number[]
	},
) {
	const filtered = sizes.filter((size) => !width || size <= width)

	return {
		srcSet:
			filtered
				.map(
					(size) =>
						`${urlFor(image).width(size).auto('format').url()} ${size}w`,
				)
				.join(', ') || undefined,

		sizes:
			filtered
				.map(
					(size, i) =>
						`${i < filtered.length - 1 ? `(max-width: ${size + 1}px) ` : ''}${size}px`,
				)
				.join(', ') || undefined,
	}
}