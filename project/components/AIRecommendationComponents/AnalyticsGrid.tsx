"use client";

import AnalyticsCard from "./AnalyticsCard";

interface Analytics {
  label: string;
  value: string | number;
  status: string;
}

interface Props {
  analytics: Analytics[];
}

const AnalyticsGrid = ({ analytics }: Props) => {
  return (
    <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
      {analytics?.map((stat, index) => (
        <AnalyticsCard
          key={index}
          label={stat.label}
          value={stat.value}
          status={stat.status}
        />
      ))}
    </div>
  );
};

export default AnalyticsGrid;
