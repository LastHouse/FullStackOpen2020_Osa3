const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(
  morgan(
    ':method :url :res[content-length] - :response-time ms :date[web] :person'
  )
);
app.use(cors());

let persons = [
  {
    name: 'Teemu',
    number: '09888776655',
    id: 1,
  },
  {
    name: 'Pepe',
    number: '09-23454345',
    id: 3,
  },
  {
    name: 'Igor Oujee',
    number: '9090909',
    id: 4,
  },
  {
    name: 'teemu',
    number: '9090909',
    id: 5,
  },
  {
    name: 'Jimmy',
    number: '7',
    id: 6,
  },
  {
    name: 'Mary',
    number: '09-53534553',
    id: 7,
  },
  {
    name: 'john',
    number: '67676',
    id: 8,
  },
  {
    name: 'Harry',
    number: '98786786',
    id: 9,
  },
  {
    name: 'Pedro',
    number: '7677',
    id: 10,
  },
];

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// Get all

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

// Get one

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    response.json(person);
  } else {
    return response.status(404).json({
      error: 'given id does not exist',
    });
  }
});

// Info

app.get('/info', (request, response) => {
  const info = persons.length;
  const date = new Date();
  response.send(
    '<p>Phonebook has info for ' + info + ' people</p><br><br>' + date
  );
});

// Delete one

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);

  response.status(204).end();
});

// Add a new person

morgan.token('person', (request, response) => response.person);

const generateId = () => {
  //const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  const id = Math.floor(Math.random() * 1000000);
  return id;
};

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: 'name missing',
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'number missing',
    });
  }

  if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique',
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  response.person = JSON.stringify({ name: body.name, number: body.number });

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
