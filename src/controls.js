export function Controls(){
      document.addEventListener("keydown", event => {
          //left
          if (event.isComposing || event.keyCode === 37) {
              console.log("left");
              return;
          }
          //right
          if (event.isComposing || event.keyCode === 39) {
              console.log("right");
            return;
          }
          //up
          if (event.isComposing || event.keyCode === 38) {
              console.log("up");
            return;
          }
          //down
          if (event.isComposing || event.keyCode === 40) {
              console.log("down");
            return;
          }
      });
}

