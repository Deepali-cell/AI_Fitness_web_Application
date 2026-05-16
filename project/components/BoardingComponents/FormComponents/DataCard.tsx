interface DataCardProps {
  label: string;
  value: string | number | undefined | null;
  icon: React.ReactNode;
}

interface TagDisplayBoxProps {
  label: string;
  tags: string[] | undefined | null;
  color?: string;
}

export const DataCard = ({ label, value, icon }: DataCardProps) => (
  <div className="group relative bg-zinc-950 border border-zinc-900 p-6 rounded-2xl flex items-center gap-5 transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] overflow-hidden">
    <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="text-3xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10">
      {icon}
    </div>
    <div className="z-10">
      <p className="text-[14px] text-blue-700 mb-1.5 font-bold">{label}</p>
      <p className=" tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
        {value || "--"}
      </p>
    </div>
  </div>
);

export const TagDisplayBox = ({ label, tags, color }: TagDisplayBoxProps) => (
  <div className="group bg-zinc-950 border border-zinc-900 p-6 rounded-2xl transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.03)]">
    <p className="text-[14px] text-blue-700 mb-1.5 font-bold">{label}</p>
    <div className="flex flex-wrap gap-2">
      {tags && tags.length > 0 ? (
        tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 rounded-md text-white tracking-widest hover:border-blue-500/50 transition-all cursor-default shadow-sm"
          >
            {tag}
          </span>
        ))
      ) : (
        <span className="text-[10px] text-white tracking-[0.2em]">{"--"}</span>
      )}
    </div>
  </div>
);
