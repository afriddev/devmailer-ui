import { useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import type { SdkOption } from "../data/siteContent";

type DocsCodePartProps = {
  codeObj: SdkOption;
};

export default function DocsCodePart({ codeObj }: DocsCodePartProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(codeObj.installCommand);
    setIsCopied(true);
  };

  return (
    <div className="command-line rounded-none shadow-none">
      <div className="min-w-0">
        <p className="label mb-2">{codeObj.installLabel}</p>
        <code className="block overflow-x-auto whitespace-pre text-sm text-[var(--muted-strong)] lg:text-base">
          {codeObj.installCommand}
        </code>
      </div>

      <button
        onClick={handleCopyToClipboard}
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-[var(--line)] text-[var(--muted-strong)] transition hover:bg-[rgba(21,19,17,0.06)]"
        aria-label="Copy to clipboard"
      >
        {isCopied ? <MdDone className="text-xl text-[var(--accent)]" /> : <AiOutlineCopy className="text-xl" />}
      </button>
    </div>
  );
}
