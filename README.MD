#### Setup

```bash
npm install && npm start
```

# NodeJS + ExpressJS + MongoDB CRUD API
[Demo Link] https://jobsapi.herokuapp.com/

Use Postman or Thunder Client  for access this API

# Registration

https://jobsapi.herokuapp.com/api/v1/registration/

JSON ---> {
    "name":"Jhon","email":"jhon@gmail.com","password":"jhon1234"
}

# Login

https://jobsapi.herokuapp.com/api/v1/login/

JSON ---> {
    "email":"jhon@gmail.com","password":"jhon1234"
}

# Create Job

https://jobsapi.herokuapp.com/api/v1/jobs/

JSON ---> {
    "company":"Google","position":"Software Engineer Intern"
}

# View All Jobs

https://jobsapi.herokuapp.com/api/v1/jobs/

# Update Job
https://jobsapi.herokuapp.com/api/v1/jobs/

JSON ---> {
    "company":"Facbook","position":"Software Engineer Intern"
}


# Delete Job
https://jobsapi.herokuapp.com/api/v1/id
<hr>
 
 Must use Bearer Token for Authentication process 


