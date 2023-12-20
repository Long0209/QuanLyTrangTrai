# Login

Used to authentic a registered User.

**URL** : `/api/v1/identity/auth/login/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "emailOrUserName": "[valid email/username or phone number]",
  "password": "[valid password]",
}
```

**Data example**

```json
{
    "username": "quoctuan121101@gmail.com",
    "password": ".password1"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Login successful!"
}
```

## Error Response
### Wrong email or password
**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": {
        "Invalid loggin atempt."
    }
}
```
### User is locked put
**Condition** : If user is locked out.
**Code**: `400 BAD REQUEST`
```json
{
    "message":{
        "User is locked out."
    }
}
```