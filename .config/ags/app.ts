import { App } from "astal/gtk3"
import style from "./src/scss/style.scss"
import Bar from "./src/widget/Bar"
import Barra from "./src/widget/Barra"
import Rev from "./src/widget/Rev"
import Ba from "./src/widget/Barra/index"

App.start({
  css: style,
  main() {
    App.get_monitors().map(Ba);
  },
})
