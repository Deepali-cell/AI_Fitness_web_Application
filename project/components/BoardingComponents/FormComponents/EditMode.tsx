import { useState } from "react";
import { InputField, Label, SelectField, TagField } from "./Fields";
import { UserDetailType } from "@/types/healthForm.type";
import { HandleChangeType } from "@/types/field.type";

interface EditModeProps {
  initialData: UserDetailType;
  onSave: (finalData: UserDetailType) => void;
  onCancel: () => void;
}
interface TagInputsState {
  allergy: string;
  disease: string;
  habit: string;
}
export const EditMode = ({ initialData, onSave, onCancel }: EditModeProps) => {
  const [data, setData] = useState({
    age: initialData?.age || 0,
    gender: initialData?.gender || "Male",
    weight: initialData?.weight || 0.0,
    height: initialData?.height || 0.0,
    bloodGroup: initialData?.bloodGroup || "O+",
    diet: initialData?.diet || "Veg",
    activity: initialData?.activity || "Moderate",
    sleepHours: initialData?.sleepHours || 7,
    hydration: initialData?.hydration || 2.0,
    goal: initialData?.goal || "Maintenance",
    profession: initialData?.profession || "",
    allergies: initialData?.allergies || [],
    chronicDiseases: initialData?.chronicDiseases || [],
    habits: initialData?.habits || [],
    onTreatment: initialData?.onTreatment || false,
  });
  const [tagInputs, setTagInputs] = useState<TagInputsState>({
    allergy: "",
    disease: "",
    habit: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    let finalValue: string | number | boolean;

    if (type === "checkbox") {
      finalValue = (e.target as HTMLInputElement).checked;
    } else if (type === "number") {
      finalValue = value === "" ? "" : Number(value);
    } else {
      finalValue = value;
    }
    setData((prev) => ({ ...prev, [name]: finalValue }));
  };
  const addTag = (
    field: keyof UserDetailType,
    inputKey: keyof TagInputsState,
  ) => {
    const val = tagInputs[inputKey].trim();
    if (!val) return;

    const currentTags = data[field] as string[];

    setData({ ...data, [field]: [...currentTags, val] });
    setTagInputs({ ...tagInputs, [inputKey]: "" });
  };
  const removeTag = (field: keyof UserDetailType, index: number) => {
    const currentTags = data[field] as string[];
    setData({ ...data, [field]: currentTags.filter((_, i) => i !== index) });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-black min-h-screen text-white animate-in fade-in duration-700">
      {/* Header*/}

      <div className="flex justify-between items-end border-b border-zinc-900 pb-8 relative">
        <div className="absolute bottom-0 left-0 h-[1px] w-40 bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
        <div>
          <p className="text-white text-4xl font-extralight tracking-tighter">
            Record
            <span className="text-blue-500 font-bold drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]">
              Bio-Profile
            </span>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="text-zinc-500 uppercase text-[10px]"
          >
            Abort
          </button>
          <button
            onClick={() => onSave(data)}
            className="bg-white text-black px-8 py-2.5 rounded-xl font-black text-[10px] uppercase"
          >
            Save
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10">
        {/* Section 01 */}
        <div className="space-y-6">
          <p className="text-red-500 text-[10px] font-black border-l-2 border-red-500 pl-3 uppercase tracking-widest">
            01. Body Details
          </p>
          <div className="flex gap-3">
            <InputField
              label="Age"
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
            />
            <SelectField
              label="Blood"
              name="bloodGroup"
              value={data.bloodGroup}
              onChange={handleChange}
              options={["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"]}
            />
          </div>
          <div className="flex gap-3">
            <InputField
              label="Weight (kg)"
              type="number"
              name="weight"
              value={data.weight}
              onChange={handleChange}
            />
            <InputField
              label="Height (cm)"
              type="number"
              name="height"
              value={data.height}
              onChange={handleChange}
            />
          </div>
          <SelectField
            label="Gender"
            name="gender"
            value={data.gender}
            onChange={handleChange}
            options={["Male", "Female", "Other"]}
          />
          <InputField
            label="Profession"
            type="text"
            name="profession"
            value={data.profession}
            onChange={handleChange}
            placeholder="e.g. Developer"
          />
        </div>

        {/* Section 02 */}
        <div className="space-y-6">
          <p className="text-red-500 text-[10px] font-black border-l-2 border-red-500 pl-3 uppercase tracking-widest">
            02. Daily Routine / Lifestyle
          </p>
          <div className="grid grid-cols-2 gap-3">
            <SelectField
              label="Diet"
              name="diet"
              value={data.diet}
              onChange={handleChange}
              options={["Veg", "Non-Veg", "Vegan", "Keto"]}
            />
            <SelectField
              label="Goal"
              name="goal"
              value={data.goal}
              onChange={handleChange}
              options={[
                "Maintenance",
                "WeightLoss",
                "WeightGain",
                "MuscleGain",
                "Healthy",
              ]}
            />
          </div>
          <SelectField
            label="Activity level"
            name="activity"
            value={data.activity}
            onChange={handleChange}
            options={["Sedentary", "Moderate", "Active", "Athlete"]}
          />
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Sleep (Hrs)"
              type="number"
              name="sleepHours"
              value={data.sleepHours}
              onChange={handleChange}
            />
            <InputField
              label="Hydration (L)"
              type="number"
              name="hydration"
              value={data.hydration}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Section 03 - 2x2 Grid Layout */}
        <div className="lg:col-span-full border-t border-zinc-900 pt-10">
          <p className="text-red-500 text-[10px] font-black border-l-2 border-red-500 pl-3 uppercase tracking-widest mb-8">
            03. Clinical Data
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center justify-between h-fit">
              <Label>Active Treatment?</Label>
              <input
                type="checkbox"
                name="onTreatment"
                checked={data.onTreatment}
                onChange={handleChange}
                className="w-5 h-5 accent-blue-600"
              />
            </div>

            <TagField
              label="Allergies"
              tags={data.allergies}
              value={tagInputs.allergy}
              onChange={(e: HandleChangeType) =>
                setTagInputs({ ...tagInputs, allergy: e.target.value })
              }
              onAdd={() => addTag("allergies", "allergy")}
              onRemove={(i: number) => removeTag("allergies", i)}
              placeholder="Add Allergy..."
            />

            <TagField
              label="Chronic Diseases"
              tags={data.chronicDiseases}
              value={tagInputs.disease}
              onChange={(e: HandleChangeType) =>
                setTagInputs({ ...tagInputs, disease: e.target.value })
              }
              onAdd={() => addTag("chronicDiseases", "disease")}
              onRemove={(i: number) => removeTag("chronicDiseases", i)}
              placeholder="Add Disease..."
            />

            <TagField
              label="Habits"
              tags={data.habits}
              value={tagInputs.habit}
              onChange={(e: HandleChangeType) =>
                setTagInputs({ ...tagInputs, habit: e.target.value })
              }
              onAdd={() => addTag("habits", "habit")}
              onRemove={(i: number) => removeTag("habits", i)}
              placeholder="Add Habit..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};
