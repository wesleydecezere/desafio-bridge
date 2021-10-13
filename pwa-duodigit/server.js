const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5000;
const isDuodigit = (number) => new Set(number.toString().replace(/\D/g, '')).size <= 2;

app.get('/', (req, res) => {
  res.send({ express: 'Express server' });
});

app.post('/duodigit', (req, res) => {
  const number = parseFloat(req.body.number);
  let factor = 1;

  const startTime = process.hrtime();

  while (factor < 4e6) {
    factor += 1;
    if (isDuodigit(number * factor)) {
      const elapsedTime = process.hrtime(startTime)

      res.json({
        ok: true,
        data: {
          number,
          duodigit: number * factor,
          time: elapsedTime[0] + elapsedTime[1] / 1e9,
        }
      })
      return
    }
  };

  res.json({ ok: false, data: {} })
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
