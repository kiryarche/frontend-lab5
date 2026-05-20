import { Application, Graphics } from "pixi.js";
import { colorFromEnv, env, logDebug, renderEnvTable } from "../shared/env.js";

renderEnvTable("#env-table");

const mount = document.querySelector("#pixi-root");
const app = new Application();

await app.init({
  resizeTo: mount,
  backgroundColor: 0xf8fafc,
  antialias: true
});

mount.appendChild(app.canvas);

const rectangle = new Graphics();
const rectangleColor = colorFromEnv(env.rectangleColor);

rectangle
  .roundRect(-130, -70, 260, 140, 10)
  .fill(rectangleColor)
  .stroke({ width: 6, color: 0x111827, alpha: 0.18 });

rectangle.x = app.screen.width / 2;
rectangle.y = app.screen.height / 2;

app.stage.addChild(rectangle);

app.ticker.add((ticker) => {
  rectangle.rotation += env.rotationSpeed * ticker.deltaTime;
  rectangle.x = app.screen.width / 2;
  rectangle.y = app.screen.height / 2;
});

logDebug("PixiJS config", {
  mode: env.appEnv,
  rotationSpeed: env.rotationSpeed,
  rectangleColor: env.rectangleColor
});
