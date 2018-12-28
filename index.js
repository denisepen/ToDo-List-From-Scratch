let listForm = document.getElementById('listMaker');
listForm.addEventListener("submit", addListItem);



function addListItem (event) {
  event.preventDefault();
 console.log(event)



  let inputValue = event.target[0].value;

  let workRadio = document.getElementById('work');
  let homeRadio = document.getElementById('home');

  if (inputValue.length > 0 && (workRadio.checked || homeRadio.checked) ) {
    console.log(inputValue);

    let homeListElement = document.getElementById("homeList")


    let newListItem = document.createElement("li");
    newListItem.innerHTML = inputValue;
    newListItem.addEventListener("click", toggleComplete);

    function toggleComplete(){
    // add line through completed item on list
      if (!this.style.textDecoration || (this.style.textDecoration === "initial")) {
        this.style.textDecoration = "line-through"
        this.style.color = "red"
      } else {
        this.style.textDecoration = "initial"
        this.style.color = "black"
      }
    }

    // const oldHTML = listElement.innerHTML;
    // listElement.innerHTML = ''
    //
    // listElement.appendChild(newListItem);
    //
    // listElement.innerHTML += oldHTML;
    //


    let classAttr = ""
    if (workRadio.checked) {
       classAttr = "work"
       console.log("work")
    } else {
       classAttr = "home"
       console.log("home")
    }

    newListItem.setAttribute("class", classAttr)

    let workUl = document.getElementById("workList")

    if(newListItem.className === 'work') {
      workList.appendChild(newListItem)
    } else {
      homeListElement.appendChild(newListItem);
    }

    event.target[0].value = "";
    document.getElementById('home').checked = false;
    document.getElementById('work').checked = false;

    // let list = "";
  } else {
    alert ("You need to input a value & choose a list ")
  }
}

 // for (let i = 0; i < 10; i++) {
 //   // listItem.innerHTML = `Item #: ${i+1}`;
 //   let t = document.createTextNode(`Item #: ${i+1}`);
 //   let listItem = document.createElement("li");
 //     listItem.appendChild(t);
 //     listElement.appendChild(listItem);
 //   //
 // }



 // let redAttr = document.createAttribute("class")
 // redAttr.value = "red";
 //
 // // para.setAttributeNode(redAttr);
 //
 // let lis = document.getElementsByTagName("li");
 //   console.log(lis)
 // for (let i=0; i< lis.length; i++) {
 //   let singleLi = lis[i];
 //   // console.log(singleLi)
 //     // singleLi.classList.add("red");
 //     singleLi.setAttribute("style", "color: red")
 //
 // }

 // listElement.appendChild(t);

 // listElement.appendChild(list);
