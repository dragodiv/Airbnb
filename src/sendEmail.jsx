import { useEffect } from "react";

export default function SendEmail() {
  return useEffect(() => {
    // Create a new Date object
    let currentDate = new Date();

    // Get the current date
    let date = currentDate.getDate(); // Day of the month (1-31)
    let month = currentDate.getMonth() + 1; // Month (0-11, add 1 to get the actual month)
    let year = currentDate.getFullYear(); // Full year (e.g., 2024)

    // Get the current time
    let hours = currentDate.getHours(); // Hour (0-23)
    let minutes = currentDate.getMinutes(); // Minutes (0-59)
    let seconds = currentDate.getSeconds(); // Seconds (0-59)

    // Formatting the date and time
    let formattedDate = year + "-" + month + "-" + date;
    let formattedTime = hours + ":" + minutes + ":" + seconds;

    function sendEmail() {
      Email.send({
        SecureToken: import.meta.env.VITE_SecureToken,
        To: import.meta.env.VITE_ToEmail,
        From: import.meta.env.VITE_FromEmail,
        FromName: "Divanshu Soni",
        ReplyAddress: import.meta.env.VITE_ToEmail,
        Subject: "New Message from Portfolio Website at " + formattedDate,
        Body: "This is a test email from my portfolio website." + formattedTime,
      }).then(message);
    }
    sendEmail();
  });
}
