# Logout
**URL** `/api/v1/identity/auth/register`
**METHOD** `POST`
**Auth required** NO
**Data constraints** 
```json
{
  "username": "[valid username]",
  "email": "[valid email]",
  "password": "[valid pasword]]",
  "confirmPassword": "[confirm password]",
  "phoneNumber": "[valid phone number]",
  "firstName": "[first name]",
  "lastName": "[last name]"
}
```
**Validaition rule**
| Property Name     | Validation Rules                                             | Error Messages                                 |
|-------------------|--------------------------------------------------------------|-------------------------------------------------|
| Username          | Required, Length between 4 and 20 characters                | "Username is required."<br>"The Username must be at least 4 characters long." |
| Email             | Required, Valid Email format                                 | "Email is required."<br>"Invalid email address." |
| Password          | Required, Length between 8 and 20 characters                | "Password is required."<br>"The Password must be at least 8 characters long." |
| ConfirmPassword   | Must match the Password field                                | "The password and confirmation password do not match." |
| PhoneNumber       | Required, Valid phone number format                         | "Phone number is required."<br>"Invalid phone number." |
| FirstName         | Required, Length between 2 and 100 characters               | "First name is required."<br>"The First name must be at least 2 characters long." |
| LastName          | Required, Length between 2 and 50 characters                | "Last name is required."<br>"The Last name must be at least 2 characters long." |
**Data example** 
```json
{
  "username": "quoctuan121101",
  "email": "quoctuan121101@gmail.com",
  "password": ".password1",
  "confirmPassword": ".password1",
  "phoneNumber": "0782583982",
  "firstName": "Quoc",
  "lastName": "Tuan"
}
```
## Success Response
**Code** : `200 OK`

**Content example**

```json
{
  "message": "Register sucessful."
}
```
## Erro response
### Create user fail
**Code** `401 BAD REQUEST`
**Content example**
```json
{
    "message": [
        {
            "erroCode": "[erro code]",
            "description": "[erro descriptions]"
        }
    ]
}
```
**Erros**
| Error Code           | Description                                |
|-----------------------|--------------------------------------------|
| DuplicateUserName    | The username '*username*' is already taken.|
|DuplicateEmail|Email '*email*' is already taken.|

### Validation erros 
**Code** `400 BAD REQUEST`
**Content example**
```json
{
    "errors": {
        "[property name]": [
            "validation erros"
            "validation erros 2",
        ],
        "[property name 2]": [
            "validation erros"
        ]
    }
}
```
  - Example 
  ```json
  "errors": {
    "Username": [
      "Username is required.",
      "The Username must be at least 4 characters long."
    ],
    "ConfirmPassword": [
      "The password and confirmation password do not match."
    ]
  }
  ```