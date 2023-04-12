Here's the code:

```
const now = new Date();
const day = now.getDay();
const hour = now.getHours();

if (day === hour) {
  console.log("Today is the same as the current hour number!");
} else {
  console.log("No no no.");
}
```

This code creates a new `Date` object representing the current date and time. It then uses the `getDay()` method to get the day of the week as a number (0-6,