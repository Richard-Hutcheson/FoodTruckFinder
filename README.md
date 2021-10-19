
1. **Food-truck-api: Backend Setup**

	- Install Java 16(OpenJDK)
	- Install Docker:
		- Go this link: https://docs.docker.com/desktop/windows/install/
		- Choose **Hyper-V backend and Windows** containers to install docker
		- For installation you can follow this tutorial as well 
			**(https://www.youtube.com/watch?v=_9AWYlt86B8&t=251s)**

	- Setup Project in IntelliJ		
		- Import the project at the food-truck-finder parent dir (root of repository) into IntelliJ using existing sources
		- Import the inner food-truck-api sub directory 
			1. Go File > Project Structure > Modules > + > Import Module
			2. For this, choose to import using external model with Gradle
			3. IntelliJ should autodetect your Gradle project and download dependencies
			4. Configure Lombok
				- Install Lombok Plugin for IntelliJ (IntelliJ IDEA > Preferences > Plugins ... Search for "Lombok" 				by Michail Plushnikov)
				- Enable Annotation Processing in IntelliJ Compliation (IntelliJ IDEA > Preferences > Build, 						Execution, Deployment > Compiler > Annotation Processors > Check "Enable annotation processing")
				- Deploy MySql: https://towardsdatascience.com/connect-to-mysql-running-in-docker-container-from-a-local-machine-6d996c574e55
			5. From IntelliJ, create the default food-truck-finder database on the server: File > New > Data Source > 				Mysql
					
				- Configure the connection: 
					- Name: FTF - Local
					- Host: localhost
					- Port: 3306
					- User: root
					- Password: password
			6. Test Connection and hit OK
			7. On the right-hand side of IntelliJ, click on the "Database" option
			8. For the food-truck-finder database, right click and navigate to New > Database
			9. Add a new database named food-truck-finder and hit OK

	- Startup the API from IntelliJ SpringBoot Run Configuration
		- Specify VM Options
			-Dspring.profiles.active=development
	- Once you done that you will find this output
		- GET localhost:8080/ping
		- **pong!**

2. **food-truck-frontend: Frontend Setup**
	- Install VS-Code
	- Install node-js
	- In the terminal: Type this commands  
		- npm init
		- npm install --global yarn
		- npm install next
		- Check yarn version: yarn –version
		- Finally: yarn dev
	- Navigate to http://localhost:3000 - you should see the food truck application

Old Buildpacks:
- https://github.com/mars/create-react-app-buildpack.git
- heroku/java
