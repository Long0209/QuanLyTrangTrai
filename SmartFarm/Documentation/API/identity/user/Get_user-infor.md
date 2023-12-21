# Get user infor

Use for get logged in user information

**URL** `/api/v1/identity/user/user-info`

**Method** : `POST`

**Auth required** : YES

**Parameter** NO

**Request example**
```http
http://localhost:5048/api/v1/identity/user/user-info
```
## Success Response

**Code** : `200 OK`

**Response field**

* **FirstName** : first name of current user.
* **LastName** : last name of current user.
* **UserName** : user name.
* **Email** : email of current user.
* **PhoneNumber** : phone number of current user.

**Response example**

```json
{
  "firstName": "Quoc",
  "lastName": "Tuan",
  "email": "quoctuan121101@gmail.com",
  "phoneNumber": "0782583982",
  "userName": "quoctuan121101"
}
```