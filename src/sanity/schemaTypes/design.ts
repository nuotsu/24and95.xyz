import { defineField, defineType } from 'sanity'
import { VscSymbolKeyword } from 'react-icons/vsc'

export default defineType({
	name: 'design',
	title: 'Design',
	icon: VscSymbolKeyword,
	type: 'document',
	fields: [
		defineField({
			name: 'id',
			title: 'Identifier',
			type: 'slug',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'text',
			type: 'array',
			of: [{ type: 'richtext' }],
		}),
		defineField({
			name: 'assets',
			type: 'array',
			of: [{ type: 'image' }],
		}),
	],
	preview: {
		select: {
			title: 'title',
			id: 'id.current',
		},
		prepare: ({ title, id }) => ({
			title,
			subtitle: id || 'Design',
		}),
	},
})
