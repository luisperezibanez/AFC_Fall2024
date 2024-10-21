Rules for consuming an API
1) THEY decide the endpoint
2) THEY decide how the data is sent - JSON or XML
3) THEY decide how much data - everything or one thing
4) THEY decide what the data looks like

Rules for building an API
1) WE decide the endpoint
2) WE decide how the data is sent - JSON or XML
3) WE decide how much data - everything or one thing
4) WE decide what the data looks like

RESTRICTIONS
Routes must be
/api/items
/api/items/<unique identifier>

DATA
{
    id: Number,
    description: String,
    is_complete: Boolean
}

MUST BE CRUD functional 

Read
1) Route - api/items, GET method
1.5) Get data from DB
2) JSON
3) Everything
4) Array of Objects

Create
1) Route - api/items, POST method
1.5) Get data from client
1.75) DB sends something back
2) JSON -> client
3) Send back one thing
4) One object - DATA, receipt from DB

Delete
1) Route - /api/items/<unique identifier>, DELETE method
1.5) Get data from client
1.75) DB sends something back
2) JSON
3) Send back one thing - what was deleted
4) One object

Update
1) Route - /api/items/<unique identifier>, PUT method
1.5) What are we updating?
2) JSON
3) Send back one thing - updated is_complete
4) Send back an object or just the is_complete
