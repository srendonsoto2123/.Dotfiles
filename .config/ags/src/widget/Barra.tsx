import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable, timeout } from "astal"

export default function Barra(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT, BOTTOM } = Astal.WindowAnchor
  const { END, START, CENTER, FILL, BASELINE } = Gtk.Align
  const { BACKGROUND } = Astal.Layer

  return <window
    className="Bar"
    gdkmonitor={gdkmonitor}
    exclusivity={Astal.Exclusivity.NORMAL}
    anchor={BOTTOM | LEFT | RIGHT}
    layer={BACKGROUND}
    application={App}>
    <centerbox>
      <revealer
        setup={self => timeout(500, () => self.revealChild = true)}
        transitionType={Gtk.RevealerTransitionType.CROSSFADE}
      >
        <label label="Hola mundo" />
      </revealer>
      <box>
        <label hexpand truncate halign={CENTER} label="prueba" />
        <label hexpand halign={BASELINE} label="Mundo" />
        <label hexpand halign={CENTER} label="hola" />
        <button hexpand halign={FILL}><label label="hola" /></button>
      </box>
      <button
      >
        <label label="Estoy probando" />
      </button>
    </centerbox>
  </window >
}
