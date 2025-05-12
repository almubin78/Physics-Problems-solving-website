import  { useState } from "react";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSnippet({ language = "javascript", code = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg mb-6">
      <div className="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] text-white text-sm font-mono">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 hover:text-green-400"
        >
          <Copy className="w-4 h-4" />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <SyntaxHighlighter language={language} style={oneDark} customStyle={{ margin: 0 }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
