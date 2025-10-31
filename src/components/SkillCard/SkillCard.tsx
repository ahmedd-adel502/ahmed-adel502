import { useEffect, useRef, useState } from "react";

export default function SkillCard({percent}:{percent:number}) {
    const [progress, setProgress] = useState(0);
    const barRef = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            
            if (entry.isIntersecting) {
                let start = 0;
                const interval = setInterval(() => {
                start += 1;
                if (start >= percent) {
                    start = percent;
                    clearInterval(interval);
                }
                setProgress(start);
                }, 15);
            } else {
                
                setProgress(0);
            }
            });
        },
        { threshold: 0.3 }
        );

        if (barRef.current) observer.observe(barRef.current);

        return () => observer.disconnect();
    }, [percent]);
  return <>
     <div className=" bg-black w-full h-[15px] rounded-lg overflow-hidden progress-bar-parent">
              <div ref={barRef} className={`progress-bar flex items-center justify-end  h-[14px] bg-violet-600 dark:bg-blue-400 rounded-lg transition-all duration-[1000ms] ease-out`} style={{ width: `${progress}%` }} 
              aria-valuemin={0} aria-valuemax={100} 
              aria-valuenow={progress} role="progressbar"><span className="text-black dark:text-white text-sm font-bold me-1">{progress}%</span></div>
     </div>
  </>
}
