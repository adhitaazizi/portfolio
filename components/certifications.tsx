export default function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Solution Architect",
      issuer: "Amazon Web Services",
      date: "2025",
      credential: "AWS-SAA-123456",
      link: "https://aws.amazon.com/verification",
    },
    {
      title: "Microsoft AI & ML Engineer",
      issuer: "Microsoft",
      date: "2025",
      credential: "GCP-PDE-789012",
      link: "https://learn.microsoft.com/certifications",
    },
    {
      title: "Microsoft AI Product Manager",
      issuer: "Microsoft",
      date: "2025",
      credential: "GCP-PDE-789012",
      link: "https://learn.microsoft.com/certifications",
    },
    {
      title: "Neo4j Professional Certificate",
      issuer: "Neo4j",
      date: "2022",
      credential: "CKAD-345678",
      link: "https://graphacademy.neo4j.com/certifications",
    },
    {
      title: "Neo4j Graph Data Science Certificate",
      issuer: "Neo4j",
      date: "2021",
      credential: "FM-REACT-901234",
      link: "https://graphacademy.neo4j.com/certifications",
    },
  ]

  return (
    <section id="certifications" className="py-24 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif font-bold text-black dark:text-white mb-4 text-center">Certifications</h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition rounded-3xl" suppressHydrationWarning>
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.date}</p>
              <p className="text-gray-400 text-xs font-mono">ID: {cert.credential}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-xs mt-2 inline-block transition"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
