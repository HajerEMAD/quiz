" use srict mode"
let loading=document.querySelector(".loading");
let sidebarButton=document.querySelector(".sidebar-button")
let openSidebar=document.querySelector(".first");
let closeSidebar=document.querySelector(".second");

let sidebarListContainer=document.querySelector(".sidebar-container")
let sidebarListSpanOne=document.querySelector(".one");
let sidebarListSpanTwo=document.querySelector(".two");
let sidebarListSpanTree=document.querySelector(".three");
let sidebarListSpanFour=document.querySelector(".four");
let sidebarListSpanFive=document.querySelector(".five");
let firstMealsContainer =document.querySelector("#first-meals-container");
let mealDataContainer =document.querySelector("#meal-data-container");
let mealInstruction=document.querySelector(".data-instruction")
let mealName=document.querySelector(".meal-name");
let mealImg=document.querySelector(".img-container img");
let mealArea=document.querySelector(".meal-area h2");
let mealCategory=document.querySelector(".meal-category h2");
let mealRecipes=document.querySelector(".meal-recipes .row");
let mealYoutube=document.querySelector(".meal-tags .button-one a");
let mealSource=document.querySelector(".meal-tags .button-two a");
let nameInput=document.querySelector(".inputs-container #search-name");
let LetterInput=document.querySelector(".inputs-container #search-first-letter");
let SearchMealsContainer =document.querySelector("#search-meals-container");
let categoryContainer=document.querySelector("#category-container");
let categoryContainerTwo=document.querySelector("#category-container-two");
let areasContainer=document.querySelector("#areas");
let areasMeals=document.querySelector("#areas-meals");
let ingrediensContainer=document.querySelector("#ingrediens");
let ingrediensMeals=document.querySelector("#ingrediens-meals");
let contactName=document.querySelector("#name");
let contactEmail=document.querySelector("#email");
let contactAge=document.querySelector("#age");
let contactPhone=document.querySelector("#phone");
let contactPassword=document.querySelector("#password");
let contactRePassword=document.querySelector("#re-password");
let contactButton=document.querySelector(".submit");
let firstDataResponseResult;
 let mealDataResponseResult;
 let mealNameApi;
 let mealsObj="meals";


//               sidebar-effects
 async function sidebarList(){
    sidebarListSpanOne.style.setProperty("animation-name","sidebar-list-one")
    await sidebarListSpanTwo.style.setProperty("animation-name","sidebar-list-two")
    await sidebarListSpanTree.style.setProperty("animation-name","sidebar-list-three")
    await sidebarListSpanFour.style.setProperty("animation-name","sidebar-list-four")
    await sidebarListSpanFive.style.setProperty("animation-name","sidebar-list-five")
    await setListTranslate()
 }

