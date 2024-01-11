import Link from "next/link"
import Navbar from "./layout/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-slate-300 text-black">
        <Navbar/>
      <div className="z-10 max-w-5xl w-full items-center justify-evenly font-mono text-sm lg:flex">
        <div>
          opgave 1: Viborghaveservice
          <Link href="/viborghaveservice"> klik her!</Link>
        </div>
        <div>
          opgave 2: vejret/open weather API
        </div>
        <div>
          side 3
        </div>
      </div>
      <div>
        footer 
      </div>
    </main>
  )
}
