function getDate() {
  let d = new Date();
  let dayName = d.toString().split(" ")[0] + "day";
  const monthName = d.toLocaleString("en-us", { month: "long" });
  const dayOfMonth = d.getDate();
  const year = d.getFullYear();

  return `Today is ${dayName} the ${dayOfMonth} of ${monthName} ${year}`;
}

console.log(getDate());
