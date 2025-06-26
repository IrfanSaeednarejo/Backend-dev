import express from 'express';  
const app = express();

const Port = 3000;

//creat an array of jokes
const jokes = [
    { id: 1, title: 'Why did the chicken cross the road?', punchline: 'To get to the other side!' },
    { id: 2, title: 'What do you call fake spaghetti?', punchline: 'An impasta!' },
    { id: 3, title: 'Why don’t scientists trust atoms?', punchline: 'Because they make up everything!' }
    ];
app.get('/api/jokes', (req, res) => {
  res.send(jokes);
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});