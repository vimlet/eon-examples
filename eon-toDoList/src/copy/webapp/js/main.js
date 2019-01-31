function addItem() {
  var text = document.querySelector("eon-text");
  var textValue = text.value;
  
  // Denied empty values
  if (textValue != "") {
    // Append the list new item
    appendItem(textValue);

    // Reset the eon-text value
    text.reset();
  }
}

function appendItem(itemText) {
  // Make sure all declared elements are ready to work with them
  eon.onReady(function () {
    // Create item
    var item = createItem(itemText);

    var list = document.querySelector(".list");
    // Inserts the new item at the beginning of the list
    list.insertBefore(item, list.children[0]);
  });
}

function createItem(itemText) {
  var item = document.createElement("div");
  // Create item status checkbox
  var statusCheck = document.createElement("eon-checkbox");
  // Set up checkbox
  statusCheck.classList.add("checkboxItem");
  statusCheck.label = itemText;
  statusCheck.inline = true;

  // Create edit button
  var removeBtn = document.createElement("eon-button");
  removeBtn.vicon = "vicon-bin";
  removeItemListener(item, removeBtn);
  
  // Append content
  item.appendChild(statusCheck);
  item.appendChild(removeBtn);
  return item;
}

function removeItemListener(item, removeBtn) {
  // Crate edit button on click listener
  removeBtn.onclick = function(){
    // Get item
    item.parentNode.removeChild(item);
  };
}