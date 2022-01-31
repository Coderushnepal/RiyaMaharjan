var body= document.body;
body.style=`
background-color: #296ca8;
    color: #fff;
    font-family: 'Roboto', sans-serif;
`
var main= document.createElement('div')
body.append(main)
main.style=`
width:70%;
margin:20px auto;
`

var heading= document.createElement('h1')
heading.innerHTML='My Blog'
heading.style.textAlign='center'
main.append(heading)

var filterContainer= document.createElement('div')
main.append(filterContainer)

var filterInput= document.createElement('input')
filterInput.setAttribute('input','text')
filterInput.setAttribute('placeholder','Filter Posts...')
filterInput.setAttribute('id','filter')
filterInput.setAttribute('class','filter')

filterInput.style=`
width: 100%;
    padding: 12px;
    font-size: 16px;
`
filterContainer.append(filterInput)

var blogContainer= document.createElement('div');
blogContainer.style=`
margin-bottom:30px;
`
blogContainer.setAttribute('id','blogContainer')
main.append(blogContainer)

var loading=document.createElement('div')
loading.className='loader'
main.append(loading)

var circle=document.createElement('div')
circle.classList.add('circle')
loading.append(circle);

var circle1=document.createElement('div')
circle1.classList.add('circle')
loading.append(circle1);

var circle2=document.createElement('div')
circle2.classList.add('circle')
loading.append(circle2);