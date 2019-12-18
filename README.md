Aim of this project is to Build a front end  website using Node js , Html , CSS in order to upload imgaes after credit  card details are validatated and then procedd to  extract text from them using textextract  service from AWS 

Front end : Nodejs , HTML , CSS , Javascript 
Backend : AWS 
Services: Cognito  for New user Authentication and Federated Sign up 
          DynamoDb in order to  store  the Logs generated through  Cloudwatch
          S3 :To host the website statically and store teh files uploaded 
          API Gateway : to enusre that the Font end has an endpoint to interact with the Lamda function
          Lamda Fucntion in python to endur  the storage of the  image nd credit card vallidation  through HTTP requests and responses             passed in JSON . Node modelule called axios governs this 
          Cloudwatch : used to monitor logs
          Textextract : Used to extract text from images
