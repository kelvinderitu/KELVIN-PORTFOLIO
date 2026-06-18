export default function Navbar(){
  return(
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
  <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

    <h1 className="text-3xl font-bold text-green-400">
      {"<Kelvin.dev />"}
    </h1>

    <div className="flex items-center gap-10">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <a
        href="/Kelvin_Nderitu_CV.pdf"
        download
        className="border border-green-400 px-5 py-2 rounded-lg"
      >
        Download CV
      </a>
    </div>

  </div>
    </nav>
  )
}