// get all
const getProductList = async (url) => {
  try {
    let res = await fetch(url, {
        method: "GET"
    });
    let dataUsers = await res.json();
    return dataUsers;
  } catch (error) {
    console.log(error);
  }
}

// get item 
const getProduct = async (url, id) => {
  try {
    let res = await fetch(`${url}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export {getProductList, getProduct};

