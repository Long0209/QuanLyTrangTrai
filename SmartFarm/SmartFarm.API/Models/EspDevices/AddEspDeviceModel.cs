namespace SmartFarm.API.Models.EspDevices;

public class AddEspDeviceModel {
    public string UserId {get; set;}
    public string Name {get; set;}
    public string Location {get; set;}
    public int FarmId {get; set;}
}
