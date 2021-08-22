function Memory(menu) {
  let loss = 0;
  let hight = 180;
  if (menu === false) {
    document.getElementById("Extra-Memory").innerText = loss;
  } else if (menu === true) {
    document.getElementById("Extra-Memory").innerText = hight;
  }
  totalSubmit();
}

function Charges(amount) {
  let look = 0;
  let hights = 20;
  if (amount === false) {
    document.getElementById("Delivery-Charge").innerText = look;
  } else if (amount === true) {
    document.getElementById("Delivery-Charge").innerText = hights;
  }
  totalSubmit();
}

function Storages(amount) {
  let loss = 0;
  let toolbar = 100;
  let height = 180;
  if (amount === "Storage-one") {
    document.getElementById("Extra-Storage").innerText = loss;
  } else if (amount === "Storage-Two") {
    document.getElementById("Extra-Storage").innerText = toolbar;
  } else if (amount === "Storage-Three") {
    document.getElementById("Extra-Storage").innerText = height;
  }
  totalSubmit();
}

function totalSubmit() {
  const BestPrice = document.getElementById("Best-Price").innerText;
  let totalBestPrice = parseInt(BestPrice);

  const ExtraMemory = document.getElementById("Extra-Memory").innerText;
  let totalExtraMemory = parseInt(ExtraMemory);

  const ExtraStorage = document.getElementById("Extra-Storage").innerText;
  let totalExtraStorage = parseInt(ExtraStorage);

  const DeliveryCharge = document.getElementById("Delivery-Charge").innerText;
  let totalDeliveryCharge = parseInt(DeliveryCharge);

  const totalAmounts =
    totalBestPrice + totalExtraMemory + totalExtraStorage + totalDeliveryCharge;

  document.getElementById("Total-Price-amount").innerText = totalAmounts;
  document.getElementById("Total-Price").innerText = totalAmounts;
}

function pomoCode() {
  const Username = document.getElementById("username").value;
  if (Username === "stevekaku") {
    const Total = document.getElementById("Total-Price-amount").innerText;
    const TotalAmount = parseInt(Total);
    const Price = TotalAmount * 0.8;
    const TotalPrice = Math.round(Price);
    document.getElementById("Total-Price-amount").innerText = TotalPrice;
    document.getElementById("username").value = "";
    alert("Pomo Code Success!");
  } else {
    alert("Pomo Code Worng!");
  }
}
