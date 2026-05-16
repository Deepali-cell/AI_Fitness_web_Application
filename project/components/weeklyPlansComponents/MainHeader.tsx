import { CalendarDays } from "lucide-react";

const MainHeader = () => {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-3 bg-[#10101a] border border-[#1d1d2b] px-5 py-3 rounded-2xl">
        <CalendarDays className="text-blue-500" size={24} />

        <div>
          <h1 className="text-3xl font-bold text-white">
            Weekly Fitness Plans
          </h1>

          <p className="text-sm text-gray-500">Workout & nutrition overview</p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
