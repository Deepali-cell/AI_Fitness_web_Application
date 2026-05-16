import { Utensils, Droplets, Apple } from "lucide-react";

const FoodPlanNote = ({
  length,
  handleFinalize,
}: {
  length: number;
  handleFinalize: () => void;
}) => {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-10 bg-white border border-slate-100 rounded-[2rem] p-8 shadow-2xl shadow-slate-200/50">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Diet Summary <Apple className="text-red-500" size={24} />
        </h2>

        <div className="space-y-4">
          {/* Diet Guidance */}
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <h3 className="font-bold text-orange-700 flex items-center gap-2 mb-2 italic">
              <Utensils size={18} /> Daily Guide
            </h3>
            <ul className="text-xs text-orange-800/80 space-y-1 font-medium">
              <li>• High protein (Eggs, Chicken, Paneer)</li>
              <li>• Complex carbs (Oats, Brown Rice)</li>
              <li>• Healthy fats (Nuts, Avocado)</li>
            </ul>
          </div>

          {/* Hydration */}
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-700 flex items-center gap-2 mb-1">
              <Droplets size={18} /> Hydration
            </h3>
            <p className="text-xs text-blue-800/70 leading-relaxed font-medium">
              Drink 2–3 liters of water daily for better recovery and skin.
            </p>
          </div>

          <div className="py-4 border-t border-slate-100">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              Structure
            </p>
            <div className="flex justify-between text-sm font-semibold">
              <span>Duration</span>
              <span className="text-green-600">7 Days</span>
            </div>
            <div className="flex justify-between text-sm font-semibold mt-1">
              <span>Total Meals</span>
              <span className="text-green-600">{length} Added</span>
            </div>
          </div>

          <button
            onClick={handleFinalize}
            className="w-full py-4 rounded-2xl font-bold bg-slate-900 hover:bg-green-600 text-white transition-all shadow-lg active:scale-95"
          >
            Finalize Food Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodPlanNote;
