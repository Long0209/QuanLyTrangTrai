# Get esp data

Get data of specific esp devices.

**URL** : `/api/v1/customer/esp-device/esp-data`

**Method** : `GET`

**Auth required** : COKIES

**Query Parameters**
- DeviceId (interger, required) : The ID of the ESP device for which data is to be retrieved
- ResultSize (interger, optional): The number of results to retrieve (default is 200)

**Example request**

```http
GET http://localhost:5048/api/v1/customer/espd-evice/esp-data?deviceId=1&resultSize=200
```

## Success Response

**Code** : `200 OK`

**Response field**
* **Data**
  * id : 
  * temperature : 
  * humidity : 
  * probe : 
  * charge : 
  * deviceId : 
  * timeStamp :


**Reponsive example**

```json
[
  {
    "id": 1,
    "temperature": 301,
    "humidity": 586,
    "probe": 0,
    "charge": 859,
    "deviceId": 1,
    "timeStamp": "2023-05-07T13:16:06"
  },
  {
    "id": 2,
    "temperature": 301,
    "humidity": 586,
    "probe": 0,
    "charge": 859,
    "deviceId": 1,
    "timeStamp": "2023-05-07T13:16:16"
  },
  {
    "id": 3,
    "temperature": 301,
    "humidity": 586,
    "probe": 0,
    "charge": 859,
    "deviceId": 1,
    "timeStamp": "2023-05-07T13:16:26"
  },
  // ...
]
```

### Errors response

#### Current user doesnt own device

**Condition** : if current logged in user doesn't owned quered devices.

**Code** `400 BAD REQUEST`

**Response example**

```json
{
  "message": "Device not found or user doesn't own the device."
}
``` 
