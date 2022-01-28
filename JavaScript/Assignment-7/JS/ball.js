function Ball(size, id) {
    this.width = size;
    this.height = size;

    this.id = id;

    this.create = function (container, position) {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);

        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.borderRadius = "50%";
        this.element.style.background =random_bg_color();
        // this.element.innerHTML=this.id;
        this.element.style.position = "absolute";
        this.element.style.top = position.top + "px";
        this.element.style.left = position.left + "px";

        var defaultSpeed = 10;
    
        var speedTop = Math.ceil(parseInt(Math.random() * defaultSpeed));
        var speedLeft = Math.ceil(parseInt(Math.random() * defaultSpeed));

        this.element.addEventListener("click", function (e) {
            console.log(this.id);
            setInterval(function () {
                var newTop = parseInt(e.target.style.top) + speedTop + "px";
                e.target.style.top = newTop;
                if (
                    parseInt(newTop) >= (containerSize - defaultBallSize) ||
                    parseInt(newTop) <= 0
                ) {
                    speedTop *= -1;
                }
                var newLeft = parseInt(e.target.style.left) + speedLeft + "px";
                e.target.style.left = newLeft;
                if (parseInt(newLeft) <= 0 || parseInt(newLeft) >= containerSize - defaultBallSize) {
                    speedLeft *= -1;
                }
            }, 1000 / 60); //60fps
        });

        container.appendChild(this.element);
    };
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = 100+ Math.floor(Math.random() * 256);
    var z = 50+ Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 	console.log(bgColor);
  
    return bgColor;
    }