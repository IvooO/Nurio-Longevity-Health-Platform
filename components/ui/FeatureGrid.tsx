import React from 'react';
import { CheckCircle2, LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  columns?: number;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, title, columns = 3 }) => {
  const gridCols = columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

  return (
    <div className="py-4">
      {title && <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{title}</h2>}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-8`}>
        {features.map((feature, index) => {
          const Icon = feature.icon || CheckCircle2;
          return (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                 <Icon className={`w-6 h-6 ${feature.icon ? 'text-[#8B9E8B]' : 'text-emerald-500'}`} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureGrid;