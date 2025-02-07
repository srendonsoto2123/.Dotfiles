import { Variable, bind, Binding } from "astal"
import GTop from "gi://GTop"

const poller = Variable(2000);
const cha = Variable(0).poll(poller.get(), (e) => {
  console.log("Probando el poller: " + poller.get());
  console.log("Intentando hacer un cambio en el poller: " + e);
  if (poller.get() == 3000) {
    cambiarElPoller();
  }
  console.log("Poller 1")
  poller.set(2000 + 10 * e);
  return e + 10;
});

// Ser una clase que guarde el poller, tenga la función, tiempo.
// Mover el binding a la interfaz y solamente retornar variables.
// Pensar en una clase para trabajar con configuraciones.

function cambiarElPoller() {
  cha.poll(poller.get(), (e) => {
    console.log("Probando el poller 2: " + poller.get());
    console.log("Esto realmente cambio el poller? " + e);
    console.log("poller 2")
    return e + 20;
  })
}

function GetCpuStats(pollTime: number): Binding<number> {
  let cpu = new GTop.glibtop_cpu();
  let cpuStats = Variable(0).poll(pollTime, (_) => updateCpuStats(cpu));
  return bind(cpuStats);
}

function GetStatsByCore(pollTime: number): Binding<number[]> {
  let cpu = new GTop.glibtop_cpu();
  let coresData = Variable([0]).poll(pollTime, (_) => updateStatsByCore(cpu));
  updateStatsByCore(cpu);
  return bind(coresData)
}

function updateStatsByCore(cpu: GTop.glibtop_cpu): number[] {
  // Obtener información previa de los cores
  const pCoresIdle = cpu.xcpu_idle.filter((e) => e);
  const pCoresTotal = cpu.xcpu_total.filter((e) => e);

  // Actualizar la información de previa de los cores
  GTop.glibtop_get_cpu(cpu);

  // Recuperar la nueva información de los cores
  const coresIdle = cpu.xcpu_idle.filter((e) => e);
  const coresTotal = cpu.xcpu_total.filter((e) => e);
  let resultsCores = [0, 0, 0, 0];

  let result = resultsCores.map((_, index) => {
    let diffIdle = coresIdle[index] - pCoresIdle[index];
    let diffTotal = coresTotal[index] - pCoresTotal[index];

    let result = (diffTotal - diffIdle) / diffTotal * 100;
    const r = result > 0 ? result : 0;

    return Math.round(r);
  });

  return result;
}

function updateCpuStats(cpu: GTop.glibtop_cpu): number {
  let resultCpu = 0;
  // Obtener información previa del cpu
  const { idle: previousCpuIdle, total: previousCpuTotal } = cpu;

  // Actualizar la información de la cpu
  GTop.glibtop_get_cpu(cpu);

  // Comparar la información previa y actual del cpu
  const totalDiff = cpu.total - previousCpuTotal;
  const idleDiff = cpu.idle - previousCpuIdle;

  resultCpu = Math.round(((totalDiff - idleDiff) / totalDiff) * 100);

  return resultCpu > 0 ? resultCpu : 0;
}

export {
  GetCpuStats,
  GetStatsByCore,
}
