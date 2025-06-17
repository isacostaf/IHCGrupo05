import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResultadosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button
            variant="outline"
            className="mb-8 hover:bg-white/90 shadow-md hover:shadow-lg transition-all duration-300 border-gray-200/50 backdrop-blur-sm bg-white/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Exemplo do título principal */}
          <h1 className="page_title">
            Resultados Alcançados
          </h1>

          {/* Exemplo do subtítulo */}
          <h2 className="page_subtitle">
            Conquistas Significativas
          </h2>

          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Os resultados obtidos superam nossas expectativas iniciais e demonstram o valor do nosso esforço
                colaborativo. Cada conquista representa um passo importante em direção aos nossos objetivos maiores e
                contribui para o avanço do conhecimento.
              </p>
            </CardContent>
          </Card>

          {/* Outro exemplo de subtítulo */}
          <h2 className="page_subtitle">
            Impactos Positivos
          </h2>

          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Nossas iniciativas têm gerado impactos significativos na comunidade, promovendo mudanças positivas
                e contribuindo para o desenvolvimento sustentável.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
