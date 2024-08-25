import RecentBlogPosts from '@/components/RecentBlogPosts'

async function Home() {
  return (
    <>
      <div className="bg-green-500 p-4 text-white flex flex-col gap-4 min-h-screen">
        <div className="bg-white rounded p-4 text-black flex items-center justify-center font-bold text-xl">
          Welcome to Payload CMS Blog
        </div>
        <RecentBlogPosts />
      </div>
    </>
  )
}

export default Home
