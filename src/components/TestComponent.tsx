import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

async function TestComponent() {
  const payload = getPayloadHMR({ config })

  const users = await (
    await payload
  ).find({
    collection: 'users',
  })

  return (
    <>
      <div className="bg-green-500 p-4 text-white flex flex-col gap-4 min-h-screen">
        <div className="bg-white rounded p-4 ">
          <div className="bg-green-500 rounded p-4 text-whiten text-white flex items-center justify-center font-bold text-xl">
            Users
          </div>
        </div>
        <div className="bg-white rounded p-4 text-green-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.docs.map((user) => (
            <div key={user.id} className="bg-green-500 rounded p-4 text-white">
              {user.email}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TestComponent
