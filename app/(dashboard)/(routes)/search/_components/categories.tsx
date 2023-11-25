"use client";

import { Category } from "@prisma/client";

import {
    FcCommandLine, // Python
    FcGlobe, // React
    FcEngineering, // Java    
    FcStatistics, // Data Science
    FcElectronics, // Machine Learning
    FcAndroidOs, // Artificial Intelligence    
    FcFolder, // Other
} from "react-icons/fc";

import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Python": FcCommandLine,
    "React": FcGlobe,
    "Java": FcEngineering,
    "Data Science": FcStatistics,
    "Machine Learning": FcElectronics,    
    "Artificial Intelligence": FcAndroidOs,
    "Other": FcFolder,
};

export const Categories = ({
    items,
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
          {items.map((item) => (
            <CategoryItem
              key={item.id}
              label={item.name}
              icon={iconMap[item.name]}
              value={item.id}
            />
          ))}
        </div>
      )
    }