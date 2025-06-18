import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ResetButton } from "@/components/ui/reset-button"
import { ProgressWidget } from "@/components/ui/progress-widget"

export default function ObjetivosPage() {
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
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mb-6 mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            <Target className="w-10 h-10 text-white relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-60"></div>
          </div>

          <h1 className="page_title">
            Geração de Conteúdo
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Boas práticas para garantir acessibilidade na produção de conteúdo digital
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <ResetButton />

          <Card>
            <CardContent className="p-6">
              <p className="corpo-pagina">
                Para produzir conteúdo digital acessível, a primeira etapa é compreender que tudo o que comunicamos impacta as pessoas; por isso, é fundamental começar pela forma como abordamos nosso público e criar a cultura e o hábito de acessibilidade digital em nossas equipes.
              </p>
            </CardContent>
          </Card>

            <h2 className="page_subtitle">
              Termos
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="term1" className="checklist-checkbox" />
                    <Label htmlFor="term1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Sempre utilize o termo "pessoas com deficiência" (PCD) e depois complemente: visual, física, intelectual, múltipla, pessoa surda, pessoa cega, usuária de cadeira de rodas (cadeirante), tetraplégica, paraplégica, pessoa com nanismo, com baixa visão, pessoa autista, disléxica, neurodiversa ou neurodivergente.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="term2" className="checklist-checkbox" />
                    <Label htmlFor="term2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evite termos capacitistas (ex: "portador", "sofre de", "deficiente", "normal").
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="term3" className="checklist-checkbox" />
                    <Label htmlFor="term3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Prefira termos neutros e respeitosos que não infantilizem ou romantizem a deficiência.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="term4" className="checklist-checkbox" />
                    <Label htmlFor="term4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Sempre atualize a terminologia conforme as diretrizes oficiais (ex: ONU, ABNT, MEC, Movimento PcD).
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Textos
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="text1" className="checklist-checkbox" />
                    <Label htmlFor="text1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Usar textos descomplicados e objetivos.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text2" className="checklist-checkbox" />
                    <Label htmlFor="text2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Usar de palavras conhecidas.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text3" className="checklist-checkbox" />
                    <Label htmlFor="text3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evitar figuras de linguagem e frases com "senso de urgência".
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text4" className="checklist-checkbox" />
                    <Label htmlFor="text4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Usar pontuação adequada.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text5" className="checklist-checkbox" />
                    <Label htmlFor="text5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evitar frases extensas (ideal é ter de 15 a 20 palavras).
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text6" className="checklist-checkbox" />
                    <Label htmlFor="text6" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Usar preferencialmente a ordem direta nas orações.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text7" className="checklist-checkbox" />
                    <Label htmlFor="text7" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evitar o uso de jargões técnicos ou explicar quando inevitáveis.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text8" className="checklist-checkbox" />
                    <Label htmlFor="text8" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Dar preferência a voz ativa e evitar ambiguidade.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="text9" className="checklist-checkbox" />
                    <Label htmlFor="text9" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Criar títulos e subtítulos explicativos e hierarquizados.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Descrição de Imagens
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="img1" className="checklist-checkbox" />
                    <Label htmlFor="img1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Identificar o tipo de imagem e personagem (foto, ilustração, mapa, gráfico... e "o que/quem").
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="img2" className="checklist-checkbox" />
                    <Label htmlFor="img2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Localizar (onde).
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="img3" className="checklist-checkbox" />
                    <Label htmlFor="img3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Descrever a ação (o que faz, como faz).
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="img4" className="checklist-checkbox" />
                    <Label htmlFor="img4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Referenciar.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="img5" className="checklist-checkbox" />
                    <Label htmlFor="img5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Descrever expressões faciais ou tons emocionais relevantes.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Descrição de Imagens Complexas
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="imgc1" className="checklist-checkbox" />
                    <Label htmlFor="imgc1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Posicionar gráfico, quadrinhos, quadros e outras imagens complexas em um local separado.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="imgc2" className="checklist-checkbox" />
                    <Label htmlFor="imgc2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Descrição sucinta no texto alternativo.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="imgc3" className="checklist-checkbox" />
                    <Label htmlFor="imgc3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Oferecer versão textual equivalente da informação visual.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Ícones
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="icon1" className="checklist-checkbox" />
                    <Label htmlFor="icon1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Adicionar iconografia.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="icon2" className="checklist-checkbox" />
                    <Label htmlFor="icon2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Adicionar ícone e texto.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="icon3" className="checklist-checkbox" />
                    <Label htmlFor="icon3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Adicionar texto alternativo para ícones clicáveis.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="icon4" className="checklist-checkbox" />
                    <Label htmlFor="icon4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Descrever no texto alternativo, quando necessário usá-lo, a ação da pessoa usuária e para onde será direcionada.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="icon5" className="checklist-checkbox" />
                    <Label htmlFor="icon5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Garantir que os ícones sejam reconhecíveis em escala reduzida.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Mídias de Vídeo
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="video1" className="checklist-checkbox" />
                    <Label htmlFor="video1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Adicionar descritivo curto para vídeos.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="video2" className="checklist-checkbox" />
                    <Label htmlFor="video2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Optar por legendas: Open Caption e Closed Caption para vídeos.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="video3" className="checklist-checkbox" />
                    <Label htmlFor="video3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Incluir audiodescrição sincronizada ou alternativa.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="video4" className="checklist-checkbox" />
                    <Label htmlFor="video4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Disponibilizar roteiro do vídeo em texto.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="video5" className="checklist-checkbox" />
                    <Label htmlFor="video5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Incluir janela de Libras, quando possível.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Autodescrição
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="auto1" className="checklist-checkbox" />
                    <Label htmlFor="auto1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Adicionar autodescrição no roteiro dos vídeos.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="auto2" className="checklist-checkbox" />
                    <Label htmlFor="auto2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Apresentar a autodescrição no início, antes da fala principal.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="auto3" className="checklist-checkbox" />
                    <Label htmlFor="auto3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Garantir que a autodescrição seja coerente com o propósito do conteúdo.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Podcasts
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="pod1" className="checklist-checkbox" />
                    <Label htmlFor="pod1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Transcrever o conteúdo do episódio.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="pod2" className="checklist-checkbox" />
                    <Label htmlFor="pod2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Incluir além das partes faladas, como sons de fundos, efeitos sonoros, quem está falando etc.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="pod3" className="checklist-checkbox" />
                    <Label htmlFor="pod3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Inserir um avatar na página falada para a interpretação do texto transcrito para Libras.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="pod4" className="checklist-checkbox" />
                    <Label htmlFor="pod4" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Considerar também formato de vídeo.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="pod5" className="checklist-checkbox" />
                    <Label htmlFor="pod5" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Indicar, quando necessário, pausas, risos ou mudanças de entonação relevantes.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Hashtags e Emojis
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="hash1" className="checklist-checkbox" />
                    <Label htmlFor="hash1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Em hashtags, utilize a primeira letra de cada palavra em maiúsculas para que leitores possam identificar palavras corretamente.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="hash2" className="checklist-checkbox" />
                    <Label htmlFor="hash2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Não abusar de emojis, pois nem sempre sua descrição é suficiente para um bom entendimento.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="hash3" className="checklist-checkbox" />
                    <Label htmlFor="hash3" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evitar mensagens compostas apenas por emojis.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="page_subtitle">
              Hiperlinks
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="checklist-item">
                    <Checkbox id="link1" className="checklist-checkbox" />
                    <Label htmlFor="link1" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Descrição de links e botões devem ser compreensíveis de maneira isolada.
                    </Label>
                  </div>

                  <div className="checklist-item">
                    <Checkbox id="link2" className="checklist-checkbox" />
                    <Label htmlFor="link2" className="text-[1.1rem] leading-[1.75] text-gray-700">
                      Evite links compostos apenas por ícones ou palavras genéricas.
                    </Label>
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
                      ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: <a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf</a>. Acesso em: 03 Jun. 2025.
                    </p>
                  </div>

                  <div className="reference-item">
                    <p className="text-base text-gray-700">
                      DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf</a>. Acesso em: 9 Mai. 2024.
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
