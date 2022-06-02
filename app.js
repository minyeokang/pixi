const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 0x23395d;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = "absolute";
document.body.appendChild(app.view);

/*
const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle
  .beginFill(0xaa33bb)
  .lineStyle(4, 0xffea00, 1)
  .drawRect(200, 200, 100, 120)
  .endFill();
app.stage.addChild(rectangle);

const poly = new Graphics();
poly
  .beginFill(0xff66ff)
  .drawPolygon([600, 50, 800, 150, 900, 300, 400, 400])
  .endFill();
app.stage.addChild(poly);

const circle = new Graphics();
circle.beginFill(0x22aacc).drawCircle(440, 200, 80).endFill();
app.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(5, 0xffea00, 1).moveTo(1500, 100).lineTo(1500, 800);
app.stage.addChild(line);

const torus = new Graphics();
torus
  .beginFill(0xfffddd)
  .drawTorus(100, 500, 80, 100, 0, Math.PI / 2)
  .endFill();
app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xadadad).drawStar(700, 500, 7, 80).endFill();
app.stage.addChild(star);

const style = new PIXI.TextStyle({
  fontFamily: "Montserrat",
  fontSize: 40,
  fill: "deepskyblue",
  stroke: "#ffffff",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowDistance: 10,
  dropShadowAngle: Math.PI / 2,
  dropShadowBlur: 4,
  dropShadowColor: "#000000",
});
const myText = new PIXI.Text("hello world", style);
//app.stage.addChild(myText);

myText.text = "change it";
myText.style.wordWrap = true;
myText.style.align = "center";

//const char1Texture = PIXI.Texture.from("./logo.png");
//const char1Sprite = new PIXI.Sprite(char1Texture);

const char1Sprite = PIXI.Sprite.from("./logo.png");
app.stage.addChild(char1Sprite);

//자리값 변경방법은 가로세로값 변경이나 스케일, 포지션 등등 다양하게 이루어진다

//char1Sprite.width = 500;
//char1Sprite.height = 500;

char1Sprite.scale.x = 1.5;
char1Sprite.scale.y = 2;
//char1Sprite.scale.set(2, 2);

char1Sprite.x = 200;
char1Sprite.y = 500;
*/

//app.ticker.add((delta) => loop(delta));

//function loop(delta) {
//make small rect randomly by 60times per second
/*const rect = new Graphics();
    rect
      .beginFill(0xffffff)
      .drawRect(
        Math.random() * app.screen.width,
        Math.random() * app.screen.height,
        10,
        10
      )
      .endFill();
    app.stage.addChild(rect);*/

//move this sprite by 1px
//char1Sprite.x += 1;

//rotate this sprite
//char1Sprite.rotation += 0.01;
//}

//char1Sprite.position.set(800, 400);

//char1Sprite.rotation =  1;
//if you want to change the axis of turning point
//char1Sprite.anchor.x = 0.5;
//char1Sprite.anchor.y = 0.5;
// or  char1Sprite.anchor.set(0.5, 0.5);
//this following will make the sprite rotating 360deg not hanging at the wall

//adding eventlistner on the sprite, when you click this image, its size will be changed. don't forget to add interative = true and if you want to change cursor, add buttonMode = true
/*char1Sprite.interactive = true;
char1Sprite.buttonMode = true;

char1Sprite.on("pointerdown", function () {
  char1Sprite.scale.x += 0.1;
  char1Sprite.scale.y += 0.1;
});

//키보드화살표 오른쪽왼쪽누르는대로 이미지가 이동
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") char1Sprite.x += 10;
  if (e.key === "ArrowLeft") char1Sprite.x -= 10;
});

//컨테이너를 relative한 박스로 생각하고
//여기에 추가되는 이미지들이 박스를 기준으로 앱솔루트처럼 이동한다고 생각하면됨 그래서 밑에 콘솔로 컨테이너 가로값을 변경했지만 컨테이너안에 세번째이미지 가로값을 출력해보면 0이나오는거
const container = new PIXI.Container();

const char2Sprite = PIXI.Sprite.from("./icon_rate.png");
container.addChild(char2Sprite);
const char3Sprite = PIXI.Sprite.from("./icon_star.png");
container.addChild(char3Sprite);

app.stage.addChild(container);

char2Sprite.y = 200;
container.x = 500;
console.log(char3Sprite.x);
console.log(char3Sprite.getGlobalPosition());
console.log(container.children);

//파티클컨테이너
const particleContainer = new PIXI.ParticleContainer(1000, {
  position: true,
  rotation: true,
  vertices: true,
  tint: true,
  uvs: true,
});

/*const loader = PIXI.Loader.shared;
loader
  .add(["./scroll.png", "./cast_cat.png"])
  //.add("char4Texture", "./cast_cat.png")
  .load(setup);
function setup(loader, resources) {
  const char4Sprite = new PIXI.Sprite(resources["./scroll.png"].texture);
  char4Sprite.y = 400;
  app.stage.addChild(char4Sprite);
}
loader.onLoad.add(function () {
  console.log("on Load");
});
*/

const loader = PIXI.Loader.shared;
loader.add("tileset", "./still1.jpg").load(setup);
function setup(loader, resources) {
  const texture1 = resources.tileset.texture;
  const rect1 = new PIXI.Rectangle(0, 0, 100, 100);
  texture1.frame = rect1;
  const spr1 = new PIXI.Sprite(texture1);
  spr1.scale.set(2, 2);
  app.stage.addChild(spr1);

  const texture2 = new PIXI.Texture(resources.tileset.texture);
  const rect2 = new PIXI.Rectangle(50, 0, 100, 100);
  texture2.frame = rect2;
  const spr2 = new PIXI.Sprite(texture2);
  spr2.scale.set(2, 2);
  spr2.position.set(200, 200);
  app.stage.addChild(spr2);
}
