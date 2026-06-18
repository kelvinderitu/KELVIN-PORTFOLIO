export default function Timeline() {
  const experiences = [
    {
      year: "2025 - Present",
      role: "DevOps and Software Engineer",
      company: "CipherTechLabs",
    },
    {
      year: "2024",
      role: "ICT Intern",
      company: "Consolidated Bank of Kenya",
    },
    {
      year: "2022 - 2024",
      role: "Field Technician",
      company: "HomeNet ISP",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-green-400 uppercase tracking-[0.3em] mb-4">
          Career Journey
        </p>

        <h2 className="text-5xl font-black mb-16">
          Experience
        </h2>

        <div className="space-y-10">

          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="
                border
                border-green-500/20
                bg-black/30
                backdrop-blur-sm
                rounded-2xl
                p-8
                hover:border-green-400
                transition
              "
            >
              <p className="text-green-400 font-semibold mb-3">
                {exp.year}
              </p>

              <h3 className="text-2xl font-bold">
                {exp.role}
              </h3>

              <p className="text-gray-400 mt-2">
                {exp.company}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}