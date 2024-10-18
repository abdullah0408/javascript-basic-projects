function updateBubbles() {
    bubbles = '';
    for (let i=0; i<105; i++) {
        bubbles += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector('#pbottom').innerHTML = bubbles;
}

updateBubbles();