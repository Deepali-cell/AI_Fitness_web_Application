import { UserDetailType } from "@/types/healthForm.type";
import { DataCard, TagDisplayBox } from "./DataCard";

interface ViewModeProps {
  data: UserDetailType;
  onEdit: () => void;
}
export const ViewMode = ({ data, onEdit }: ViewModeProps) => (
  <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
    {/* Header Section with Blue Neon Line */}
    <div className="flex justify-between items-end border-b border-zinc-900 pb-8 relative">
      <div className="absolute bottom-0 left-0 h-[1px] w-40 bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
      <div>
        <p className="text-white text-4xl font-extralight tracking-tighter">
          My Body
          <span className="text-blue-500 font-bold drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]">
            Information
          </span>
        </p>
      </div>
      <button
        onClick={onEdit}
        className="group relative text-[10px] font-black tracking-[0.3em] uppercase border border-blue-900/50 text-blue-400 px-8 py-3 rounded-full overflow-hidden hover:text-white transition-all duration-500 active:scale-95"
      >
        <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <span className="relative z-10">Re-Scan Data</span>
      </button>
    </div>

    {/* Section 01 */}
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <p className="text-red-600 text-[10px] uppercase tracking-[0.4em] font-extrabold">
          01. Body Details
        </p>
        <div className="h-[1px] flex-grow bg-zinc-900" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <DataCard label="Age Metric" value={`${data.age} Yrs`} icon="🧬" />
        <DataCard label="Mass Index" value={`${data.weight} kg`} icon="⚖️" />
        <DataCard label="Height" value={`${data.height} cm`} icon="📏" />
        <DataCard label="Genetic Type" value={data.bloodGroup} icon="🩸" />
      </div>
    </div>

    {/* Section 02 */}
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <p className="text-red-600 text-[10px] uppercase tracking-[0.4em] font-extrabold">
          02.Daily Routine / Lifestyle
        </p>
        <div className="h-[1px] flex-grow bg-zinc-900" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <DataCard label="Primary Goal" value={data.goal} icon="🎯" />
        <DataCard label="Activity Level" value={data.activity} icon="⚡" />
        <DataCard
          label="Sleep Pattern"
          value={`${data.sleepHours} Hrs`}
          icon="🌙"
        />
        <DataCard
          label="Water Intake"
          value={`${data.hydration} L/d`}
          icon="💧"
        />
        <DataCard label="Daily Workflow" value={data.profession} icon="💼" />
        <DataCard label="Diet Type" value={data.diet} icon="🍽️" />
      </div>
    </div>

    {/* Section 03 - High Glow Section */}
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <p className="text-red-600 text-[10px] uppercase tracking-[0.4em] font-extrabold">
          03. Clinical Data
        </p>
        <div className="h-[1px] flex-grow bg-zinc-900" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TagDisplayBox
          label="Medical Conditions"
          tags={data.chronicDiseases}
          color="text-red-500"
        />
        <TagDisplayBox
          label="My Allergies"
          tags={data.allergies}
          color="text-orange-500"
        />
        <TagDisplayBox
          label="Daily Habits"
          tags={data.habits}
          color="text-blue-500"
        />

        {/* Highlighted Status Card */}
        <div
          className={`relative bg-zinc-950 border p-6 rounded-2xl flex justify-between items-center overflow-hidden transition-all duration-700 ${data.onTreatment ? "border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.2)]" : "border-zinc-900"}`}
        >
          {data.onTreatment && (
            <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
          )}
          <div className="z-10">
            <p className="text-[14px] text-blue-700 mb-1.5 font-bold">
              Any Ongoing Treatment ?
            </p>
          </div>
          <span
            className={`z-10 px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${data.onTreatment ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-zinc-900 text-zinc-500"}`}
          >
            {data.onTreatment ? "Confirmed" : "None"}
          </span>
        </div>
      </div>
    </div>
  </div>
);
