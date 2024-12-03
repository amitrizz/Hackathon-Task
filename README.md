Register User Curl 

curl --location 'https://hackathon-task.onrender.com/api/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstname":"amit",
    "lastname":"kumar",
    "email":"amitsgar121001@gmail.com",
    "password":"viewer@123",
    "mobile":"8468923343",
    "password_confirmation":"viewer@123"
}'



Login User Curl

curl --location 'https://hackathon-task.onrender.com/api/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"amitsgar121001@gmail.com",
    "password":"viewer@123"
}'




logged User 

curl --location 'https://hackathon-task.onrender.com/api/user/logged-user' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzRlYmQ2Mjg4ZmQ2NTRmMDFmZDI5YWEiLCJpYXQiOjE3MzMyMTM2MjQsImV4cCI6MTczMzMwMDAyNH0.30OaqoCmuu8pTD-67PTDhW5Mdx_3SZiumMdKiCoeFyc' \
--data ''





Complete User Profile Curl 

curl --location 'https://hackathon-task.onrender.com/api/profile/get-user-info' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzRlYmQ2Mjg4ZmQ2NTRmMDFmZDI5YWEiLCJpYXQiOjE3MzMyMTM2MjQsImV4cCI6MTczMzMwMDAyNH0.30OaqoCmuu8pTD-67PTDhW5Mdx_3SZiumMdKiCoeFyc' \
--data ''





Add Education Data Curl

curl --location 'https://hackathon-task.onrender.com/api/profile/add-education' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzRlYmQ2Mjg4ZmQ2NTRmMDFmZDI5YWEiLCJpYXQiOjE3MzMyMTM2MjQsImV4cCI6MTczMzMwMDAyNH0.30OaqoCmuu8pTD-67PTDhW5Mdx_3SZiumMdKiCoeFyc' \
--header 'Content-Type: application/json' \
--data '{
    "degree": "Bsc",
    "college": "NIT Trichy",
    "fieldofstudy": "Computer Science",
    "startdate": "2021-11-20",
    "enddate": "2024-11-20"
}



Add Experience Data Curl 

curl --location 'https://hackathon-task.onrender.com/api/profile/add-experience' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzRlYmQ2Mjg4ZmQ2NTRmMDFmZDI5YWEiLCJpYXQiOjE3MzMyMTM2MjQsImV4cCI6MTczMzMwMDAyNH0.30OaqoCmuu8pTD-67PTDhW5Mdx_3SZiumMdKiCoeFyc' \
--header 'Content-Type: application/json' \
--data '{
    "jobtitle": "Data Scientist",
    "company_name": "Data Analytics Inc.",
    "industry": "Data Science & Analytics",
    "startdate": "2022-06-01",
    "enddate": "2024-06-01",
    "employment_type": "Contract",
    "location": "New York, NY"
}
'




Update Data Curl 

curl --location 'https://hackathon-task.onrender.com/api/profile/add-education' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzRlYmQ2Mjg4ZmQ2NTRmMDFmZDI5YWEiLCJpYXQiOjE3MzMyMTM2MjQsImV4cCI6MTczMzMwMDAyNH0.30OaqoCmuu8pTD-67PTDhW5Mdx_3SZiumMdKiCoeFyc' \
--header 'Content-Type: application/json' \
--data '{
    "degree": "MCA",
    "college": "NIT Trichy",
    "fieldofstudy": "Computer Application",
    "startdate": "2024-11-20",
    "enddate": "2027-11-20"
}
'
'
