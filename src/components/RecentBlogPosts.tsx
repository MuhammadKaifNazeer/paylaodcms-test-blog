import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

async function RecentBlogPosts() {
  const payload = getPayloadHMR({ config })

  const blogPosts = await (
    await payload
  ).find({
    collection: 'blogArticles',
  })

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.docs.map((post) => (
          <div key={post.id} className="bg-white text-black rounded p-4">
            <h2 className="text-lg font-semibold mb-4">{post.title}</h2>
            <p className="text-md">{post.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default RecentBlogPosts
