"use client";
import { useState } from "react";
import { ViewMode } from "./FormComponents/ViewMode";
import { EditMode } from "./FormComponents/EditMode";
import { UserDetailType } from "@/types/healthForm.type";

interface HealthFormProps {
  data: UserDetailType;
  updateData: (newData: UserDetailType) => void;
}
const HealthForm = ({ data, updateData }: HealthFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-black text-white p-4">
      {isEditing ? (
        <EditMode
          initialData={data}
          onSave={(finalData: UserDetailType) => {
            updateData(finalData);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ViewMode data={data} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};

export default HealthForm;
