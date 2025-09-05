let historyStack = [];

function showPage(pageId){
  const current = document.querySelector(".container.active");
  if(current){
    current.classList.remove("active");
    historyStack.push(current.id);
  }
  const next = document.getElementById(pageId);
  if(next) next.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function goBack(){
  const current = document.querySelector(".container.active");
  if(current) current.classList.remove("active");
  const prev = historyStack.pop();
    if(prev) document.getElementById(prev).classList.add("active");
}

function handleSignup(){
  alert("✅ Signup successful! Redirecting to login...");
  showPage('chooseLogin');
}

function predictRate(){
  const name = document.getElementById("wasteName").value;
  const cat = document.getElementById("wasteCategory").value;
  const qty = document.getElementById("quantity").value;
  let rate = 0;

  switch(cat){
    case "plastic": rate = 30; break;
    case "paper": rate = 12; break;
    case "metal": rate = 25; break;
    case "ewaste": rate = 200; break;
    case "glass": rate = 15; break;
  }

  document.getElementById("predictedPrice").innerText =
    `Predicted price for ${qty}kg of ${name}: ₹${qty * rate}`;
}

function filterProducts(){
  const term = document.getElementById("searchBox").value.toLowerCase();
  document.querySelectorAll("#buyerProducts .card").forEach(c => {
    const text = c.innerText.toLowerCase();
    c.style.display = text.includes(term) ? "block" : "none";
  });
}
