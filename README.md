
# waitmerijaan 💖

> A quirky async utility that makes JavaScript *wait for you* — with love.  
> Perfect for delays, timeouts, and async experiments.

---

## Installation

```bash
npm install waitmerijaan
```

---

## Usage

```js
const waitmerijaan = require("waitmerijaan");

(async () => {
  console.log("Starting the magic...");
  
  // Wait for 2 seconds
  await waitmerijaan(2000);
  
  console.log("Finished waiting 💖");
})();
```

---

## API

### `waitmerijaan(ms: number): Promise<void>`

- **ms** – Number of milliseconds to wait.
- Returns a `Promise` that resolves after `ms` milliseconds.
- Works perfectly with `async/await` or `.then()`.

```js
waitmerijaan(1000).then(() => console.log("1 second passed!"));
```

---

## Why “waitmerijaan”? 😎

Because sometimes your code just needs a little ❤️.  
- Makes waiting fun.  
- Helps with async testing, delays, and simulating slow APIs.  
- Memorable name = memorable code.  

---

## Example: Fun with multiple waits

```js
(async () => {
  console.log("Loading...");
  await waitmerijaan(1000);
  console.log("Halfway there...");
  await waitmerijaan(1000);
  console.log("Done! 🎉");
})();
```

---

## License

MIT © KrishnasWorld
