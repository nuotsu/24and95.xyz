import type { SanityDocument } from 'sanity'
import type { SanityImageObject } from '@sanity/image-url/lib/types/types'

declare global {
	namespace Sanity {
		interface Artwork extends SanityDocument {
			layers: Image[]
			date: string
		}

		interface Image extends SanityImageObject {}
	}
}

export {}
