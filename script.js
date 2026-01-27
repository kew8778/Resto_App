'use strict';

const bubbleBntCloseElem = document.querySelector('.XMark');
bubbleBntCloseElem.addEventListener('click', hideBubbleBlock);

function hideBubbleBlock() {
  const bubbleBlock = document.querySelector('.Bubble');
  bubbleBlock.classList.add('VisuallyHidden');
}
