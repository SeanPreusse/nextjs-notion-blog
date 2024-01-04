export function FormatDate(inputDate: string): string {
  // Convert input date string to a Date object
  const dateObject = new Date(inputDate);

  // Format the Date object in an awesome way
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return formattedDate;
}
