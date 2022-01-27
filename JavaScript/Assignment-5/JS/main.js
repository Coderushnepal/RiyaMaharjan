
var gameContainer= document.getElementsByClassName('game-container');

var wrongLettersContainer= document.createElement('div');
wrongLettersContainer.className='wrong-letters-container';
gameContainer.append(wrongLettersContainer);

var wrongLetter=document.createElement('div');
wrongLetter.id='wrong-letters';
wrongLettersContainer.append(wrongLetter)

// Container for final message
var popupContainer=document.createElement('div');
popupContainer.className='popup-container'
popupContainer.id='popup-container'
document.body.append(popupContainer)

var pop= document.createElement('div');
pop.className='popup';
popupContainer.append(pop)

var finalMsg=document.createElement('h2')
finalMsg.id='final-message'
pop.append(finalMsg)

var playButton=document.createElement('button')
playButton.id='play-button'
playButton.innerHTML='Play Again'
pop.append(playButton)

// Notification 
var notificationContainer=document.createElement('div')
notificationContainer.className='notification-container'
notificationContainer.id='notification-conatiner'
document.body.append(notificationContainer)

var para=document.createElement('p')
para.innerHTML='You have already entered this letter'
notificationContainer.append(para);

