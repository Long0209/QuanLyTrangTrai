# SmartFarm API
## 
## EndPoint
### Identity
#### Authenticaion
- [Login](identity/authentication/login.md) : `POST /api/v1/identity/auth/login`
- [Logout](identity/authentication/log-out.md) : `POST /api/v1/identity/auth/log-out`
- [Register](identity/authentication/register.md) : `POST /api/v1/identity/register`
#### User
- [UpdatePassword](identity/user/Patch_password.md) " `PATCH /api/v1/identity/user/password`

### Customer

#### Esp device 
- [GetOwnedEspDevices](customer/esp-device/GET_owned-esp-devices.md) : `GET /api/v1/customer/esp-device/owned-esp-devices`
- [GetEspData](customer/esp-device/GET_esp-data.md) : `GET /api/v1/customer/esp-device/esp-data`