const express = require('express');
const cors = require('cors'); // Import the cors middleware
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); // Use the cors middleware

app.post('/chat', async (req, res) => {
  try {
    // Get the message from the request body
    const message = req.body; // Adjust this based on your payload structure
    
   
    // Perform the POST request to a specific website
    const response = await axios.post('https://app.alltius.ai/api/platform/v1/chat', message, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization, // Assuming 'Authorization' is the correct header
        // Include any other headers needed by the Alltius API
      },
    } );

    // Send the response back to the client
    res.json({ response: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});