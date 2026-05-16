import path from "path";
import { createObjectCsvWriter } from "csv-writer";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

async function generateSyntheticData(targetCount: number) {
  const records = [];

  for (let i = 0; i < targetCount; i++) {
    const age = Math.floor(random(18, 75));
    const gender = Math.random() > 0.5 ? 1 : 0;
    const bmi = parseFloat(random(16, 38).toFixed(2));
    const avg_steps = Math.floor(random(1000, 12000));
    const sleep = parseFloat(random(4, 10).toFixed(1));
    const chronic_diseases = Math.random() > 0.7 ? Math.floor(random(1, 3)) : 0;
    const on_treatment = chronic_diseases > 0 && Math.random() > 0.5 ? 1 : 0;

    // Thoda logical dependency rakhte hain taaki model seekh sake
    // Agar steps kam hain aur BMI zyada, toh net_calories zyada rakhte hain
    let net_calories = random(-500, 500);
    if (avg_steps < 3000 && bmi > 28) net_calories += 400;

    records.push({
      age,
      gender,
      bmi,
      avg_steps,
      avg_sleep: sleep,
      net_calories: net_calories.toFixed(2),
      chronic_diseases,
      on_treatment,
      activity_level: avg_steps > 8000 ? 2 : avg_steps > 4000 ? 1 : 0,
    });
  }

  const csvWriter = createObjectCsvWriter({
    path: path.join(process.cwd(), "ml/datasets/synthetic_health_data.csv"),
    header: [
      { id: "age", title: "age" },
      { id: "gender", title: "gender" },
      { id: "bmi", title: "bmi" },
      { id: "avg_steps", title: "avg_steps" },
      { id: "avg_sleep", title: "avg_sleep" },
      { id: "net_calories", title: "net_calories" },
      { id: "chronic_diseases", title: "chronic_diseases" },
      { id: "on_treatment", title: "on_treatment" },
      { id: "activity_level", title: "activity_level" },
    ],
  });

  await csvWriter.writeRecords(records);
  console.log(`✅ Generated ${targetCount} synthetic records!`);
}

generateSyntheticData(500);
