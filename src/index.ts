import { registerMicroApps, start } from "qiankun";

(window as any).SC_DISABLE_SPEEDY = false;

registerMicroApps([
  {
    name: "app1",
    entry: "http://localhost:1111/app1.html",
    activeRule: "/app1",
    container: "#app",
  },
  {
    name: "app2",
    entry: "http://localhost:2222/app2.html",
    activeRule: "/app2",
    container: "#app",
  },
  {
    name: "app3",
    entry: "http://localhost:3333/app3.html",
    activeRule: "/app3",
    container: "#app",
  },
]);

start();