function setListTranslate(){
     sidebarListSpanOne.style.setProperty("transform","translateY(-180px)")
     sidebarListSpanTwo.style.setProperty("transform","translateY(-170px)")
     sidebarListSpanTree.style.setProperty("transform","translateY(-160px)")
     sidebarListSpanFour.style.setProperty("transform","translateY(-150px)")
     sidebarListSpanFive.style.setProperty("transform","translateY(-140px)")
}
sidebarListContainer.style.transform="translateX(-80%)"
sidebarButton.addEventListener("click", async function(){
    if(sidebarListContainer.style.transform=="translateX(-80%)"){
 
        sidebarListContainer.style.setProperty("z-index","1");
       await sidebarListContainer.style.setProperty("animation-name","sidebarDispaly");
       await sidebarList()
         sidebarListContainer.style.transform ="translateX(0%)";  
           // Toggle classes for the button icons
        sidebarButton.querySelector('.first').classList.replace('d-block', 'd-none');
        sidebarButton.querySelector('.second').classList.replace('d-none', 'd-block');  
    }
    else{
      
        sidebarListContainer.style.setProperty("animation-name","sidebarReversed")
        sidebarListContainer.style.transform="translateX(-80%)"
        sidebarButton.querySelector('.first').classList.replace('d-none', 'd-block');
        sidebarButton.querySelector('.second').classList.replace('d-block', 'd-none');

    }
})
async function animationDirection(){
    sidebarListSpanOne.style.setProperty("animation-name","sidebar-list-one");
    await sidebarListSpanTwo.style.setProperty("animation-name","sidebar-list-two");
    await sidebarListSpanTree.style.setProperty("animation-name","sidebar-list-three");
    await sidebarListSpanFour.style.setProperty("animation-name","sidebar-list-four");
    await sidebarListSpanFive.style.setProperty("animation-name","sidebar-list-five");
    await sidebarListSpanOne.style.setProperty("animation-direction","reverse ");
    await sidebarListSpanTwo.style.setProperty("animation-direction","reverse ");
    await sidebarListSpanTree.style.setProperty("animation-direction","reverse ");
    await sidebarListSpanFour.style.setProperty("animation-direction","reverse ");
    await sidebarListSpanFive.style.setProperty("animation-direction","reverse ");
    await sidebarListSpanOne.style.setProperty("transform","translateY(0px)")
    await sidebarListSpanTwo.style.setProperty("transform","translateY(0px)")
    await sidebarListSpanTree.style.setProperty("transform","translateY(0px)")
    await sidebarListSpanFour.style.setProperty("transform","translateY(0px)")
    await sidebarListSpanFive.style.setProperty("transform","translateY(0px)")
    await sidebarListSpanOne.style.setProperty("opacity","0")
    await sidebarListSpanTwo.style.setProperty("opacity","0")
    await sidebarListSpanTree.style.setProperty("opacity","0")
    await sidebarListSpanFour.style.setProperty("opacity","0")
    await sidebarListSpanFive.style.setProperty("opacity","0")
   
}

class allMeals{
    constructor(name,img,des,area,ing){
         this.mealName=name;
         this.mealImg=img
         this.mealDescription=des
         this.mealArea=area
         this.mealIngrediens=ing
         this.mealIngDescription=des
         
    }
}
class nameNeed{
    constructor(name){
         this.mealName=name;
    }
}
class aboutMeal{
    constructor(instruction,name,img,area,category,recipes,tags,source,youtube){
        this.mealInstruction=instruction;
        this.mealName=name;
        this.mealImg=img;
        this.mealArea=area;
        this.mealCategory=category;
        this.mealRecipes=recipes;
        this.mealTags=tags;
        this.mealSource=source;
        this.mealYoutube=youtube;
    }
}


 async function getFirstApi(e){
    let firstData= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    let FirstDtatResponse= await firstData.json();
    await loading.style.setProperty("animation-name","loading");
    await document.querySelector("#side-bar").style.setProperty("opacity","1");
    await document.querySelector("#side-bar").style.setProperty("animation-name","sidebar");
    await document.querySelector("body").style.setProperty("overflow","visible");
    await loading.style.setProperty("z-index","-1");
    await loading.style.setProperty("opacity","0");
    firstDataResponseResult=FirstDtatResponse;
    console.log(firstDataResponseResult)
    console.log(firstDataResponseResult.meals[0])
    return firstDataResponseResult
}
 async function getMealData(){
    let mealData= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${localStorage.getItem("mealname")}`);
    let mealDtatResponse= await mealData.json();
    console.log( mealDtatResponse)
    let mealRes=[]
    for(let i=1 ;i<20;i++){
        if(mealDtatResponse.meals[0][`strMeasure${i}`]!=""&mealDtatResponse.meals[0][`strIngredient${i}`]!=""){
            mealRes.push(mealDtatResponse.meals[0][`strMeasure${i}`]+" "+mealDtatResponse.meals[0][`strIngredient${i}`])
        }
    }
    await loading.style.setProperty("animation-name","loading");
    await document.querySelector("#side-bar").style.setProperty("opacity","1");
    await document.querySelector("#side-bar").style.setProperty("animation-name","sidebar");
    await document.querySelector("body").style.setProperty("overflow","visible");
    await loading.style.setProperty("z-index","-1");
    await loading.style.setProperty("opacity","0");
    mealDataResponseResult=new aboutMeal(mealDtatResponse.meals[0].strInstructions,mealDtatResponse.meals[0].strMeal,mealDtatResponse.meals[0].strMealThumb,mealDtatResponse.meals[0].strArea,mealDtatResponse.meals[0].strCategory,mealRes,mealDtatResponse.meals[0].strTags,mealDtatResponse.meals[0].strSource,mealDtatResponse.meals[0].strYoutube);
    console.log(mealDataResponseResult)
    return mealDataResponseResult
}
//////////////////////////////////         search 
if(nameInput!=null){
    nameInput.addEventListener("input",async function(){
         let mealData= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.value}`);
        let mealDtatResponse= await mealData.json();
        let data = await mealDtatResponse
         console.log(SearchMealsContainer.innerHTML="")
          console.log(SearchMealsContainer!=null)
        if(SearchMealsContainer==null){
            await showMeals(data,SearchMealsContainer,`newpage2.html`)
        }
         if(SearchMealsContainer!=null) {
             SearchMealsContainer.innerHTML=""
           await showMeals(data,SearchMealsContainer,`newpage2.html`)
        }
        }
    )

    LetterInput.addEventListener("input",async function(){
        let mealData= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.value}`);
        let mealDtatResponse= await mealData.json();
        let data = await mealDtatResponse
         console.log(SearchMealsContainer.innerHTML="")
          console.log(SearchMealsContainer!=null)
        if(SearchMealsContainer==null){
            await showMeals(data,SearchMealsContainer,'newpage2.html')
        }
         if(SearchMealsContainer!=null) {
             SearchMealsContainer.innerHTML=""
           await showMeals(data,SearchMealsContainer,`newpage2.html`)
        }
    })
}
   
//////////////////////////////////        category
 async function getCategoryOrArea(api,container,link){
    let mealData= await fetch(`${api}`);
    let mealDtatResponse= await mealData.json();
    console.log(mealDtatResponse)
    let data = await mealDtatResponse
    console.log(mealDtatResponse)
    await showMeals(data,container,link)
    }          
if(categoryContainer!=null){
    getCategoryOrArea(`https://www.themealdb.com/api/json/v1/1/categories.php`,categoryContainer,`mealsCategory.html`)
    }
