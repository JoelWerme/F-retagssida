var popupElement = document.getElementById("ShopPopup");

function shopToggle(){
    if (popupElement.classList.contains("items-enabled")) {
        popupElement.classList.remove("items-enabled");
      } else {
        popupElement.classList.add("items-enabled");
      }
}