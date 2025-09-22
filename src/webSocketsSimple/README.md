## Interaction-Level Design
This activity is intended to supplement the CS4530 on interaction-level design

### Changes
- Task 1: The server should keep track of the number of clients that are connected.
- Task 2: Add a 'hello' ClientToServerEvents, allowing the client to send the hello message when first connecting to server.
- Task 3: Allow the server to receive the 'hello' event, then printing the name of the new client and the total number of connected clients. The server also sends an initial ping to that client.
- Task 4: On 'disconnect' the server prints to the console the name of the client that is leaving and the updated number of connected clients.
