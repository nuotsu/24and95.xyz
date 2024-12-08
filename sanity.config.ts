'use client'

import { defineConfig } from 'sanity'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { structure } from './src/sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
	basePath: '/admin',
	projectId,
	dataset,

	schema,
	plugins: [structure, visionTool({ defaultApiVersion: apiVersion })],
})
