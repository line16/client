import Link from "next/link"
import Navbar from "./layout/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-slate-300 text-black">
      <h1 className="text-black text-4xl font-bold">Dataservice afsluttende opgave - Line</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-evenly font-mono text-sm lg:flex">
        <div className="bg-blue-200 w-5/12 text-center h-auto m-2 p-2 rounded-md shadow-md hover:bg-blue-400 cursor-pointer font-semibold text-lg">
          opgave 1: Viborghaveservice <br></br>
          <Link className="underline" href="/viborghaveservice">klik her!</Link>
        </div>
        <div className="bg-blue-200 w-5/12 text-center h-auto m-2 p-2 rounded-md shadow-md font-semibold text-lg">
          opgave 2: open weather API <br></br>
          <Link className="underline" href="/Weather">klik her!</Link>
        </div>
        <div className="bg-blue-200 w-5/12 text-center h-auto m-2 p-2 rounded-md shadow-md hover:bg-blue-400 cursor-pointer font-semibold text-lg">
          Ogave 3: newsAPI  <br></br>
          <Link className="underline" href="/News">klik her!</Link>
        </div>
      </div>
      <div className="font-light text-sm text-gray-400">
        &copy; lavet af Line Buch Sørensen
      </div>
    </main>
  )
}
