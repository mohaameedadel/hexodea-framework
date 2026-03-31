import { cn } from "~/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  variant?: "default" | "main";
}

export default function Button({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  variant = "main",
}: ButtonProps) {
  const _renderContent = () => {
    if (loading) {
      return (
        <div>
          <span className="loading loading-spinner me-2"></span>
          Loading
        </div>
      );
    }
    return children;
  };
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        className,
        variant === "main" &&
          "btn bg-main text-white px-10 py-2 rounded-[10px] text-sm font-medium block text-center",
        variant === "default" &&
          "btn bg-[#FAFAFA] text-dark px-10 py-2 rounded-[10px] border border-[#FAFAFA] text-sm font-medium block text-center",
      )}
    >
      {_renderContent()}
    </button>
  );
}
