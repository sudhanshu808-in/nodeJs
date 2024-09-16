# APIs (Application Programming Interfaces)

Think of an API as a waiter in a restaurant. You (the customer) don't go to the kitchen to cook your meal. Instead, you tell the waiter what you want, and they bring it to you. Similarly, an API takes your request, gets the data or performs the action, and returns the result.

### Example: Weather App
When you use a weather app, it's likely using an API to get weather data from a service like OpenWeatherMap.

## RESTful APIs

REST is a set of rules for designing APIs. It's like having a standard way of organizing a library so everyone can find books easily.

### HTTP Methods
- **GET**: Fetch data (like looking up a book)
- **POST**: Create new data (adding a new book)
- **PUT/PATCH**: Update existing data (updating book information)
- **DELETE**: Remove data (removing a book)

### Example: Blog API

A blog API might use:

- `GET /posts` to list all posts
- `POST /posts` to create a new post
- `PUT /posts/123` to update post number 123
- `DELETE /posts/123` to delete post number 123

## Node.js and APIs

Node.js is great for APIs because it can handle many requests at once without getting bogged down. It's like a skilled multitasker who can juggle many tasks efficiently.

### Example: Simple Express.js API

```javascript
const express = require('express');
const app = express();
app.use(express.json());

let users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get a specific user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// Create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log('API running on port 3000'));
