import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import { dev } from '@/lib/env'

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: !dev, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
