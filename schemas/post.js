export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Preview Title*',
      type: 'string',
      validation: Rule => Rule.required().min(4),
    },
    {
      name: 'slug',
      title: 'Slug* (required for navigation, must be unique)',
      type: 'slug',
      validation: (Rule) => Rule.required().custom((slug) => {
        if (typeof slug === "undefined") return true
        const regex = /(^[a-z0-9-]+$)/ // Regex pattern goes here
        if (regex.test(slug.current)) {
          return true
        } else {
          return "Invalid slug: Only numbers, lowercase letters, and dashes are allowed." // Error message goes here
        }
      }),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'previewText',
      title: 'Preview text',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Preview image',
      type: 'image',
      options: {
        isHighlighted: true,
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Article page content',
      type: 'blockContent',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'isPopular',
      title: 'Show in popular posts',
      type: 'boolean',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      updated: 'publishedAt',
    },
  },
}
