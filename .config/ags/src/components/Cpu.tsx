import {Variable, bind} from "astal";
import { GetCpuStats } from "../services/Cpu";

export default function CpuComponent() {
  const cpu = GetCpuStats(2000);

  return <box className="cpu-monitor" onDestroy={() => {
    cpu.drop();
  }}>
    <label label="󰄧 " />
    { cpu }
    <label label="%" />
  </box>
}
