import { type SchemaTypeDefinition } from 'sanity'

// documents
import artwork from './artwork'
import design from './design'

// objects
import richtext from './richtext'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		// documents
		artwork,
		design,

		// objects
		richtext,
	],
}
