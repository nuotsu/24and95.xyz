import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscFlame } from 'react-icons/vsc'
import { IoIosImage } from 'react-icons/io'

export default defineType({
	name: 'artwork',
	title: 'Artwork',
	icon: VscFlame,
	type: 'document',
	fieldsets: [{ name: 'date', options: { columns: 2 } }],
	fields: [
		defineField({
			name: 'layers',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'image',
					icon: IoIosImage,
					fields: [
						defineField({
							name: 'addNoise',
							type: 'boolean',
							initialValue: false,
						}),
					],
				}),
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'design' }],
				}),
			],
		}),
		defineField({
			name: 'date',
			type: 'date',
			fieldset: 'date',
		}),
		defineField({
			name: 'hideDate',
			type: 'boolean',
			initialValue: false,
			fieldset: 'date',
		}),
	],
	preview: {
		select: {
			title: 'layers.0.title',
			date: 'date',
			_id: '_id',
			image: 'layers.0.asset',
		},
		prepare: ({ title, date, _id, image }) => ({
			title: title || date,
			subtitle: title ? date : _id.replace(/^drafts\./, ''),
			media: image,
		}),
	},
})
