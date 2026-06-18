import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Profile Image */}

        <div
          className="animate-float mb-10"
          style={{
            boxShadow:
              "0 0 120px rgba(0,255,100,.35)",
            borderRadius: "9999px",
          }}
        >
          <img
            src="/profile.jpg"
            alt="Kelvin Nderitu"
            className="
              w-[250px]
              h-[250px]
              md:w-[380px]
              md:h-[380px]
              rounded-full
              object-cover
            "
          />
        </div>

        {/* Title */}

        <p className="text-green-400 uppercase tracking-[0.4em] text-sm md:text-base mb-6">
          Software Engineer • DevOps Engineer
        </p>

        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight">
          Kelvin

          <br />

          <span
            className="text-green-400"
            style={{
              textShadow:
                "0 0 25px rgba(0,255,100,.7)",
            }}
          >
            Nderitu
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
          Building scalable software solutions,
          cloud-native applications, automated
          infrastructure, CI/CD pipelines, and
          modern digital experiences that power
          businesses and communities.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="#projects"
            className="
              bg-green-500
              text-black
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            View Projects
          </a>

          <a
            href="/Kelvin_Nderitu_CV.pdf"
            download
            className="
              border
              border-green-400
              text-green-400
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-green-400
              hover:text-black
              transition
            "
          >
            Download CV
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mt-10">

          <a
            href="https://github.com/kelvinderitu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="mailto:your-email@example.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope size={30} />
          </a>

        </div>

        {/* Tech Stack */}

        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {[
            "Python",
            "React",
            "Docker",
            "Kubernetes",
            "Linux",
            "GitHub Actions",
            "Oracle Cloud",
            "SQL",
          ].map((tech) => (
            <span
              key={tech}
              className="
                border
                border-green-500/30
                bg-black/40
                px-4
                py-2
                rounded-full
                text-sm
                hover:border-green-400
                transition
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}