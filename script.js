document.addEventListener("DOMContentLoaded", () => {

    /* =====================
       DỮ LIỆU MENU
    ===================== */
    const menuData = {
        "BAGUETTE": {
            "BÁNH Mì": [
                { image: "banhmy/1.png" },
                { image: "banhmy/2.png" },
                { image: "banhmy/3.png" },
                { image: "banhmy/4.png" },
                { image: "banhmy/5.png" },
            ],
            "BÔNG LAN": [
                { image: "bonglan/1.png" },

            ],
            "BÁNH MẶN": [
                { image: "banhman/1.png" },
                { image: "banhman/3.png" },
                { image: "banhman/4.png" },
                { image: "banhman/6.png" },
            ],
            "BÁNH TRÒN": [
                { image: "banhtron/1.png" },
                { image: "banhtron/2.png" },
                { image: "banhtron/5.png" },
                { image: "banhtron/7.png" },
                { image: "banhtron/8.png" }
            ]
        },
        "DONUT": {
            "DONUT 1": [
                { image: "donut/1.png" },
                { image: "donut/2.png" },
                { image: "donut/3.png" },
                { image: "donut/5.png" },
                { image: "donut/6.png" },
            ],

            "CROISSANT": [
                { image: "croissant/1.png" },

                { image: "croissant/5.png" },
                { image: "croissant/6.png" },
                { image: "croissant/8.png" }
            ],

            "CRUFFIN MUFFIN": [

            ],
        },
        "SUSHI": {
            "SHUSHI 1": [
                { image: "shushi/1.png" },
                { image: "shushi/2.png" },
                { image: "shushi/3.png" },
                { image: "shushi/4.png" },
                { image: "shushi/5.png" },
                { image: "shushi/6.png" },
                { image: "shushi/7.png" },
            ],
            "BÁNH BAO - BÁNH XÈO": [
                { image: "banhbaoxeo/1.png" },
                { image: "banhbaoxeo/2.png" },
                { image: "banhbaoxeo/3.png" },
                { image: "banhbaoxeo/4.png" },
                { image: "banhbaoxeo/5.png" },


            ],
        },
        "FACTORY": {
            "COFFEE": [
                { image: "coffee/1.png" },
                { image: "coffee/2.png" },
                { image: "coffee/3.png" },
                { image: "coffee/4.png" },
                { image: "coffee/5.png" },
                { image: "coffee/6.png" },
                { image: "coffee/7.png" },
                { image: "coffee/8.png" },
                { image: "coffee/9.png" },
                { image: "coffee/10.png" },
            ],
            "TRÀ SỮA": [
                { image: "trasua/1.png" },
                { image: "trasua/2.png" },
                { image: "trasua/3.png" },

            ],
            "TRÀ": [
                { image: "tra/1.png" },
                { image: "tra/2.png" },
                { image: "tra/3.png" },
                { image: "tra/4.png" },

            ],
            "TOPPING": [
                { image: "topping/1.png" },
                { image: "topping/2.png" },
                { image: "topping/3.png" },

            ],
        },
        "SAFFRON": {
            "TÀU HỦ": [
                { image: "tauhu/1.png" },
                { image: "tauhu/2.png" },
                { image: "tauhu/3.png" },

            ],
            "TRÀ - SAFFARON": [
                { image: "trasaffron/1.png" },
                { image: "trasaffron/2.png" },
                { image: "trasaffron/3.png" },
                { image: "trasaffron/4.png" },
                { image: "trasaffron/5.png" },
                { image: "trasaffron/6.png" },
                { image: "trasaffron/7.png" },
                { image: "trasaffron/8.png" },
                { image: "trasaffron/9.png" },
                { image: "trasaffron/10.png" },
                { image: "trasaffron/11.png" },
                { image: "trasaffron/12.png" },
                { image: "trasaffron/13.png" },
                { image: "trasaffron/14.png" },
                { image: "trasaffron/15.png" },

            ],
            "CAFE-SAFFRON": [
                { image: "cafesaffron/1.png" },
                { image: "cafesaffron/2.png" },
                { image: "cafesaffron/3.png" },
                { image: "cafesaffron/4.png" },

            ],
            "SNACK": [
                { image: "snack/1.png" },
                { image: "snack/2.png" },
                { image: "snack/3.png" },
                { image: "snack/4.png" },
                { image: "snack/5.png" },
                { image: "snack/6.png" },
                { image: "snack/7.png" },
                { image: "snack/8.png" },
                { image: "snack/9.png" },

            ],

        },
        "KEM MONTE": {
            "MONTE ": [
                { image: "monte/1.png" },
                { image: "monte/2.png" },
                { image: "monte/3.png" },
                { image: "monte/4.png" },
                { image: "monte/5.png" },
                { image: "monte/6.png" },
                { image: "monte/7.png" },

            ],
            "MONTE 2": [
                { image: "monte2/1.png" },
                { image: "monte2/2.png" },
                { image: "monte2/3.png" },
                { image: "monte2/4.png" },
                { image: "monte2/5.png" },
                { image: "monte2/6.png" }
            ],
        },
        "PIZZA 1M, PIZZA DÀI": {
            "PIZZA 1M & DÀI": [
                { image: "pizza/1.png" },
                { image: "pizza/2.png" },
                { image: "pizza/3.png" },
                { image: "pizza/4.png" },
                { image: "pizza/6.png" },
                { image: "pizza/7.png" },
                { image: "pizza/8.png" },
                { image: "pizza/9.png" },
                { image: "pizza/10.png" },
                { image: "pizza/11.png" },
                { image: "pizza/12.png" },
                { image: "pizza/13.png" },
                { image: "pizza/14.png" },
                { image: "pizza/15.png" },
                { image: "pizza/16.png" },
                { image: "pizza/17.png" },
                { image: "pizza/18.png" },
                { image: "pizza/19.png" },
                { image: "pizza/20.png" },


            ],
            "PIZZA 25CM, PIZZA 1/2": [
                { image: "pizza2/1.png" },
                { image: "pizza2/2.png" },
                { image: "pizza2/4.png" },
                { image: "pizza2/5.png" },
                { image: "pizza2/6.png" },
                { image: "pizza2/7.png" },
                { image: "pizza2/8.png" }
            ],
            "SPAGHETTI PIZZA 45CM": [
                { image: "pizza3/1.png" },
                { image: "pizza3/2.png" },
                { image: "pizza3/3.png" },
                { image: "pizza3/5.png" },
                { image: "pizza3/6.png" },
                { image: "pizza3/7.png" },
                { image: "pizza3/8.png" }
            ],
            "BÁNH BAKE HOTDOG": [
                { image: "hotdog/1.png" },
                { image: "hotdog/2.png" },
                { image: "hotdog/3.png" },
                { image: "hotdog/4.png" },
                { image: "hotdog/8.png" },
                { image: "hotdog/9.png" },
                { image: "hotdog/10.png" },

            ],
        }
    };

    /* =====================
       TRANG INDEX
    ===================== */
    const columns = document.getElementById("country-columns");

    if (columns) {
        Object.entries(menuData).forEach(([country, types]) => {

            const col = document.createElement("div");
            col.className = "country-column";

            col.innerHTML = `<h2>${country}</h2>`;


            Object.keys(types).forEach(type => {
                const item = document.createElement("div");
                item.className = "food-type";
                item.textContent = type;

                item.onclick = () => {
                    location.href = `category.html?country=${encodeURIComponent(country)}&type=${encodeURIComponent(type)}`;
                };

                col.appendChild(item);
            });

            columns.appendChild(col);
        });
    }

    /* =====================
       TRANG CATEGORY
    ===================== */
    const foodList = document.getElementById("food-list");
    const title = document.getElementById("category-title");

    if (foodList && title) {
        const params = new URLSearchParams(location.search);
        const country = decodeURIComponent(params.get("country"));
        const type = decodeURIComponent(params.get("type"));

        title.textContent = `${country} - ${type}`;

        menuData[country][type].forEach(food => {
            const item = document.createElement("div");
            item.className = "food-item";
            item.innerHTML = `
            <img src="${food.image}">
        `;
            foodList.appendChild(item);
        });
    }

    /* =====================
       SIDEBAR
    ===================== */
    const sidebar = document.getElementById("category-menu");

    if (sidebar) {
        Object.entries(menuData).forEach(([country, types]) => {

            const countryLi = document.createElement("li");
            countryLi.textContent = country;
            sidebar.appendChild(countryLi);

            Object.keys(types).forEach(type => {
                const sub = document.createElement("li");
                sub.textContent = "– " + type;
                sub.style.paddingLeft = "16px";

                sub.onclick = () => {
                    location.href = `category.html?country=${encodeURIComponent(country)}&type=${encodeURIComponent(type)}`;
                };

                sidebar.appendChild(sub);
            });
        });
    }

});
