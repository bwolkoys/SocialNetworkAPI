# Social Network API

## User Story
- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Resources
- https://www.npmjs.com/package/mongoose 
- https://expressjs.com/en/starter/installing.html
- findOneAndUpdate: https://mongoosejs.com/docs/tutorials/findoneandupdate.html 
- findById: https://www.geeksforgeeks.org/mongoose-findbyid-function/ 
- create(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create 
- more queries resources: https://mongoosejs.com/docs/queries.html 
- $addToSet: https://www.mongodb.com/docs/manual/reference/operator/update/addToSet/ 
- $pull: https://www.mongodb.com/docs/manual/reference/operator/update/pull/ 

## Video Link

- https://www.loom.com/share/8ed640e0f65f44749b7189a77974aea4?sid=27f572ef-5f95-4330-8f77-ac5bc628a3f7 