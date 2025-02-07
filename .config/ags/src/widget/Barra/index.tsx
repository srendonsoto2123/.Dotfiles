import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable, timeout, bind } from "astal"
import Hyprland from "gi://AstalHyprland"
import { GetCpuStats, GetStatsByCore } from "../../services/Cpu"
import { NetComponent } from "../../components/Network"
import CpuComponent from "../../components/Cpu"
import prueba from "../../services/Ram"
import RamComponent from "../../components/Ram"

function hacerSeccionUno() {
  const { START } = Gtk.Align
  return <box
    className="seccion"
    halign={START}>
    {CpuComponent()}
    {RamComponent()}
    {NetComponent()}
    {prueba()}
  </box>
}

function hacerWorkspaces() {
  const hypr = Hyprland.get_default()
  const i = ["", "", "", "", ""]

  return <box className="workspaces">
    {bind(hypr, "workspaces").as(wss => wss
      .filter(ws => !(ws.id >= -99 && ws.id <= -2)) // filter out special workspaces
      .sort((a, b) => a.id - b.id)
      .map(ws => (
        <button
          onClicked={() => ws.focus()}>
          <label
            className={bind(hypr, "focusedWorkspace").as(fw =>
              ws === fw ? "focused" : "")}
            halign={Gtk.Align.CENTER}
            label={i[ws.id - 1] ?? String(ws.id)} />
        </button>
      ))
    )}
  </box>
}

function hacerSeccionDos() {
  return <box
    className="seccion"
  >
    {hacerWorkspaces()}
  </box>
}

function hacerSeccionTres() {
  const { END } = Gtk.Align
  return <box
    className="seccion"
    halign={END}>
    <label label="Seccion tres" />
  </box>
}

export default function Barra(gdkMonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
  const { END, START } = Gtk.Align

  return <window
    gdkmonitor={gdkMonitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={LEFT | RIGHT | TOP}
    application={App}
    className="barra"
  >
    <centerbox>
      {hacerSeccionUno()}
      {hacerSeccionDos()}
      {hacerSeccionTres()}
    </centerbox>
  </window>
}
