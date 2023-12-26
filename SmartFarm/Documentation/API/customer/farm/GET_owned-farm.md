# Get owned farm
Used to retrives list of owned farms by current logged in user.

**URL** : `/api/v1/identity/customer/farm/owned-farms`

**Method** : `GET`

**Auth required** : YES

**Query parameter**
- DeviceId (interger, required) : The ID of the ESP device for which data is to be retrieved.
- ResultSize (interger, optional): The number of results to retrieve (default is 200).

**Example request**
```http
http://localhost:5048/api/v1/customer/farm/owned-farms?PageIndex=1&PageSize=50
```
## Sucess response
**Code** : `200 OK`

**Response field**

* **pageDetails**: details of pagination information
  * totalItems : total esp devices owned by current user.
  * pageIndex : current page index.
  * pageSize : current page size.
  * totalPages : total number of page.
* **Data**
  * id : id of farm.
  * name : name of farm.
  * address : address of farm.
  * userId : id of user who owned this farm.

**Example**
```json
{
  "pageDetails": {
    "totalItems": 3,
    "pageIndex": 1,
    "pageSize": 50,
    "totalPages": 1
  },
  "data": [
    {
      "id": 1,
      "name": "Trang trại cơm gà",
      "address": "44 Y Ngông- Tân Tiến - Bmt -Dăk Lăk",
      "userId": "admin"
    },
    {
      "id": 2,
      "name": "Trang trại Đại Ngàn",
      "address": "Hòa Phú - Buôn Hồ -Đăk Lăk",
      "userId": "admin"
    },
    {
      "id": 3,
      "name": "Trang trai của bạn Vi",
      "address": "Ha Noi",
      "userId": "admin"
    }
  ]
}
```
### Errors response