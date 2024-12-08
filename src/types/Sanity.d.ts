import type { SanityDocument } from 'sanity'
import type { SanityImageObject } from '@sanity/image-url/lib/types/types'

declare global {
	namespace Sanity {
		// documents

		interface Artwork extends SanityDocument {
			layers?: Array<Image | Design>
			date: string
			hideDate?: boolean
		}

		interface Image extends SanityImageObject {
			readonly _type: 'image'
		}

		interface Design {
			readonly _type: 'design'
			id: { current: string }
			title?: string
			text?: Richtext[]
			assets?: Image[]
		}

		// objects

		interface Richtext {
			readonly _type: 'richtext'
			content: any
		}
	}
}

export {}
