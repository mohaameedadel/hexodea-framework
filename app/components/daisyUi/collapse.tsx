import { cn } from "~/utils/cn";

interface CollapseProps {
  question: string;
  answer: string;
  open?: boolean;
}
export default function Collapse({ question, answer, open }: CollapseProps) {
  return (
    <div
      tabIndex={0}
      className={cn(
        open && "collapse-open",
        "collapse collapse-plus group border border-base-300 p-4 shadow-[0px_1px_4px_0px_#19213D0F] bg-white focus:bg-[linear-gradient(95.31deg,rgba(241,240,251,0.5)_0%,rgba(234,232,255,0.5)_99.98%)] transition-colors duration-300"
      )}
    >
      <div className="collapse-title font-semibold text-dark group-focus:text-main transition-colors duration-300">
        {question}
      </div>
      <div className="collapse-content text-sm text-muted">{answer}</div>
    </div>
  );
}
