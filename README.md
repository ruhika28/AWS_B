Aim of this project is to Build a front end  website using Node js , Html , CSS in order to upload jpg/jpeg images  after credit  card details are validatated and then proceed  to  extract text from them using textextract  service from AWS 

Front end : Nodejs , HTML , CSS , Javascript 

Backend : AWS 

How they are connected:axios node modules with the API  gateway endpoints  

Services: Cognito  for New user Authentication and Federated Sign up.
         
          DynamoDb in order to  store  the Logs generated through  Cloudwatch.
          
          S3 :To host the website statically and store the files uploaded.
          
          API Gateway : to enusre that the Font end has an endpoint to interact with the Lamda function.
          
          Lambda function in python to ensure  the storage of the  image and  credit card validation  through HTTP requests 
          and responses  passed in JSON . Node module called axios governs this 
         
          Cloudwatch : used to monitor logs.
          
          Textextract : Used to extract text from images. 
