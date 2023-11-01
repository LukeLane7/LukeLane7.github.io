const getStore = async () => {

    const url = await fetch("store-items.json");

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
  };
  
  const getStoreItem = (movie) => {
    
  };

  window.onload = () => showStore(); 