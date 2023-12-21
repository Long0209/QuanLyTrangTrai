# Update password

Used to update password for logged in user.

**URL** : `/api/v1/identity/user/password`

**Method** : `PATCH`

**Auth required** : COKIES

**Request body**

```json
{
  "oldPassword": "[old password]]",
  "newPassword": "[new password]",
  "confirmNewPassword": "[cofirm new password]"
}
```
**Parameter**
| Property Name       | Validation Rules                                   | Error Messages                                   |
|---------------------|----------------------------------------------------|---------------------------------------------------|
| OldPassword         | Required, DataType: Password                      | "Old password is required."                       |
| NewPassword         | Required, DataType: Password                      | "New password is required."                       |
| ConfirmNewPassword  | DataType: Password, Compare with NewPassword      | "The password and confirmation password do not match." |

**Request example**

*Request url*
```http
http://localhost:5048/api/v1/identity/user/password
```
*Request body*
```json
{
  "oldPassword": ".password1",
  "newPassword": ".mynewpassword",
  "confirmNewPassword": ".mynewppassword"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Password updated successfully."
}
```

## Error response

### Parameter validation erros
**Condition** if parameter is missing or invalid
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
