import { Variable, bind } from "astal"
import GTop from "gi://GTop"

const ram = new GTop.glibtop_mem();
GTop.glibtop_get_mem(ram);

interface RamProps {
  swap: number,
  free: number,
  used: number,
  total: number,
}

class Ram {
  private swap = 0;

  private free = 0;

  private used = 0;

  private total = 0;

  constructor({ swap, free, used, total }: RamProps) {

  }
}

export default function prueba() {
  console.log("Soy la ram total: " + ram.total);

  console.log("Ram usada: " + ram.used);
  console.log(Math.round(ram.user / ram.total * 100));
}
