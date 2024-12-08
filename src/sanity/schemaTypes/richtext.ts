import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'richtext',
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
})
