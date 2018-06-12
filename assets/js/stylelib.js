function styleTag(tagId, innerHTML) {
  document.getElementById(tagId).innerHTML = innerHTML;
}

function setBackground(tagId, backgroundColor) {
  document.getElementById(tagId).style.backgroundColor = backgroundColor;
}

function setColor(tagId, color) {
  document.getElementById(tagId).style.color = color;
}

setBackground('contentArea', 'purple');