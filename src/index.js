// use "import" to import libraries
import express from 'express';
import {
  superAdminAlls, getSuperAdminById, superAdminCreate, deleteSuperAdmin, editSuperAdmin,
  filterAdmin,
} from './resources/super-admins';

// use "require" to import JSON files
const admins = require('./data/admins.json');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.get('/admins', (req, res) => {
  res.status(200).json({
    data: admins,
  });
});

app.get('/superAdminAlls', superAdminAlls);

app.get('/getSuperAdminById/:id', getSuperAdminById);

app.post('/superAdminCreate', superAdminCreate);

app.delete('/deleteSuperAdmin/:id', deleteSuperAdmin);

app.put('/editSuperAdmin/:id', editSuperAdmin);

app.post('/filterAdmin', filterAdmin);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
