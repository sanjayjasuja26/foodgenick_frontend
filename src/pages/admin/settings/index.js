import Link from 'next/link'
import Image from 'next/image'
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboards', href: '/admin', current: false },
  { name: 'Users', href: '/admin/users', current: false },
  { name: 'Services', href: '/admin/services', current: false },
  { name: 'Settings', href: '/admin/settings', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]



export default function Settings() {
  return (
    <>

      <div className="min-h-full">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
             
              {/* <Image alt='' className="h-16" src='../../assets/images/logo.png'></Image> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Image className="h-10 w-10 rounded-full" src={user.imageUrl} alt=""></Image>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">{user.name}</div>
                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
              </div>
            </div>

          </div>
        </div>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <h2>Settings</h2>
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
