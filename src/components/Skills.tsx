const skills = [
  "Python",
  "React",
  "Docker",
  "Kubernetes",
  "Linux",
  "GitHub Actions",
  "Oracle Cloud",
  "SQL",
  "Flutter",
  "Django",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-8 max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-zinc-900 p-6 rounded-xl text-center hover:border-blue-500 border border-zinc-800 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}