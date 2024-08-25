import { CollectionConfig } from 'payload/config' // Correct import for v3

export const BlogArticles: CollectionConfig = {
  slug: 'blogArticles',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text', // Correct type
      required: true, // Mark as required if necessary
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea', // Correct type
      required: true,
    },
    // Add more fields as needed
  ],
}
