const express = require('express');
app = express();
// const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

try {
  // execution some code altmost never fault
} catch (error) {
  jump();
}
