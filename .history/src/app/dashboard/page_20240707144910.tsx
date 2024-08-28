import Sidebar from './components/sidebar/page'
import Header from './components/header/page'
import MainContent from './components/maincontent /page'

export default function Dashboard() {
  return (
    <div className="bg-black flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}
