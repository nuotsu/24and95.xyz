import { defineField, defineType } from 'sanity'
import { VscFlame } from 'react-icons/vsc'

export default defineType({
	name: 'artwork',
	title: 'Artwork',
	icon: VscFlame,
	type: 'document',
	fields: [
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
			date: 'date',
			_id: '_id',
			image: 'layers.0.asset',
		},
		prepare({ date, _id, image }) {
			return {
				title: date,
				subtitle: _id.replace(/^drafts\./, ''),
				media: image,
			}
		},
	},
})
