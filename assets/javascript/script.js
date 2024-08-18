
window.addEventListener("DOMContentLoaded", ()=>{
    // https://rickandmortyapi.com/api/character


    const $button = document.querySelector("#sendbutton")
    const $input = document.querySelector("#inputtext")
    const $section = document.querySelector("section")
    let num = 0;
    let score = 0;
    let count = 0;

    $button.addEventListener("click", ()=>{
       const $img = document.querySelector("#person")
       const imgsrc = $img.src
       fetch("https://rickandmortyapi.com/api/character").then((response)=>{
         response.json().then((data)=>{
          console.log(data.results)
          $img.src =   data.results[num].image
          
          
           $img.addEventListener("mousemove", ()=>{
              $img.src = "../../imgs/ricksmile.png"
           })
       
           $img.addEventListener("mouseout", ()=>{
               $img.src = `${data.results[num].image}`
            })
       
              
         })

        count++
        console.log(count)

         if(num === 1 && $input.value === "Rick" || num === 1 && $input.value === "rick"){
            score++
         
         }
          if(num === 2 && $input.value === "Morty" || num === 2 && $input.value === "morty"){
            score++
          
         }
         if(num === 3 && $input.value === "Summer" || num === 3 && $input.value === "summer"){
            score++
           
         }

         if(num === 4 && $input.value === "Beth" || num === 4 && $input.value === "beth"){
            score++    
         }

         if(num === 5 && $input.value === "Jerry" || num === 5 && $input.value === "jerry"){
            score++    
         }

         if(num === 6 && $input.value === "Abadango" || num === 6 && $input.value === "Abadango Cluster Princess" || num === 6 && $input.value === "abadango"){
            score++    
         }

         if(num === 7 && $input.value === "Abradolf Lincler" || num === 7 && $input.value === "Abradolf"  || num === 7 && $input.value === "abradolf lincler") {
            score++    
         }else
         
         if(num === 8 && $input.value === "Adjudicator Rick" || num === 8 && $input.value === "Adjudicator" || num === 8 && $input.value === "adjudicator"){
            score++    
         }

         if(num === 9 && $input.value === "Agency Director" || num === 9 && $input.value === "Director" || num === 9 && $input.value === "agency director"){
            score++    
         }

        const scoreimg = document.querySelector("#scoreimg")
        
        
        if(score <= 4 || score === 0){
         scoreimg.src = "../../imgs/rickloser.png"
         
        }else if(score <= 7){
         scoreimg.src = ""
         scoreimg.src = "../../imgs/rickfocused.png"
        }else if(score <= 10){
          scoreimg.src = ""
         scoreimg.src = "../../imgs/rickwins.png"
        }

         console.log(num)
         console.log(score)
      })

      const level = document.querySelector("#boxlevel p span")

      level.innerHTML = num +1;

         $button.innerHTML = "Enviar"
         $input.removeAttribute("disabled")
         num++

         if(num === 9){
            num = 0
         }

         if(count === 9 && score <=4){
            const $div = document.createElement("div")
            $div.classList.add("boxresult")
            $section.appendChild($div)
            const $h1 = document.createElement("h1")
            $h1.innerText = "Você Não é o verdadeiro rick!"
            $h1.classList.add("titleresult")
            $div.appendChild($h1)

            const boxscorebtn = document.createElement("div")
            boxscorebtn.classList.add("boxscoreandbutton")
            $div.appendChild(boxscorebtn)

            const $p = document.createElement("p")
            $p.innerHTML = "Pontuação: "
            boxscorebtn.appendChild($p)

            const $strong = document.createElement("strong")
            $strong.innerHTML =score;
            $p.appendChild($strong)

            const $buttonresult = document.createElement("button")
            $buttonresult.innerHTML = "Play Again"

            boxscorebtn.appendChild($buttonresult)
            
            $buttonresult.addEventListener("click", ()=>{
               $div.remove()
            })
            
            num = 1;
            count = 0;
            score = 0;
         }
         else if(count === 9 && score <=7){
            const $div = document.createElement("div")
            $div.classList.add("boxresult")
            $section.appendChild($div)
            const $h1 = document.createElement("h1")
            $h1.innerText = "Você esta no caminho certo!"
            $h1.classList.add("titleresult")
            $div.appendChild($h1)

            const boxscorebtn = document.createElement("div")
            boxscorebtn.classList.add("boxscoreandbutton")
            $div.appendChild(boxscorebtn)

            const $p = document.createElement("p")
            $p.innerHTML = "Pontuação: "
            boxscorebtn.appendChild($p)

            const $strong = document.createElement("strong")
            $strong.innerHTML =score;
            $p.appendChild($strong)

            const $buttonresult = document.createElement("button")
            $buttonresult.innerHTML = "Play Again"

            boxscorebtn.appendChild($buttonresult)
             
            $buttonresult.addEventListener("click", ()=>{
               $div.remove()
            })
            
            num = 1;
            count = 0;
            score = 0;
         }
         else if(count === 9 && score <=10){
            const $div = document.createElement("div")
            $div.classList.add("boxresult")
            $section.appendChild($div)
            const $h1 = document.createElement("h1")
            $h1.innerText = "Você é o verdadeiro rick!"
            $h1.classList.add("titleresult")
            $div.appendChild($h1)

            const boxscorebtn = document.createElement("div")
            boxscorebtn.classList.add("boxscoreandbutton")
            $div.appendChild(boxscorebtn)

            const $p = document.createElement("p")
            $p.innerHTML = "Pontuação: "
            boxscorebtn.appendChild($p)

            const $strong = document.createElement("strong")
            $strong.innerHTML =score;
            $p.appendChild($strong)

            const $buttonresult = document.createElement("button")
            $buttonresult.innerHTML = "Play Again"

            boxscorebtn.appendChild($buttonresult)

            $buttonresult.addEventListener("click", ()=>{
               $div.remove()
            })
            
            num = 1;
            count = 0;
            score = 0;
         }
      })
      
   
     
})

