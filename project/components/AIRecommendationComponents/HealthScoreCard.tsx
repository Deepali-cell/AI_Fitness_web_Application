"use client";

interface Props {
  score: number;
}

const HealthScoreCard = ({ score }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 flex flex-col items-center justify-center">
      <div className="absolute bottom-[-20%] left-[-20%] w-[200px] h-[200px] bg-cyan-400/10 blur-[100px]" />

      <div className="relative z-10">
        <p className="text-zinc-500 text-xs uppercase tracking-[0.25em] font-bold text-center mb-6">
          Health Score
        </p>

        <div className="relative flex items-center justify-center">
          <svg className="w-40 h-40 transform -rotate-90">
            <circle
              className="text-white/10"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="65"
              cx="80"
              cy="80"
            />

            <circle
              className="text-cyan-400"
              strokeWidth="8"
              strokeDasharray={408}
              strokeDashoffset={408 - (408 * score) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="65"
              cx="80"
              cy="80"
            />
          </svg>

          <div className="absolute text-center">
            <h3 className="text-5xl font-black">{score}</h3>

            <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
              Score
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthScoreCard;
