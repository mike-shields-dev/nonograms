import { useEffect, useRef, useState } from "react";

import { TimeDisplay } from "../../components";

interface Props {
  isRunning: boolean;
}

export default function RunningTimeDisplay({ isRunning }: Props) {
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>();
  const updateDuration = 100;

  useEffect(() => {
    if (!isRunning) {
      setElapsedTime(0);
      setStartTime(0);
      return;
    }

    !startTime && setStartTime(Date.now());

    timerRef.current = setTimeout(counter, updateDuration);

    function counter() {
      if (!startTime) return;

      const now = Date.now();
      const elapsedTime = now - startTime;

      setElapsedTime(elapsedTime);

      timerRef.current && clearTimeout(timerRef.current);
    }
  }, [isRunning, timerRef, startTime, elapsedTime]);

  if (!isRunning) {
    return <TimeDisplay durationMs={0} />;
  }

  return <TimeDisplay durationMs={elapsedTime} />;
}
