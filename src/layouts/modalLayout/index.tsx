import React from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}
const ModalLayout: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  if (!isOpen) return null;

  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto  flex items-center  justify-center backdrop-blur-xs ">
      {/* Overlay */}
      <div
        className="fixed inset-0  bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="flex min-h-full items-center  justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-zinc-50 shadow-2xl  transition-all ">
          {/* Header */}
          {title && (
            <div className=" px-4 py-3 border-b">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
          )}
          {/* Content */}
          <div className=" px-4 py-5 w-[600px] h-[300px]  flex items-center justify-center">
            <div className="space-y-4  ">
              {children}
              {/* Example footer with actions */}
            </div>
          </div>
          {/* Optional: Add a footer here if needed */}
        </div>
      </div>
      
    </div>
  );
};
export default ModalLayout;
