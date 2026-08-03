'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: 'ProMech',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    ...(process.env.NODE_ENV === 'development' ? [visionTool()] : []),
  ],
  schema: {
    types: schemaTypes,
  },
})