if(categoryContainerTwo!=null){
    getCategoryOrArea(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${localStorage.getItem("mealname")}`,categoryContainerTwo,`newpage2.html`)
   showMealDate()
}
///////////////////////////////    areas 
if(areasContainer!=null){
    getCategoryOrArea(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`,areasContainer,`areaMeals.html`)
}
if(areasMeals!=null){
    getCategoryOrArea(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${localStorage.getItem("mealArea")}`,areasMeals,`newpage2.html`)
    showMealDate()
   
}   
//////////////////////////////     ingrediens
if(ingrediensContainer!=null){
    getCategoryOrArea(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`,ingrediensContainer,`ingrediensMeals.html`)
}
if(ingrediensMeals!=null){
    getCategoryOrArea(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${localStorage.getItem("mealIng")}`,ingrediensMeals,`newpage2.html`)
    showMealDate()
}
getMealData()
getFirstApi()

      let myCol
      let showFirstDataMeal
      let mealD
      
function showMeals(mealD,container,link){   
    let arr=[] 
    let obj
     if(ingrediensContainer!=null){}
    if(firstMealsContainer!=null||nameInput!=null||categoryContainerTwo!=null||areasContainer!=null||areasMeals!=null||ingrediensContainer!=null||ingrediensMeals!=null){
        obj=mealD.meals;
    }
     if(categoryContainer!=null){
        obj=mealD.categories; 
        } 
     if(ingrediensContainer!=null){
        obj=mealD.meals; 
    }    
    for(let i=0;i<obj.length;i++){
     if(firstMealsContainer!=null||nameInput!=null||categoryContainerTwo!=null||areasContainer!=null||areasMeals!=null||ingrediensContainer!=null||ingrediensMeals!=null){
        showFirstDataMeal= new allMeals(mealD.meals[i].strMeal,mealD.meals[i].strMealThumb,mealD.meals[i].strDescription,mealD.meals[i].strArea,mealD.meals[i].strIngredient);
        console.log(showFirstDataMeal)
    }
    else if(categoryContainer!=null){
        showFirstDataMeal= new allMeals(mealD.categories[i].strCategory,mealD.categories[i].strCategoryThumb,mealD.categories[i].strCategoryDescription);
        } 
    else if(categoryContainerTwo!=null){
        showFirstDataMeal= new allMeals(mealD.meals[i].strMeal,mealD.meals[i].strMealThumb)
    }
        arr.push(showFirstDataMeal)
         myCol=document.createElement("div")
            myCol.classList.add("col-12","col-md-3")
        let ImgContainer=document.createElement("div")
            ImgContainer.classList.add("img-container","position-relative")   

     if(firstMealsContainer!=null||nameInput!=null||categoryContainer!=null||categoryContainerTwo!=null||areasMeals!=null||ingrediensMeals!=null){
         let mealImg=document.createElement("img")
            mealImg.src=`${arr[i].mealImg}`
            mealImg.alt=`${arr[i].mealName}`
        let cover =document.createElement("div")
            cover.classList.add("cover")
        let coverH3=document.createElement("h3")
            coverH3.textContent=`${arr[i].mealName}`
            cover.append(coverH3) 
           if(categoryContainer!=null){
            cover.classList.add("text-center","overflow-hidden","d-flex","flex-column","align-items-center")
                let coverP=document.createElement("p")
                coverP.classList.add("cover-p","mt-2")
                coverP.textContent=`${arr[i].mealDescription}`
                cover.append(coverP)        
                }
        ImgContainer.append(mealImg)
        ImgContainer.append(cover)
        myCol.append(ImgContainer)
        container.append(myCol)
            }
    else if(areasContainer!=null||(ingrediensContainer!=null&&i<20)){
        let iDiv=document.createElement("div")
        let icon=document.createElement("i");
        icon.classList.add("fa-solid","fa-house-laptop");
        let iconH3=document.createElement("h3");
        if(areasContainer!=null){
             iconH3.textContent=`${arr[i].mealArea}`
        }
        iDiv.append(icon)
        iDiv.append(iconH3) 
        myCol.append(iDiv)
             if(ingrediensContainer!=null){
            if(arr[i].mealIngDescription!=null){
            iconH3.textContent=`${arr[i].mealIngrediens}`
            icon.classList.replace("fa-house-laptop","fa-drumstick-bite")
            let iconP=document.createElement("p")
            iconP.textContent=`${arr[i].mealIngDescription}`
            iDiv.append(iconP)
            console.log(arr[i].mealIngDescription==null)
               myCol.append(iDiv)
                }
        }
        container.append(myCol)
    }
        if(firstMealsContainer!=null||nameInput!=null||categoryContainer!=null||categoryContainerTwo!=null||areasMeals!=null||ingrediensMeals!=null){
         ImgContainer.addEventListener("click", async function(e){
              mealNameApi=ImgContainer.querySelector("h3").textContent
             localStorage.setItem("mealname",`${mealNameApi}`) 
            window.open(`${link}`,"_self")
         })
        }
        }
        let cols=document.querySelectorAll(".col-md-3")
        if(areasContainer!=null){
        for(i=0;i<cols.length;i++){
                cols[i].addEventListener("mouseover", async function(e){
                console.log(e.currentTarget.firstChild.lastChild)
                let x= e.currentTarget.firstChild.lastChild
                let y=e.currentTarget.firstChild.firstChild
                x.addEventListener("click",function(){
                      mealNameApi=x.textContent
                localStorage.setItem("mealArea",`${mealNameApi}`) 
                localStorage.setItem("mealname55",`${this.lastChild}`) 
                window.open(`${link}`,"_self")
                })
                y.addEventListener("click",function(){
                      mealNameApi=y.nextElementSibling.textContent
                localStorage.setItem("mealArea",`${mealNameApi}`) 
                localStorage.setItem("mealname55",`${this.lastChild}`) 
                window.open(`${link}`,"_self")
                })

              
                
            })
            }
        }
        if(ingrediensContainer!=null){
        for(i=0;i<cols.length;i++){
                cols[i].addEventListener("mouseover", async function(e){
                console.log(e.currentTarget.firstChild.lastChild)
                let x= e.currentTarget.firstChild.children[1]
                let y=e.currentTarget.firstChild.children[0]
                let z=e.currentTarget.firstChild.children[2]
                x.addEventListener("click",function(){
                      mealNameApi=x.textContent
                localStorage.setItem("mealIng",`${mealNameApi}`) 
                localStorage.setItem("mealname55",`${this.lastChild}`) 
                window.open(`${link}`,"_self")
                })
                y.addEventListener("click",function(){
                      mealNameApi=y.nextElementSibling.textContent
                localStorage.setItem("mealIng",`${mealNameApi}`) 
                localStorage.setItem("mealname55",`${this.lastChild}`) 
                window.open(`${link}`,"_self")
                })
                z.addEventListener("click",function(){
                      mealNameApi=z.previousElementSibling.textContent
                localStorage.setItem("mealIng",`${mealNameApi}`) 
                localStorage.setItem("mealname55",`${this.lastChild}`) 
                window.open(`${link}`,"_self")
                })

              
                
            })
            }
        }
        }
     
      
async function showFirstMeals(e){
        mealD=  await  getFirstApi() 
        showMeals(mealD,firstMealsContainer,`./pages/newpage2.html`)
    }

    
 if(firstMealsContainer!=null||nameInput!=null){
    showFirstMeals()
 }
 async function showMealDate(){
       let data= await getMealData(); 
    mealName.textContent=`${data.mealName}`;
    mealImg.setAttribute("src",`${data.mealImg}`);
    mealInstruction.textContent=`${data.mealInstruction}`;
    mealCategory.textContent=`Category : ${data.mealCategory}`;
    mealArea.textContent=`Area :${data.mealArea}`
    console.log(data.mealRecipes.length)
    for(let i=0;i<data.mealRecipes.length;i++){
    if(data.mealRecipes[i]!="null null"){
       let recCol= document.createElement("div");
       recCol.classList.add("col");
       let recipe=document.createElement("p");
       recipe.classList.add("recipe");
       recipe.textContent=`${data.mealRecipes[i]}`
       recCol.append(recipe)
       mealRecipes.append(recCol)
        }
    }
    mealSource.setAttribute("href",`${data.mealSource}`)
    mealYoutube.setAttribute("href",`${data.mealYoutube}`)
  

 }
 console.log(mealDataContainer)
 if(mealDataContainer!=null){
   console.log(location.pathname)
showMealDate()
 }
 

console.log(mealDataContainer)
/////////////  regex
var phoneNumberRegex=/^(02)?01[0125][0-9]{8}$/;
var emailRegex=/^[a-zA-Z]{1,}((\W|\w||\d){1,})?(@)(gmail|yahoo|icloud)(\.)(com)$/;
var NameRegex=/[a-zA-z(\s)?]{4,}/;
var AgeRegex=/^[0-9]{2}$/
var passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var RepasswordRegex;
//////////////////// match regex
function matchRegex(element,regexTest){
    var regexTest
    var element
   if(regexTest.test(element.value)!=true){
   element.classList.add("is-invalid") ;
   element.classList.remove("is-valid") ;
   element.nextElementSibling.classList.replace("d-none","d-block");
   return false
   }
   else if(regexTest.test(element.value)){
   element.classList.add("is-valid") ;
   element.classList.remove("is-invalid") ;
   element.nextElementSibling.classList.replace("d-block","d-none")
   return true
   }
   }
   if(document.querySelector(".contact-container")!=null){
    contactName.addEventListener("input",function(e){
        isValidName=   matchRegex(this,NameRegex)
    })
    contactEmail.addEventListener("input",function(e){
   
        isValidEmail = matchRegex(this,emailRegex)
    })
    contactAge.addEventListener("input",function(e){
       
        isValidAge=    matchRegex(this,AgeRegex)
    })
    contactPhone.addEventListener("input",function(e){
      
        isValidPhone= matchRegex(this,phoneNumberRegex)
    })
    contactPassword.addEventListener("input",function(e){
      
     localStorage.setItem("pass",`${this.value}`)
        isValidPassword= matchRegex(this,passwordRegex)
    })
    contactRePassword.addEventListener("input",function(e){
        RepasswordRegex= new RegExp(localStorage.getItem("pass"))
     
        isValidRePassword= matchRegex(this,RepasswordRegex)
    })
    
}