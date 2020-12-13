const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './components/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./components/build/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./components/build"));
}

app.listen(PORT, () => {
    console.log(`${PORT}`);
  });