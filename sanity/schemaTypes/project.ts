import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'URL ending on website => Just Click "Generate".',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    }),
    defineField({
      name: 'services',
      title: 'Service(s)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'One or two sentences is sufficient.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'home',
      title: 'Featured on Home Page',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      description:
        "Drag & Drop Images Here, don't click button below first. High Res Images.",
      validation: (Rule) => Rule.required(),
      of: [{ type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
