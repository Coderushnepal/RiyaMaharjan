var defaultBallSize = 30;
var containerSize = 450;
document.body.style.background = '#eeeeee'
document.body.style.fontFamily = 'Open Sans', 'sans-serif';
document.body.style.fontSize = '12px';

var main = document.createElement('div');
main.style = `
width:450px;
margin:0px auto;
`
document.body.append(main);

function position(size) {
    return {
        top: parseInt(Math.random() * size),
        left: parseInt(Math.random() * size),
    };
}
var generateBtn = document.createElement('button');
generateBtn.innerHTML = "Generate Balls"

generateBtn.style = `
background-color: #072F5F;
color: #ffffff;
padding:16px;
margin-bottom: 20px;
border-radius:10px;
border: none;
`

main.append(generateBtn);
generateBtn.addEventListener('click', function (e) {
    for (var i = 0; i < 5; i++) {
        var ball = new Ball(defaultBallSize, i);
        ball.create(container.element, position(containerSize - defaultBallSize));
    }
})

var container = new Container(containerSize);
container.create(main);

var workProcess = document.createElement('div');
workProcess.style = `
background:#ffffff;
border-radius: 8px;
padding:2px;
margin-top:10px
`
main.append(workProcess)

var lists = document.createElement('ul');
workProcess.append(lists)

var li1 = document.createElement("li");
li1.innerHTML = 'Click on [Generate Balls] button to generate 5 balls on each click'
lists.append(li1)
var li2 = document.createElement('li')
li2.innerHTML = 'To make a prefered ball bounce, click on it'
lists.append(li2)

li1.style = `
color:#555053;
`;
li2.style = `
color:#555053;
`;