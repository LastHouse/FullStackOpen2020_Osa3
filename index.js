require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const morgan = require('morgan');
const Person = require('./models/person');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('build'));

app.use(express.json());

//app.use(logger);

app.use(
  morgan(
    ':method :url :res[content-length] - :response-time ms :date[web] :person'
  )
);

let people = [
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

// Get all

app.get('/api/people', (req, res) => {
  Person.find({}).then((people) => {
    res.json(people.map((person) => person.toJSON()));
  });
});

// Get one

/* app.get('/api/people/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    response.json(person);
  } else {
    return response.status(404).json({
      error: 'given id does not exist',
    });
  }
}); */

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  }

  next(error);
};

app.get('/api/people/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.use(errorHandler);

// Info

// TÄMÄ EI TOIMI VIELÄ!!!

app.get('/info', (request, response) => {
  const info = persons.length;
  const date = new Date();
  response.send(
    '<p>Phonebook has info for ' + info + ' people</p><br><br>' + date
  );
});

// Delete one

app.delete('/api/people/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// Add a new person

morgan.token('person', (request, response) => response.person);

/* const generateId = () => {
  //const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  const id = Math.floor(Math.random() * 1000000);
  return id;
}; */

app.post('/api/people', (request, response) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({
      error: 'name missing',
    });
  }
  if (body.number === undefined) {
    return response.status(400).json({
      error: 'number missing',
    });
  }

  /* if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique',
    });
  } */

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

// Update

app.put('/api/people/:id', (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

//_________________________

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
