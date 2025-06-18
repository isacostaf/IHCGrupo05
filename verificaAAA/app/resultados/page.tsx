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
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mb-6 mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            <Award className="w-10 h-10 text-white relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-60"></div>
          </div>

          <h1 className="page_title">
            Ferramentas de Acessibilidade
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Recursos para auxiliar no desenvolvimento de soluções acessíveis
          </p>

          <div className="max-w-4xl mx-auto space-y-8">


          <Card>
            <CardContent className="p-6">
              <p className="corpo-pagina">
                Para auxiliar e facilitar o desenvolvimento de soluções acessíveis, foram elencadas ferramentas de acessibilidade abaixo:
              </p>
            </CardContent>
          </Card>

            <h2 className="page_subtitle">
              Frameworks e Ferramentas de Testes Automatizados 
            </h2>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>WAVE – Web Accessibility Evaluation Tool</strong> - Ferramenta online para avaliação de acessibilidade em páginas web, com destaques visuais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>AXE – Accessibility Engine</strong> - Ferramenta de testes automatizados que pode ser integrada ao navegador, CI/CD e frameworks de teste (Jest, Cypress).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>Lighthouse – Google</strong> - Ferramenta de auditoria de performance, SEO e acessibilidade incorporada ao Chrome DevTools.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>ACHECKS – Acessibility Checks Toolbox</strong> - Conjunto de utilitários para avaliar acessibilidade técnica e funcional em diferentes plataformas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="page_subtitle">
              Leitores de Tela
            </h2>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>JAWS – Job Access With Speech (Windows)</strong> - Um dos leitores de tela mais utilizados por pessoas cegas no sistema Windows.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>VoiceOver (macOS / iOS)</strong> - Leitor de tela nativo da Apple, disponível em Macs, iPhones e iPads.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>TalkBack (Android)</strong> - Leitor de tela nativo dos dispositivos Android, utilizado para navegação por toque e voz.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="page_subtitle">
              Verificadores Visuais e Contrast Checkers
            </h2>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>WebAIM – Contrast Checker</strong> - Verificador de contraste entre texto e fundo, baseado nas diretrizes WCAG.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>Color Oracle</strong> - Simulador de daltonismo que mostra como pessoas com diferentes deficiências cromáticas percebem a interface.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>WhoCanUse</strong> - Ferramenta que mostra a acessibilidade de combinações de cores considerando vários tipos de deficiência visual.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="page_subtitle">
              Ferramentas de Análise de Conteúdo e Navegação
            </h2>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>DynoVisual Sitemap Generator</strong> - Gera visualmente o mapa do site, útil para avaliar rotas de navegação acessível.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>Accessibility Insights (Microsoft)</strong> - Ferramenta que verifica a conformidade com os padrões de acessibilidade WCAG 2.1, com testes manuais e automáticos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>Siteimprove Accessibility Checker</strong> - Extensão para navegadores que fornece recomendações claras para resolver problemas de acessibilidade.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="page_subtitle">
              Complementares
            </h2>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>Inclusive Components</strong> - Biblioteca com exemplos acessíveis de componentes HTML e JavaScript.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-[1.1rem] leading-[1.75] text-gray-700">
                    <strong>Deque University's A11y Tools</strong> - Cursos e ferramentas para desenvolvedores e designers focados em acessibilidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
