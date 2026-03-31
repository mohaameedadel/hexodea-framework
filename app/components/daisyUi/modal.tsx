import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        {/* close button */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        {children}
      </div>

      {/* backdrop */}
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
}
