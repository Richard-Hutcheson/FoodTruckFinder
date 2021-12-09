# EARN - A Food Truck Finding Application
## GROUP 3
### CSI 3372

### TEAM MEMBERS
- Richard Hutcheson: Project Manager and Lead Front End Developer
- Ethan Robinson: Docker/Heroku and Front End Developer
- Austin Blanchard: Backend Developer
- Noah Lambaria: Backend Developer

**IMPORTANT:**
To get Google Maps API working,
1.  create a file named ".env"
2.  write  "REACT_APP_GOOGLE_MAPS_API_KEY=" on line one followed by the key, so it should be "REACT_APP_GOOGLE_MAPS_API_KEY={put key here}"
3.  place .env inside the ftf-frontend folder at the root+

Database Port: 8080

Database name = "food_truck_finder"

Database username = "root"

Database password = "mypassword"

# Install Database:

### Preconditions and tips:
* first step assumes you have a mysql docker image you can create one using "$ docker pull mysql"
* The first steps port number "52000" and password "mypassword" can be changed if you also change them in the
  application.properties file in the food-truck-api Intellij project and when creating DB in Intellij. 

### Steps:
1. run "$ docker run --name=<custom_container_name> -p 52000:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql"
2. run "$ docker ps" to find the containerID running your mysql image
3. run "$ docker exec -it <containerID> bash"
4. in the docker image type "mysql -u root -p"
5. enter the password
	5.1 If you forgot your password from the first step go to the docker container in docker
	5.2 go to "Inspect" tab on the top right
	5.3 find the "MYSQL_ROOT_PASSWORD" environment variable and it should have the password
6. Once your in mysql type "CREATE DATABASE food_truck_finder"
	6.1 type "SHOW DATABASES" to confirm its there.
7. Open the food-truck-api as project in IntelliJ
8. Navigate to database tab in the top right (needs IntelliJ ultimate for this step) 
9. click on the "+" sign to create a new database and navigate to "data source" and "mysql"
10. Enter username: root, password: (password from step 1), and port: (port number from step 1)
11. hit "Apply" in the bottom right and hit "Test Connection" in the bottom left to ensure DB is connected
12. Run the food-truck-api Spring Boot project in Intellij. This will allow hibernate to generate all the tables
    for our database.
13. Hit the refresh button on the databases tab in Intellij.
14. Expand the food_truck_finder folder in the Intellij DB tab and ensure the tables are created!
15. Database created!

# Front End Instructions:
1. install node.js
2. navigate to the ftf-frontend folder
3. assuming package.json exists, type "npm install" to create node_modules directory
4. install react-geocode with "npm install react-geocode"
4. type "npm start"
5. navigate to "http://localhost:3000/"
	
# Populate Database (optional)
### (warning: populating the database this way could result in errors if run improperly):
1. with the application fully setup and running, navigate to the FoodTruckFinder root directory and locate "populateDB.txt"
2. from the running MySQL Docker container, click the CLI icon to open the bash terminal. 
3. Type "mysql -u root -p" and provide password
3. copy the queries in populateDB.txt and paste them into the MySQL terminal. 
4. Press enter to submit the final query which does not auto run
