import fs from "fs";
import path from "path";

export const logger = (logEntry: string) => {
  const tsmp = new Date();

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //   const logEntry = `\n\n\n\n\n\n\n[CLERK-WEBHOOK]\n[EVENT-TYPE]: ${eventType}\n${tsmp}\nID: ${userData.id}\n[PAYLOAD]\n${body}\n`;

  const log = `[ASTERISK LOGS]\n[TIMESTAMP]\t${tsmp}\n\n${logEntry}`;
  console.log(log); // Log to console

  // Write the log to a file
  const logFilePath = path.join(process.cwd(), "./logs/webhook.log");

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    } else {
      console.log("Logged webhook data to file.");
    }
  });
};
