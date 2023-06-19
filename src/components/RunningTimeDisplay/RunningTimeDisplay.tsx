import { useEffect, useRef, useState } from "react";

import { TimeDisplay } from "../../components";

interface Props {
  isRunning: boolean;
}

export default function RunningTimeDisplay({ isRunning }: Props) {
  const [startTimeMs, setStartTimeMs] = useState(0);
  const [elapsedTimeMs, setElapsedTimeMs] = useState(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    function updateElapsedTime() {
      setElapsedTimeMs(Date.now() - startTimeMs);

      requestRef.current = requestAnimationFrame(updateElapsedTime);
    }

    if (isRunning) {
      setStartTimeMs(Date.now());
      updateElapsedTime();
      return;
    }

    setElapsedTimeMs(0);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isRunning, requestRef, startTimeMs]);

  if (!isRunning) {
    return <TimeDisplay durationMs={0} />;
  }

  return <TimeDisplay durationMs={elapsedTimeMs} />;
}
