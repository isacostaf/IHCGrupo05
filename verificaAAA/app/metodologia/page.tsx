import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ResetButton } from "@/components/ui/reset-button"
import { ProgressWidget } from "@/components/ui/progress-widget"

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ProgressWidget />
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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center mb-6 mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            <BarChart3 className="w-10 h-10 text-white relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-60"></div>
          </div>

          <h1 className="page_title">
            Gestão de Projetos
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Boas práticas para garantir acessibilidade na gestão de projetos
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            <ResetButton />

            <Card>
              <CardContent className="p-6">
                <p className="corpo-pagina">
                  Para que a acessibilidade digital possa impactar positivamente a vida de milhões de pessoas, ela deve ser pensada logo no início, na concepção do projeto, fase de iniciação na Gestão de Projetos de Acessibilidade <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>.
                </p>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Personas
            </h2>

            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 mb-4">
                  Em seu projeto, foram elaboradas personas para...
                </p>
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="persona1" className="checklist-checkbox" />
                    <Label htmlFor="persona1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Deficiência Visual (cegueira, baixa visão, daltonismo ou deficiência cromática)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona2" className="checklist-checkbox" />
                    <Label htmlFor="persona2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Deficiência Física (fraqueza, tremores, movimentos involuntários, paralisia, limitações da sensação, dor que impede movimento, ausência de membros)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona3" className="checklist-checkbox" />
                    <Label htmlFor="persona3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Deficiência Auditiva (surdez, baixa audição, surdocegueira)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona4" className="checklist-checkbox" />
                    <Label htmlFor="persona4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Deficiência na Fala (dificuldade para falar, volume insuficiente, gagueira, mudez)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona5" className="checklist-checkbox" />
                    <Label htmlFor="persona5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas Neurodiversas (dificuldades de diferentes graus para ver, escutar, falar, compreender e interagir socialmente)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona6" className="checklist-checkbox" />
                    <Label htmlFor="persona6" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Múltiplas Deficiências (combinação de duas ou mais deficiências anteriores)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona7" className="checklist-checkbox" />
                    <Label htmlFor="persona7" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Possíveis limitações decorrentes do envelhecimento (que podem ser de um ou mais grupos de deficiências)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona8" className="checklist-checkbox" />
                    <Label htmlFor="persona8" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com analfabetismo (analfabetismo digital e funcional níveis 1, 2 e 3)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona9" className="checklist-checkbox" />
                    <Label htmlFor="persona9" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Baixa Conectividade ou Uso de Dados Limitado (usuários com acesso precário à internet, planos limitados ou instabilidade de conexão)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona10" className="checklist-checkbox" />
                    <Label htmlFor="persona10" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Usuários com Dispositivos Antigos ou de Baixo Desempenho (pessoas com smartphones ou computadores mais antigos, pouco armazenamento ou memória limitada)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona11" className="checklist-checkbox" />
                    <Label htmlFor="persona11" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Baixo Letramento Digital (usuários com pouca familiaridade com tecnologia, interfaces ou navegação digital)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona12" className="checklist-checkbox" />
                    <Label htmlFor="persona12" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas Idosas (mesmo sem deficiência diagnosticada (usuários com possíveis limitações leves de visão, audição, cognição ou motricidade fina)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona13" className="checklist-checkbox" />
                    <Label htmlFor="persona13" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Cuidadores ou Acompanhantes (usuários que acessam o sistema em nome de outras pessoas (idosos, PCDs, crianças))
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona14" className="checklist-checkbox" />
                    <Label htmlFor="persona14" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas em Situações de Estresse ou Urgência (usuários que acessam o sistema em momentos críticos ou sob pressão)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona15" className="checklist-checkbox" />
                    <Label htmlFor="persona15" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Barreiras Linguísticas (pessoas não fluentes na língua do sistema)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona16" className="checklist-checkbox" />
                    <Label htmlFor="persona16" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Usuários de Diferentes Contextos Culturais (diferenças em símbolos)
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="persona17" className="checklist-checkbox" />
                    <Label htmlFor="persona17" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas com Restrições Temporárias (usuários afetados por condições transitórias (ex: braço imobilizado, ambiente escuro, sem óculos))
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Conscientização
            </h2>

            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 mb-4">
                  Na iniciação do projeto, é necessário garantir que a equipe de projeto esteja consciente sobre a questão da acessibilidade digital, dos direitos das pessoas com deficiência e do potencial de mercado desse público <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Em seu projeto, a equipe está consciente de...
                </p>
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="cons1" className="checklist-checkbox" />
                    <Label htmlFor="cons1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Quantidade de pessoas no mundo com algum tipo de deficiência.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons2" className="checklist-checkbox" />
                    <Label htmlFor="cons2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Quantidade de pessoas no Brasil com algum tipo de deficiência, segundo IBGE.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons3" className="checklist-checkbox" />
                    <Label htmlFor="cons3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Natureza da deficiência: congênita, hereditária, adquirida, temporária.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons4" className="checklist-checkbox" />
                    <Label htmlFor="cons4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Grupos mais comuns de tipos de deficiência.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons5" className="checklist-checkbox" />
                    <Label htmlFor="cons5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Quanto custa a acessibilidade?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons6" className="checklist-checkbox" />
                    <Label htmlFor="cons6" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Quanto tempo a mais o projeto precisará para implementar acessibilidade?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons7" className="checklist-checkbox" />
                    <Label htmlFor="cons7" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Quantas pessoas com deficiência vão usar meu aplicativo ou acessar meu sítio de Internet?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons8" className="checklist-checkbox" />
                    <Label htmlFor="cons8" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas cegas compram online?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons9" className="checklist-checkbox" />
                    <Label htmlFor="cons9" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas surdas assistem vídeos?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons10" className="checklist-checkbox" />
                    <Label htmlFor="cons10" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Pessoas tetraplégicas usam smartphone?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons11" className="checklist-checkbox" />
                    <Label htmlFor="cons11" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Legislação: A Convenção sobre os Direitos das Pessoas com Deficiência Comentada.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons12" className="checklist-checkbox" />
                    <Label htmlFor="cons12" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Legislação: PORTARIA Nº 3, DE 7 DE MAIO DE 2007.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons13" className="checklist-checkbox" />
                    <Label htmlFor="cons13" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Análise de mercado de software de acessibilidade digital.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons14" className="checklist-checkbox" />
                    <Label htmlFor="cons14" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Requisitos não funcionais incluem critérios de acessibilidade.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons15" className="checklist-checkbox" />
                    <Label htmlFor="cons15" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      A acessibilidade beneficia outros grupos além das pessoas com deficiência.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="cons16" className="checklist-checkbox" />
                    <Label htmlFor="cons16" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      A acessibilidade digital é fator de inovação, reputação e vantagem competitiva.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Planejamento
            </h2>

            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 mb-4">
                  É importante prever e elaborar a arquitetura para todos os públicos com deficiência, visando uma vida autônoma, com segurança e bem-estar <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Em seu planejamento, há...
                </p>
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="plan1" className="checklist-checkbox" />
                    <Label htmlFor="plan1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Atividades bem delineadas, cronogramas e atribuições de responsabilidade relacionadas à acessibilidade?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="plan2" className="checklist-checkbox" />
                    <Label htmlFor="plan2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Tarefas com critérios de sucesso que atendam pelo menos os níveis A e AA, segundo a documentação de acessibilidade (WCAG)?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="plan3" className="checklist-checkbox" />
                    <Label htmlFor="plan3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Acessibilidade foi definida como requisito essencial desde a fase de concepção do projeto?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="plan4" className="checklist-checkbox" />
                    <Label htmlFor="plan4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      As partes interessadas foram informadas da importância da acessibilidade?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="plan5" className="checklist-checkbox" />
                    <Label htmlFor="plan5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Há profissionais com conhecimento em acessibilidade na equipe ou consultores designados?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="plan6" className="checklist-checkbox" />
                    <Label htmlFor="plan6" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      O orçamento contempla recursos para implementar e testar acessibilidade?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="plan7" className="checklist-checkbox" />
                    <Label htmlFor="plan7" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Capacitação Contínua: Oferta de treinamentos regulares sobre acessibilidade digital para a equipe?
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="plan8" className="checklist-checkbox" />
                    <Label htmlFor="plan8" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Monitoramento e Avaliação: Implementação de processos para avaliar e monitorar a acessibilidade ao longo do projeto?
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Referências Bibliográficas
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div id="ref1" className="reference-item">
                    <p className="text-base text-gray-700">
                      1. DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Bibliografia
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      A Convenção sobre Direitos das Pessoas com Deficiência comentada / Coordenação de Ana Paula Crosara de Resende e Flavia Maria de Paiva Vital . _ Brasília : Secretaria Especial dos Direitos Humanos, 2008. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/convencao-direitos-pessoas-deficiencia-comentada.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/convencao-direitos-pessoas-deficiencia-comentada.pdf</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      BRASIL. Secretaria de Logística e Tecnologia da Informação. Portaria nº 3, de 7 de maio de 2007. Institucionaliza o Modelo de Acessibilidade em Governo Eletrônico – e-MAG no âmbito do Sistema de Administração dos Recursos de Informação e Informática – SISP. Diário Oficial da União, Brasília, DF, 7 maio 2007. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/legislacao/portaria3_eMAG.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/legislacao/portaria3_eMAG.pdf</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      MORDOR INTELLIGENCE. Digital Accessibility Software Market Size & Share Analysis- Growth Trends & Forecasts (2024-2029). Disponível em: <a href="https://www.mordorintelligence.com/industry-reports/digital-accessibility-software-market" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.mordorintelligence.com/industry-reports/digital-accessibility-software-market</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      WORLD WIDE WEB CONSORTIUM. Web Content Accessibility Guidelines (WCAG) 2.1. Recomendação W3C, 21 setembro 2023. Disponível em: <a href="https://www.w3.org/TR/WCAG21/#sotd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.w3.org/TR/WCAG21/#sotd</a>. Acesso em: 9 Mai. 2024.
                    </p>
                  </div>

                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: <a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf</a>. Acesso em: 03 Jun. 2025.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
