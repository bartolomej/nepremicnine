// Open a page of ads on nepremicnine.net and run this function to extract 27-09-2022
function getCurrentPageItems() {
    const items = [...document.querySelectorAll(".oglas_container")].map(
      (adItem) => adItem.innerText.split("\n")
    );
    const senitizedItems = items.map(item => item.map(e => e.trim()).filter(Boolean));
    return JSON.stringify(senitizedItems);
}

