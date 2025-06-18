import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft } from "lucide-react"
import { MarkdownText } from "@/components/markdown-text"
import Link from "next/link"
import Image from "next/image"

export default function ProjetoPage() {
  const content = `
**O VerificaAAA** é um projeto acadêmico desenvolvido no âmbito do curso de **Interação Humano-Computador**, sob a orientação da professora **Rejane Maria da Costa Figueiredo**, na **Universidade de Brasília (UnB)**.

Criado com o propósito de **promover a acessibilidade digital**, o VerificaAAA oferece um **checklist prático, direto e de fácil uso** para profissionais envolvidos nas mais diversas etapas de um projeto.

Seja no **desenvolvimento web**, **design de interfaces**, **produção de conteúdo** ou na **gestão de projetos**, a ferramenta foi pensada para apoiar quem deseja tornar seus produtos mais **inclusivos desde o início**.

Mais do que uma simples lista de verificação, o VerificaAAA busca **conscientizar e capacitar** designers, desenvolvedores e gestores a **incorporar princípios de acessibilidade** como parte fundamental do processo criativo.
`

  const contributors = [
    {
      name: "Julia Gabriela",
      github: "JuliaGabP",
      image: "https://github.com/JuliaGabP.png"
    },
    {
      name: "Diassís",
      github: "Diaxiz",
      image: "https://github.com/Diaxiz.png"
    },
    {
      name: "Isabelle Costa",
      github: "isacostaf",
      image: "https://github.com/isacostaf.png"
    },
    {
      name: "Marco Marques",
      github: "marcomarquesdc",
      image: "https://github.com/marcomarquesdc.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button
            variant="outline"
            className="mb-8 hover:bg-white/90 shadow-md hover:shadow-lg transition-all duration-300 border-gray-200/50 backdrop-blur-sm bg-white/80"
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-6 mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            <BookOpen className="w-10 h-10 text-white relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-60"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Sobre o Projeto
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conheça mais sobre o VerificaAAA e sua missão de promover acessibilidade digital
          </p>

          <Card className="shadow-2xl border border-gray-200/50 bg-white backdrop-blur-sm relative overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <MarkdownText>{content}</MarkdownText>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  👥 Contribuidores
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {contributors.map((contributor) => (
                    <a
                      key={contributor.github}
                      href={`https://github.com/${contributor.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center group"
                    >
                      <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={contributor.image}
                          alt={`Foto de perfil de ${contributor.name}, ${contributor.name === "Julia Gabriela" ? "mulher branca de cabelo castanho e olhos castanhos" : contributor.name === "Isabelle Costa" ? "mulher branca de olhos verdes e cabelo castanho" : "homem branco de cabelo castanho e olhos castanhos"}, por volta dos 20 anos, contribuidor do projeto VerificaAAA`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                        {contributor.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
