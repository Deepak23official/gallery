let pre = document.querySelectorAll('.inner img').forEach(image => {
    image.onclick = () =>{ document.querySelector('.popup').style.display = 'block';
    document.querySelector('.popup img').src=image.getAttribute('src')
  }
   });
      document.querySelector('.popup span').onclick = () =>{
        document.querySelector('.popup').style.display = 'none';
      }





  let container= document.querySelectorAll('.s1')
  let filterimg1 = document.querySelectorAll(".d1")
  console.log(container,filterimg1)

  const filtercard = e => {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    console.log(e.target)

    filterimg1 .forEach(d1 =>{
      d1.classList.add("hide")
      if(d1.dataset.name === e.target.dataset.name || e.target.dataset.name === "All" ){
        d1.classList.remove("hide")
      }
    })
  }
     
  container.forEach(li => li.addEventListener("click", filtercard))

            