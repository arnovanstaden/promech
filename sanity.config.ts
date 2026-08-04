'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './sanity/schemaTypes'
import { deployTool } from './sanity/lib/deployTool'

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
    deployTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  tools: (prev) => prev.filter((tool) => tool.name !== 'releases'),
})
