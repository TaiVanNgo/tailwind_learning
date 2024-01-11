import { ReactNode } from "react";

interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({
  title,
  icon,
  bgClass,
}: JobProps): Element => {
  return (
    <div
      className={`${bgClass} flex aspect-square flex-col items-center justify-center text-ellipsis rounded-lg p-4`}
    >
      {icon}
      <p className="pt-2 font-popi">{title}</p>
    </div>
  );
};
