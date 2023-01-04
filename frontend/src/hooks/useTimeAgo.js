import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsUnit);
      return { value, unit };
    }
  }
};

export function useTimeAgo(timestamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))
  const rtf = new Intl.RelativeTimeFormat("es", { style: "long" });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeago(newTimeAgo)
    }, 10000)
    
    return () => clearInterval(interval)
  }, [timestamp])
  
  const { value, unit } = timeago

  return {value: Math.abs(value), timeago: rtf.format(value, unit)};
}
