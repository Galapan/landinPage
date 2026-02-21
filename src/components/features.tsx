import type { Feature } from "../types/type";
import { features } from "../common/constants";

export const Features = () => {
  return (
    <div className="flex flex-col gap-20 mt-[140px]">
      {features.map(({ title, description, iconUrl }: Feature) => (
        <div key={title} className="flex flex-col items-center text-center">
          <img src={iconUrl} alt={title} />
          <div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
