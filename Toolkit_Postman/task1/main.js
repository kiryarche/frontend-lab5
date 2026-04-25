import { Application, Graphics } from "pixi.js";

const app = new Application();

await app.init({
    width: 800,
    height: 600,
    backgroundColor: 0xeeeeee
});

document.body.appendChild(app.canvas);

const rectangle = new Graphics();

rectangle
    .rect(-100, -50, 200, 100)
    .fill(0x3498db);

rectangle.x = app.screen.width / 2;
rectangle.y = app.screen.height / 2;

app.stage.addChild(rectangle);

app.ticker.add(() => {
    rectangle.rotation += 0.03;
});