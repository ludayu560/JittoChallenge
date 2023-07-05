README for the Jitto JR Fullstack Challenge 

***Libraries:***
* Axios
  * Used for API requests
* Redux
  *   Redux global state is useful when data needs to be transfered among comonents of the same level.
  *   Very useful in implementing the shopping cart as otherwise we would have to do prop drilling
* Tailwind
  *   Made making the app look nice slightly easier
* GH-Pages
  *   very easy hosting option

***Design Choices:***
* Simple UI focusing on functionality, styling was too time consuming and out of the scope of this project
* Lots of UX features purposefully cut out in pursuit of functionality first, e.g.
  *   deleting items
  *   increment decrement orders
  *   signin states
  *   popups indicating if you are signed in
* Ran out of time approaching the end
* Manually tested aspects of the app instead of using Jest. If this app were to scale, would have to use a testing library but time constraints make this infeasible here.

***Backend:***
* Used DynamoDB, AWS Lambda, API Gateway, IAM to give permissions to AWS Lambda, GH Pages for deployment
* GH Pages site runs React which is the entirety of the frontend in the frontend-backend architechture. This page will call APIs abstracted in AWS API Gateway. AWS Lambda receives these and acts as the entirety of the backend. Chose to have the orders table and users table managed by the same Lambda function as orders was a relatively small feature. If expanded upon, we should have a seperate lambda function to deal with orders. Lambda then interfaces with the DynamoDB to modify the orders and users tables.

***Difficulties***
* CORS headers were difficult to work around. I spent a good amount of time having the register resource spelt incorrectly on my frontend so I would receive 'no CORS header on the resource' error because technically the 'regisster' resource does not exist and actually does not have the header :(
* Time constraints were the biggest issue here. I like making things look nice and have fully fleshed out features, however, this project was rather time consuming and tough to fit in with school. I tried to do this within 12 hours in one day.
* I had to learn some of the technologies on the fly, e.g. DynamoDB is a noSQL DB, I've only worked with DBMS such as mySQL so I just treated DynamoDB as relational and it seemd to work out. I also hadn't used AWS Lambda to act as a backend before. It is signifigantly easier than hosting a MongoDB instance on EC2 and trying to get the endpoints to play nice (again, CORS issues).
* While the backend was pretty simple to work out, I feel like I should have approached the frontend with a rough diagram of dataflows and what component manages what. I think my frontend-heavy experience made me underestimate this part and led to some sloppy code there.
* Figuring out errors on the backend was also quite time consuming as it was essentially a black box. CloudWatch Management Console saved me here.

***Deployment***
* I didnt notice the requirement for the deployment to be on AWS so I used GH-Pages instead. 
