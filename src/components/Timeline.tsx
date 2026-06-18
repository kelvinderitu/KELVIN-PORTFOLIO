const experiences = [
  {
    year: "2025 - Present",
    role: "Attendant Supervisor",
    company: "Magunas Supa Store"
  },
  {
    year: "2024",
    role: "ICT Intern",
    company: "Consolidated Bank"
  },
  {
    year: "2022 - 2024",
    role: "Field Technician",
    company: "HomeNet ISP"
  }
];

export default function Timeline() {
  return (
    <section className="py-24 px-8">
      <h2 className="text-5xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((item) => (
          <div
            key={item.year}
            className="border-l-4 border-blue-500 pl-6"
          >
            <p className="text-blue-400">
              {item.year}
            </p>

            <h3 className="text-2xl font-bold">
              {item.role}
            </h3>

            <p>{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}