import { bind } from "astal";
import Network from "gi://AstalNetwork";

export function NetComponent() {
  const network = Network.get_default()
  const wifi = bind(network, "wifi")

  const ip = bind(network.wifi.activeConnection, "ip4_config");

  return <box className="wifi" visible={wifi.as(Boolean)}>
    {wifi.as(wifi => wifi && (
      <box>
        <icon
          css="font-size: 16px"
          tooltipText={bind(wifi, "ssid").as(String)}
          className="Wifi"
          icon={bind(wifi, "iconName")}
        />
        <label
          label=" " />
        <label
          label={bind(wifi, "ssid")} />
        <label label=": " />
        <label label={ip.as((e: any) => {
          return e.get_addresses()[0].get_address()
        })} />
      </box>
    ))}
    <revealer></revealer>
  </box>

}
