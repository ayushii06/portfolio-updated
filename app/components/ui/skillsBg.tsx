"use client";

import Image from 'next/image';
import { cn } from '../../lib/utils';
import bg from "../../public/grid-ellipsis.svg";

export const CardWithGridEllipsis = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="relative rounded bg-zinc-950 border border-zinc-900">
    <div  style={{ backgroundImage: `url(${bg.src})` }} className="size-full bg-repeat bg-[length:25px_25px]">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
        {children}
      </div>
    </div>
  </div>
);

export const CardBody = ({ title,icon, className = '' }) => (
   <div
    className={cn(
      "text-center p-6 flex flex-col items-center justify-center",
      className
    )}
  >
    <Image
      src={icon}
      width={30}
      height={30}
      alt={title}
      className="mb-3 transition-transform duration-300 group-hover:scale-110"
    />

    <p className="text-sm text-gray-300 group-hover:text-white transition">
      {title}
    </p>
  </div>
);