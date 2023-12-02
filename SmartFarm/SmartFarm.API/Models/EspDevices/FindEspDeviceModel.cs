namespace SmartFarm.API.Models.EspDevices;

public class FindEspDeviceModel{
    public int DeviceId {get; set;}
    public string UserId {get; set;}
    public string Location {get; set;}
    public int FarmId {get; set;}
}
