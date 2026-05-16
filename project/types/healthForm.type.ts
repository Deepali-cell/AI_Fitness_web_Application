export interface UserDetailType {
  age: number | "";
  gender: "Male" | "Female" | "Other";
  weight: number | "";
  height: number | "";
  bloodGroup?: string;
  diet: "Veg" | "Non-Veg" | "Vegan" | "Keto" | "";
  activity: "Sedentary" | "Moderate" | "Active" | "HighActive" | "";
  sleepHours: number;
  hydration: number;
  profession?: string;
  goal: "Weight Loss" | "Muscle Gain" | "Maintenance" | "";
  allergies: string[];
  chronicDiseases: string[];
  habits: string[];
  onTreatment: boolean;
}
