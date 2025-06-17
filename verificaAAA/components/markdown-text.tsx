interface MarkdownTextProps {
  children: string
}

export function MarkdownText({ children }: MarkdownTextProps) {
  const formatText = (text: string) => {
    // Split by double line breaks for paragraphs
    const paragraphs = text.split("\n\n")

    return paragraphs.map((paragraph, pIndex) => {
      // Handle bullet points
      if (paragraph.includes("•")) {
        const lines = paragraph.split("\n")
        const beforeList = lines.find((line) => !line.includes("•"))
        const listItems = lines.filter((line) => line.includes("•"))

        return (
          <div key={pIndex} className="mb-6">
            {beforeList && <p className="mb-4 text-lg leading-relaxed text-gray-700">{formatInlineText(beforeList)}</p>}
            <ul className="list-none space-y-2 ml-4">
              {listItems.map((item, iIndex) => (
                <li key={iIndex} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">{formatInlineText(item.replace("•", "").trim())}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      }

      // Regular paragraphs
      return (
        <p key={pIndex} className="mb-6 text-lg leading-relaxed text-gray-700">
          {formatInlineText(paragraph)}
        </p>
      )
    })
  }

  const formatInlineText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/)

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2)
        return (
          <strong key={index} className="font-bold text-gray-900">
            {boldText}
          </strong>
        )
      }
      return part
    })
  }

  return <div>{formatText(children)}</div>
}
