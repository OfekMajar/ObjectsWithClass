class Entity {
  constructor(name, height, width, y, x, lifes, image, speed, id) {
    this.name = name;
    this.width = `${width}px`;
    this.height = height;
    this.x = x;
    this.y = y;
    this.lifes = lifes;
    this.image = image;
    this.speed = speed;
    this.id = id;
  }
  draw() {
    return `
      <div class="enemyDiv"> 
      <img src="${this.image}" alt="marioImg" id="${this.name}${this.id}">
      </div>
      `;
  }
}
class Player extends Entity {
  constructor(name, height, width, y, x, lifes, image, speed) {
    super(name, height, width, y, x, lifes, image, speed);
  }

  draw() {
    return `
      <div id="PlayerDiv" style= "height: max-content;
      width: max-content;"> 
      <img src="${this.image}" alt="marioImg" id="${this.name}Img" style="width:${this.width}px; height:${this.height}px; transform: translate(100px,100px);">
      </div>
      `;
  }
  movePlayerRight(){
    window.addEventListener("keydown",(e)=>{
        if(e.code===100){
            console.log("hii");
        }
    })
  }
}
document.addEventListener("keydown",function (event){
    if(event.key==="d"){
        console.log("hii");
    }
})
class Enemy extends Entity {
  constructor(name, height, width, x, y, image, speed, damage) {
    super(name, height, width, x, y, image, speed);
    this.damage = damage;
  }
  draw() {
    return `
      <div class="enemyDiv"> 
      <img src="${this.image}" alt="marioImg" id="${this.name}${this.id}">
      </div>
      `;
  }
}

class Platform {
  constructor(location, height, width, texture) {}
}
let player1 = new Player(
  "Mario",
  64,
  32,
  100,
  100,
  3,
  "https://stiemannkj1.gitlab.io/images/marios-size-and-shape/super-mario.gif",
  10
);
container.innerHTML = player1.draw();
