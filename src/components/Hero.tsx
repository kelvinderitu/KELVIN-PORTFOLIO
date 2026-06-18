import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">

      <div className="max-w-6xl mx-auto text-center">

        <p className="text-blue-500 text-xl mb-4 tracking-wider uppercase">
          Welcome to my portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          Kelvin
          <span className="text-blue-500"> Nderitu</span>
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl text-gray-300 font-semibold">
          Software Engineer • DevOps Engineer
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
          Passionate about building scalable software systems,
          automating infrastructure, deploying cloud-native applications,
          and solving complex engineering challenges through modern technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            View Projects
          </a>

          <a
            href="/Kelvin_Nderitu_CV.pdf"
            download
            className="border border-gray-500 hover:border-blue-500 transition px-8 py-4 rounded-xl font-semibold"
          >
            Download CV
          </a>

        </div>

        <div className="flex justify-center gap-3 mt-10 flex-wrap">

          <span className="bg-zinc-900 px-4 py-2 rounded-full">
            Python
          </span>

          <span className="bg-zinc-900 px-4 py-2 rounded-full">
            React
          </span>

          <span className="bg-zinc-900 px-4 py-2 rounded-full">
            Docker
          </span>

          <span className="bg-zinc-900 px-4 py-2 rounded-full">
            Kubernetes
          </span>

          <span className="bg-zinc-900 px-4 py-2 rounded-full">
            Linux
          </span>

          <span className="bg-zinc-900 px-4 py-2 rounded-full">
            CI/CD
          </span>

        </div>

        <Terminal />

      </div>

    </section>
  );
}