import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
      {/*flex-1 ensures that it takes up all possible horizontal space of flex box, height set to 100%*/}
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout