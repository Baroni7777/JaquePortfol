import { Badge } from "@/components/ui/badge";
import { Mail, Globe, Info } from "lucide-react";

// Nota: Estou usando uma imagem de placeholder. Você pode substituí-la pelo URL da imagem real.
const profileImage = "https://ladyjaque.github.io/portfolio/JaquelineBastos/assets/foto.jpg";

const experiences = [
  {
    year: "2019",
    title: "DIRETORA DE ARTE",
    company: "T&M Decor",
    description: [
      "Criação de artes personalizadas para decoração, desenvolvimento de identidade visual e adaptação de materiais gráficos para diferentes mídias.",
    ],
  },
  {
    year: "2020",
    title: "DESIGNER GRÁFICO",
    company: "West Publicidade e Propaganda",
    description: [
      "Responsável pela criação de peças publicitárias, edição de imagens e apoio na comunicação visual de campanhas para diversos clientes.",
    ],
  },
  {
    year: "2021 - ATUAL",
    title: "DESIGNER PLENO",
    company: "Ideal Fundo Fotográfico",
    description: [
      "Desenvolvimento de materiais gráficos e artes para fundo fotográfico e festas.",
      "Criação de layouts personalizados.",
      "Colaboração em projetos criativos para ampliar a oferta de produtos.",
    ],
  },
];

const expertiseItems = [
    { title: "Edição de Imagens", description: "Domínio do Photoshop para ajustes e composições." },
    { title: "Gestão de Projetos", description: "Planejamento e coordenação de tarefas." },
    { title: "Mídias Sociais", description: "Criação de materiais para redes sociais com noção de marketing digital." },
    { title: "Trabalho em Equipe", description: "Boa comunicação e interação com colegas e clientes." },
    { title: "Resolução de Problemas", description: "Identificação de desafios e soluções práticas." },
];

const skills = [
    { name: "Photoshop", level: "w-[90%]" },
    { name: "Illustrator", level: "w-[95%]" },
    { name: "Blender", level: "w-[70%]" },
    { name: "Midjourney", level: "w-[85%]" },
    { name: "Informática", level: "w-[60%]" },
];

const Resume = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <header className="flex flex-col sm:flex-row items-center gap-8 border-b pb-8">
          <img
            src={profileImage}
            alt="Jaqueline Bastos"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="text-center sm:text-left">
            <Badge className="bg-blue-500 text-white mb-2">DESIGNER PLENO</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Jaqueline Bastos</h1>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mt-2 text-gray-500 text-sm">
              <a href="mailto:jaquelinegomes929@gmail.com" className="flex items-center gap-1 hover:text-blue-500">
                <Mail size={16} />
                <span>jaquelinegomes929@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="http://www.jaquebastos.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500">
                <Globe size={16} />
                <span>www.jaquebastos.com</span>
              </a>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              26 anos. Profissional criativa e dedicada, com experiência em design gráfico e criação de artes, buscando uma posição que ofereça oportunidades de crescimento profissional. Possuo facilidade com ferramentas de inteligência artificial e habilidades avançadas em softwares como Blender, SketchUp, Midjourney e Krea.
            </p>
          </div>
        </header>

        <main className="grid md:grid-cols-3 gap-12 mt-8">
          <div className="md:col-span-2">
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-6 flex items-center justify-between">
                EXPERIÊNCIAS PROFISSIONAIS
                <span className="text-gray-400 font-mono text-lg">03</span>
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink-200"></div>
                <div className="absolute left-[-0.3rem] top-1 w-3 h-3 bg-pink-400 rounded-full border-2 border-white"></div>
                <div className="absolute left-[-0.3rem] bottom-1 w-3 h-3 bg-pink-400 rounded-full border-2 border-white"></div>
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <div className="flex items-baseline gap-4">
                      <Badge className="bg-pink-400 text-white whitespace-nowrap">{exp.year}</Badge>
                      <div>
                        <h3 className="font-bold text-md text-gray-800">{exp.title}</h3>
                        <p className="text-gray-500 text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            <footer className="mt-12 bg-pink-50 p-4 rounded-lg flex items-center gap-4">
                <div className="bg-pink-400 text-white rounded-full p-2 flex-shrink-0">
                    <Info size={24} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div>
                        <h4 className="font-bold text-gray-800">Telefone</h4>
                        <p className="text-gray-600">18 997871633</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Endereço</h4>
                        <p className="text-gray-600">Birigui/SP - CEP 16202-040</p>
                    </div>
                </div>
            </footer>
          </div>

          <div className="md:col-span-1 space-y-12">
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-6 flex items-center justify-between">
                SKILLS & EXPERTISE
                <span className="text-gray-400 font-mono text-lg">05</span>
              </h2>
              <ul className="space-y-4">
                {expertiseItems.map((item, i) => (
                    <li key={i} className="flex">
                        <span className="text-pink-500 mr-2 mt-1">▪</span>
                        <div>
                            <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                <Badge variant="outline" className="border-pink-300 text-pink-500">Software</Badge>
                <Badge variant="outline" className="border-pink-300 text-pink-500">AI</Badge>
                <Badge variant="outline" className="border-pink-300 text-pink-500">Organização</Badge>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-6 flex items-center justify-between">
                EDUCAÇÃO
                <span className="text-gray-400 font-mono text-lg">03</span>
              </h2>
              <div className="relative">
                <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-pink-200 -z-10"></div>
                <div className="relative pl-12">
                  <div className="absolute left-[1.1rem] top-2 w-3 h-3 bg-pink-400 rounded-full border-2 border-white"></div>
                  <div className="flex items-baseline gap-4">
                    <Badge className="bg-pink-400 text-white whitespace-nowrap">2016-2019</Badge>
                    <div>
                      <h3 className="font-bold text-md text-gray-800">UniSALESIANO - Centro</h3>
                      <p className="text-gray-500 text-sm">Universitário Católico Salesiano</p>
                    </div>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Auxilium - Nutrição</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-6 flex items-center justify-between">
                SKILLS
                <span className="text-gray-400 font-mono text-lg">05</span>
              </h2>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                    <div key={i}>
                        <p className="text-gray-700 font-medium">{skill.name}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                            <div className={`bg-gradient-to-r from-pink-300 to-pink-500 h-2.5 rounded-full ${skill.level}`}></div>
                        </div>
                    </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
            Alguns dos meus trabalhos
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <img src="https://ladyjaque.github.io/portfolio/JaquelineBastos/assets/trabalho1.jpg" alt="Trabalho 1" className="w-full h-auto rounded-lg" />
            </div>
            <div className="bg-pink-100 p-6 rounded-xl">
              <img src="https://ladyjaque.github.io/portfolio/JaquelineBastos/assets/trabalho2.jpg" alt="Trabalho 2" className="w-full h-auto rounded-lg" />
            </div>
            <div className="bg-pink-100 p-6 rounded-xl">
              <img src="https://ladyjaque.github.io/portfolio/JaquelineBastos/assets/trabalho3.jpg" alt="Trabalho 3" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;