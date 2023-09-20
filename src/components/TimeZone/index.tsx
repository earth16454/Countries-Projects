import React, { useEffect, useState, FunctionComponent } from "react";
type TimeZone2 = {
  timezone: string;
}

const TimeZone: React.FC<TimeZone2> = ({timezone}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // อัปเดตเวลาทุกๆ 1 วินาที

    return () => {
      clearInterval(timer); // ตอนที่คอมโพนเนนต์ถูก unmount ให้ยกเลิกการทำงานของ setInterval
    };
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const convertToTimezone = (date: Date, targetTimezone: string) => {
    if (targetTimezone === "UTC") {
      return formatTime(date);
    } else {
      const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
      const offset = parseTimezoneOffset(targetTimezone);
      const targetTime = new Date(utcDate.getTime() + offset * 60 * 1000);
      return targetTime;
    }
  };

  const parseTimezoneOffset = (timezone: string) => {
    const parts = timezone.split(":");
    const hours = parseInt(parts[0].replace("UTC", ""), 10);
    const minutes = parseInt(parts[1], 10);
    return (hours * 60 + minutes) * -1; // แปลงเป็นนาทีและทำให้เป็นลบ
  };

  const formatTimeInTimezone = (date: Date, timeZone: string) => {
    const targetTime = convertToTimezone(date, timeZone);
    const options: Intl.DateTimeFormatOptions = {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return targetTime.toLocaleString("en-US", options);
  };
  return (
    <>
      {formatTimeInTimezone(currentTime, timezone.toString())}
      <i className="bi bi-clock ms-2"></i>
    </>
  );
};

export default TimeZone;
