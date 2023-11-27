using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices;

namespace SmartFarm.Data.Entities;

public class EspData {
    public int Id {get; set;}
    [Column("temp")]
    public float Temperature {get; set;}
    [Column("hum")]
    public float Humidity {get; set;}
    public float Probe {get; set;}
    public int Charge {get; set;}
    [Column("device")]
    public int DeviceId {get; set;}
    [Timestamp]
    public DateTime TimeStamp {get; set;}
}
