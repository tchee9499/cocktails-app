console.log("connected ok!")
const modal = document.querySelector("#modal")
const drinkName = document.querySelector("#drinkName")
const drinkName = document.querySelector("#ingredients")

const getDrinks = () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
    fetch (url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        
            for (let i = 0; i < res.drinks.length; i++) {
                // console.log(res.drinks[i])
                const drink = res.drinks[i]

                const drinkImage = document.createElement("img")
                drinkImage.setAttribute("src", drink.strDrinkThumb)
                drinkImage.setAttribute("alt", drink.strDrink)

                document.querySelector("main").appendChild(drinkImage)
                const drinkDiv = document.createElement("div")
                const drinkDesc = document.createElement("p")
                drinkDesc.innerText = drink.strDrink
                drinkDiv.append(drinkImage, drinkDesc)
                document.querySelector("main").appendChild(drinkDiv)
                drinkDiv.style.height = '200px'
                drinkImage.style.display = 'block'
                drinkImage.style.height = '80%'
                drinkImage.style.margin = '0 auto'
                drinkDiv.style.textAlign = 'center'
                drinkImage.style.borderRadius = '10px'
                drinkDiv.addEventListener("click", () => {
                    fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        modal.style.display = "flex"
                        drinkName.innerText = res.drinks[0].strDrink
                        ingredients.innerHTML = ''
                        for (let i = 1; i <= 12; i++) {
                            if(res.drinks[0][`strIngredient${i}`]){
                                const li = document.createElement('li')
                                li.innerText = res.drinks[0][`strIngredient${i}`]
                                ingredients.appendChild(li)
                            } else {
                                break
                            }
    
}
                    })
                })
            }
        })
    }
getDrinks()

