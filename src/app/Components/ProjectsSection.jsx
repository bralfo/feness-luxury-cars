// src/components/ProjectsSection.jsx

const projetos = [
    {
        id: 1,
        title: "Projeto 1",
        description: "Descrição curta do projeto 1.",
        image: "https://via.placeholder.com/400x250?text=Projeto+1",
        link: "#",
    },
    {
        id: 2,
        title: "Projeto 2",
        description: "Descrição curta do projeto 2.",
        image: "https://via.placeholder.com/400x250?text=Projeto+2",
        link: "#",
    },
    {
        id: 3,
        title: "Projeto 3",
        description: "Descrição curta do projeto 3.",
        image: "https://via.placeholder.com/400x250?text=Projeto+3",
        link: "#",
    },
];

export default function ProjectsSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projetos.map(({ id, title, description, image, link }) => (
                    <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-gray-600 mt-2">{description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
  