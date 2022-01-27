
var main=document.getElementById('main')
var wrapper = document.createElement('div');
var generateButton= document.createElement('button');

generateButton.textContent='Generate';
main.append(generateButton);


generateButton.style=`
  padding: 12px;
  background-color: #3944BC;
  color: #ffffff;
border-radius: 5px;
border:none;
`

wrapper.style = `
width: 800px;
height:400px;
border: 1px solid grey;
position:relative;
margin: 30px auto 0px;
`;

main.style=`
width: 800px;
margin: 30px auto 0px;
font-family: 'Open Sans', sans-serif;
font-size: 12px
`


var ball = document.createElement("div");
ball.style = `
width:30px;
height:30px;
top: 200px;
left:100px;
border-radius:50%;
background:#151E3D;
position:absolute;
display:none;
color:#ffffff;
`;
generateButton.addEventListener('click',function(e){
  console.log('clicked');
  ball.style.display='block'
})

var speedTop = 10;
var speedLeft = 15;

wrapper.appendChild(ball);
var direction = 1;

ball.addEventListener("click", function (event) {
 setInterval(function () {
//     var newTop = parseInt(event.target.style.top) + 5 * direction + "px";
//     event.target.style.top = newTop;
//     if (
//       parseInt(newTop) >= wrapper.clientHeight - ball.clientHeight ||
//       parseInt(newTop) <= 0
//     ) {
//       direction *= -1;
//     }
//   }, 1000 / 60); //60fps
// });
ballTopPosition = parseInt(ball.style.top);
ballTopPosition += speedTop;
ball.style.top = ballTopPosition + "px";

if (ballTopPosition <= 0 || ballTopPosition >= wrapper.clientHeight - ball.clientHeight) {
    speedTop *= -1;
}

ballLeftPosition = parseInt(ball.style.left);
ballLeftPosition += speedLeft;
ball.style.left = ballLeftPosition + "px";

if (ballLeftPosition <= 0 || ballLeftPosition >= wrapper.clientWidth - ball.clientWidth) {
    speedLeft *= -1;
}
}, 1000 / 40);
})

main.append(wrapper);

var workProcess = document.createElement('div');
main.append(workProcess)

var lists=document.createElement('ul');
workProcess.append(lists)

var li1=document.createElement("li");
li1.innerHTML='Click on generate to generate ball'
lists.append(li1)
var li2=document.createElement('li')
li2.innerHTML='Click on ball to make it bounce'
lists.append(li2)

li1.style=`
color: #787276;
`;
li2.style=`
color: #787276;
`;