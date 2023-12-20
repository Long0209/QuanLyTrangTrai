# Get owned esp devices

Get list of owned esp devices by current logged in user.

**URL** : `/api/v1/customer/espdevice/owned-esp-devices`

**Method** : `GET`

**Auth required** : COKIES

**Query Parameters**

- PageIndex (integer, optional): Specifies the page index for pagination. Default is 1.
- PageSize (integer, optional): Specifies the number of items per page. Default is 50.

**Example request**

```http
GET http://localhost:5048/api/v1/customer/espdevice/owned-esp-devices?PageIndex=1&PageSize=50
```

## Success Response

**Code** : `200 OK`

**Response field**

* **pageDetails**: details of pagination information
  * totalItems : total esp devices owned by current user.
  * pageIndex : current page index.
  * pageSize : current page size.
  * totalPages : total number of page.
* **Data**
  * id : id of this device.
  * userId : id of user who owned this device.
  * location : location of device in farm.
  * farmId : id of farm which assign this device.


**Response example**

```json
{
  "pageDetails": {
    "totalItems": 2,
    "pageIndex": 1,
    "pageSize": 50,
    "totalPages": 1
  },
  "data": [
    {
      "id": 1,
      "userId": "9d13bb07-862f-415d-be5b-25b40e9cbeb8",
      "name": "KH001",
      "location": "Location 1",
      "farmId": 1
    },
    {
      "id": 2,
      "userId": "9d13bb07-862f-415d-be5b-25b40e9cbeb8",
      "name": "KH002",
      "location": "Location 2",
      "farmId": 1
    }
  ]
}
```

## Error Response