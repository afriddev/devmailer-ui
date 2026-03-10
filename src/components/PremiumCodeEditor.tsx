import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-dart";
import "prismjs/themes/prism-tomorrow.css";

type PremiumCodeEditorProps = {
  value: string;
  onValueChange: (value: string) => void;
  language: string;
  minHeight?: number;
};

export default function PremiumCodeEditor({
  value,
  onValueChange,
  language,
  minHeight = 260,
}: PremiumCodeEditorProps) {
  return (
    <Editor
      value={value}
      onValueChange={onValueChange}
      highlight={(code) =>
        highlight(code, languages[language] || languages.javascript, language)
      }
      padding={24}
      className="premium-editor rounded-none shadow-none"
      style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: "0.95rem",
        lineHeight: "1.85",
        minHeight: `${minHeight}px`,
        caretColor: "#e8ded0",
      }}
    />
  );
}
