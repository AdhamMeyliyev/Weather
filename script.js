const select =document.querySelector("select");
const para =document.querySelector("p");


function setWeather(){
    const choice= select.value;

    if( choice === "sunny"){
        para.textContent = "Havo quyoshi va yoqimli ☀️👌";
    }else if (choice === "rainy"){
        para.textContent = "Havo yomg'irli va namlik yuqori ☔😥"
    }else if( choice === "snowing"){
        para.textContent = "Qorli ob-havo kutmoqda ❄️";
    }else if(choice === "overcast"){
        para.textContent = "Havo bulitli ammo yog'ingarchilik kutilmaydi havotirga o'rin yo'q qo'rqmanglar hammasi nazorati ostida 👌😎";
    }else{
        para.textContent = "Noma'lum ob-havo ma'lumoti keyinroq xabardor bo'ling!"
    }
}

setWeather();

