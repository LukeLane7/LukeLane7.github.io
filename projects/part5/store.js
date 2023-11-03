const getStore = async () => {

    const url = "https://lukelane7.github.io/projects/part5/store-items.json";

    try {
      const link = await fetch(url); 
      console.log(link); 
      return await link.json();
    } catch(error) {
      console.log(error); 
    }
  };
  
  const showStore = async () => {
    let store = await getStore(); 
    let storeSection = document.getElementById("main-content");

    store.forEach(item => {
        
        storeSection.append(getStoreItem(item))
      });    
  };
  
  const getStoreItem = (item) => {

    
    let section = document.createElement("div");
    section.id = "store-listing";
    section.classList.add("col1of2");

    //Tried to get 4 of them into a flex container so they would line up next to eachother and have another row underneath the 4
    //but i couldnt correctly loop 4 of them together in this or the other function sooo it doesnt look as great as i wanted/thought it would

    const h8 = document.createElement("h8");
    h8.innerText = item.name; 
    section.append(h8);

    const img = document.createElement("img"); 
    const imgCont = document.createElement("div");
    img.src = item.img;
    img.classList.add("store-img");
    imgCont.append(img);
    section.append(imgCont);

    const h6 = document.createElement("h6");
    h6.innerText = item.price; 
    section.append(h6);

    const pButton = document.createElement("button");
    pButton.innerText = "Sign in & Purchase";
    pButton.id = "store-button";
    section.append(pButton);

    return section;

  };

  window.onload = () => showStore(); 