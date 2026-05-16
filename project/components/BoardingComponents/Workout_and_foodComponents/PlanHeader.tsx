import { Trash2 } from "lucide-react";

interface HeaderProps {
  hasPlan: boolean;
  label: string;
  onAction: () => void;
  subHeading: string;
}

const PlanHeader = ({ hasPlan, label, onAction, subHeading }: HeaderProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Weekly <span className="text-cyan-400 italic">{label}</span>
          </h1>
          <p className="text-slate-300 mt-2 font-medium">{subHeading}</p>
        </div>

        {hasPlan && (
          <button
            onClick={onAction}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-red-50/50 backdrop-blur-sm text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all duration-300 border border-red-100 shadow-sm"
          >
            <Trash2
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            {label}
          </button>
        )}
      </div>
    </>
  );
};

export default PlanHeader;
