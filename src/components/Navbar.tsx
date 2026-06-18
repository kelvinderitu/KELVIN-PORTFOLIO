export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-blue-500">
          Kelvin.dev
        </h1>

        <div className="flex gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

    </nav>
  );
}