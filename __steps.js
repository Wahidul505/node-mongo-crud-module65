/* 
• Steps to add and use MongoDB: 
-------------------------------
1) To install mongoDB: npm install mongodb
2) Create a cluster in mongoDB account for my project
3) Create a user with password in cluster
4) Add an IP address and In Network Access > IP address: allow all
5) In database > Connect : copy the code and connect the cluster with my project > index.js
///////////////////////////////////////////////////////////////////////////////////////
• CRUD Operation:
-------------------
1) Google search: node mongodb CRUD. Then go to Usage Examples
2) Create async run function. Inside the function use try and finally. 
3) Call the run function directly and add a catch(console.dir) with it.
///////////////////////////////////////////////////////////////////////////////////////
• Integrate sending data from client to server:
-----------------------------------------------
1) Create a form in Client side and get the data from the user through it.
2) Then use fetch to POST data and put the server side post url in it, also declare method, headers, body in that fetch.
3) Implement a app.post() method in server side to receive the data on the backend and access the req.body
4) Then send a response from the post method of server side and make sure to return a json from the response.
• Get data from server to client side:
--------------------------------------
1) Implement app.get() inside the try function.
2) Create a query object in it.
3) declare cursor as collection.find(query)
4) await cursor.toArray()
5) Return the result as res.send
*/