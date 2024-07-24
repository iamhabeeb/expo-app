export const formatChatTime = (utcDateString: string): string => {
  const date = new Date(utcDateString);
  const now = new Date();

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes}m`;
  } else if (hours < 24) {
    const hours12 = date.getHours();
    const minutesFormatted = date.getMinutes().toString().padStart(2, "0");
    return `${hours12}:${minutesFormatted}`;
  } else if (days < 2) {
    return "Yesterday";
  } else {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }
};
