const express = require('express');
const app = express();

const buildings = [
  {
    name: 'Gedung A',
    description: 'Gedung perkantoran dengan fasilitas lengkap.',
    location: 'Jakarta',
    rent: 2000,
  },
  {
    name: 'Gedung B',
    description: 'Gedung apartemen dengan pemandangan kota.',
    location: 'Surabaya',
    rent: 1500,
  },
  {
    name: 'Gedung C',
    description: 'Gedung pertemuan di pusat kota.',
    location: 'Bandung',
    rent: 1800,
  },
];

app.get('/api/buildings', (req, res) => {
  res.json(buildings);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
