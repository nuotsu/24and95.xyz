import { defineField, defineType } from 'sanity'
import { VscFlame } from 'react-icons/vsc'

export default defineType({
	name: 'artwork',
	title: 'Artwork',
	icon: VscFlame,
	type: 'document',
	fields: [
		defineField({
			name: 'id',
			title: 'Identifier',
			type: 'slug',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'layers',
			type: 'array',
			of: [{ type: 'image' }],
		}),
		defineField({
			name: 'date',
			type: 'date',
		}),
	],
	preview: {
		select: {
			title: 'date',
			id: 'id',
		},
	},
})
