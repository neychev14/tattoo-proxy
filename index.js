const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 10000;

// Главна страница – просто показва, че API-то работи
app.get('/', (req, res) => {
  res.send('Tattoo Proxy is running successfully!');
});

// Локални примерни tattoo events
app.get('/events', (req, res) => {
  const events = [
    {
      id: 1,
      title: 'Frankfurt Tattoo Convention',
      city: 'Frankfurt',
      country: 'Germany',
      startDate: '2025-12-05',
      endDate: '2025-12-07',
      url: 'https://worldtattooevents.com/frankfurt-tattoo-convention'
    },
    {
      id: 2,
      title: 'Barcelona Tattoo Expo',
      city: 'Barcelona',
      country: 'Spain',
      startDate: '2026-01-20',
      endDate: '2026-01-22',
      url: 'https://worldtattooevents.com/barcelona-tattoo-expo'
    },
    {
      id: 3,
      title: 'London Tattoo Show',
      city: 'London',
      country: 'United Kingdom',
      startDate: '2026-03-10',
      endDate: '2026-03-12',
      url: 'https://worldtattooevents.com/london-tattoo-show'
    }
  ];

  res.json({ events });
});

// Стартиране на сървъра
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
