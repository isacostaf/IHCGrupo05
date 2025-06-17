import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MetodologiaPage() {
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

        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center mb-6 mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            <BarChart3 className="w-10 h-10 text-white relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-60"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Nossa Metodologia
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Abordagem sistemática e rigorosa para garantir resultados confiáveis
          </p>

          <Card className="shadow-2xl border border-gray-200/50 bg-white backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-400"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <p className="text-lg leading-relaxed text-gray-700">
                Adotamos uma metodologia robusta que combina técnicas quantitativas e qualitativas. Nossa abordagem é
                fundamentada em princípios científicos sólidos e melhores práticas da área, garantindo a qualidade e
                credibilidade dos resultados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
