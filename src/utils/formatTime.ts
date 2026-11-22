export const formatTime = (date: string | Date, now = new Date()) => {
  const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 10000);

  if (diff < 60) return "Just now";

  const mins = Math.floor(diff / 60);

  if (mins < 60) return `${mins} min ago`;

  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
