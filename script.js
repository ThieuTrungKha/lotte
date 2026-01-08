document.addEventListener("DOMContentLoaded", () => {

    /* =====================
       DỮ LIỆU MENU
    ===================== */
    const menuData = {
        "BAGUETTE": {
            "BÁNH MỲ": [
                { image: "banhmy/1.png" },
                { image: "banhmy/2.png" },
                { image: "banhmy/3.png" },
                { image: "banhmy/4.png" },
                { image: "banhmy/5.png" },
                { image: "banhmy/6.png" }
            ],
            "BÔNG LAN": [
                { image: "bonglan/1.png" },
                { image: "bonglan/2.png" },
                { image: "bonglan/3.png" },
                { image: "bonglan/4.png" },
                { image: "bonglan/5.png" },
                { image: "bonglan/6.png" },
                { image: "bonglan/7.png" },
                { image: "bonglan/8.png" }
            ],
            "BÁNH MẶN": [
                { image: "banhman/1.png" },
                { image: "banhman/2.png" },
                { image: "banhman/3.png" },
                { image: "banhman/4.png" },
                { image: "banhman/5.png" },
                { image: "banhman/6.png" },
            ],
            "BÁNH TRÒN": [
                { image: "banhtron/1.png" },
                { image: "banhtron/2.png" },
                { image: "banhtron/3.png" },
                { image: "banhtron/4.png" },
                { image: "banhtron/5.png" },
                { image: "banhtron/6.png" },
                { image: "banhtron/7.png" },
                { image: "banhtron/8.png" }
            ]
        },
        "DONUT": {
            "DONUT 1": [
                { image: "donut/1.png" },
                { image: "donut/2.png" },
                { image: "donut/3.png" },
                { image: "donut/4.png" },
                { image: "donut/5.png" },
                { image: "donut/6.png" },
            ],
            "DONUT 2": [
                { image: "donut2/1.png" },
                { image: "donut2/2.png" },
                { image: "donut2/3.png" },
                { image: "donut2/4.png" },
                { image: "donut2/5.png" },
                { image: "donut2/6.png" },
            ],
            "CROISSANT": [
                { image: "croissant/1.png" },
                { image: "croissant/2.png" },
                { image: "croissant/3.png" },
                { image: "croissant/4.png" },
                { image: "croissant/5.png" },
                { image: "croissant/6.png" },
                { image: "croissant/7.png" },
                { image: "croissant/8.png" }
            ],
            "PASTRY - BÁNH KHÁC": [
                { image: "pastry/1.png" },
                { image: "pastry/2.png" },
                { image: "pastry/3.png" },
                { image: "pastry/4.png" },
                { image: "pastry/5.png" },
                { image: "pastry/6.png" },
                { image: "pastry/7.png" },
                { image: "pastry/8.png" }
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
                { image: "shushi/8.png" }
            ],
            "BÁNH BAO - BÁNH XÈO": [
                { image: "banhbaoxeo/1.png" },
                { image: "banhbaoxeo/2.png" },
                { image: "banhbaoxeo/3.png" },
                { image: "banhbaoxeo/4.png" },
                { image: "banhbaoxeo/5.png" },
                { image: "banhbaoxeo/6.png" }
            ],
        },
        "BÚN": {
            "BÚN": [
                { image: "bun/1.png" },
                { image: "bun/2.png" },
                { image: "bun/3.png" },
                { image: "bun/4.png" },
                { image: "bun/5.png" },
                { image: "bun/6.png" }
            ],
            "PHỞ - HỦ TIẾU NUI": [
                { image: "phohutieu/1.png" },
                { image: "phohutieu/2.png" },
                { image: "phohutieu/3.png" },
                { image: "phohutieu/4.png" },
                { image: "phohutieu/5.png" },
                { image: "phohutieu/6.png" }
            ],
            "MỲ - HỦ TIẾU KHÔ": [
                { image: "mihutieukho/1.png" },
                { image: "mihutieukho/2.png" },
                { image: "mihutieukho/3.png" },
                { image: "mihutieukho/4.png" },
                { image: "mihutieukho/5.png" },
                { image: "mihutieukho/6.png" }
            ]
        },

        "KEM MONTE": {
            "MONTE ": [
                { image: "monte/1.png" },
                { image: "monte/2.png" },
                { image: "monte/3.png" },
                { image: "monte/4.png" },
                { image: "monte/5.png" },
                { image: "monte/6.png" }
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
                { image: "pizza/5.png" },
                { image: "pizza/6.png" },
                { image: "pizza/7.png" },
                { image: "pizza/8.png" }
            ],
            "PIZZA 25CM, PIZZA 1/2": [
                { image: "pizza2/1.png" },
                { image: "pizza2/2.png" },
                { image: "pizza2/3.png" },
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
                { image: "pizza3/4.png" },
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
                { image: "hotdog/5.png" },
                { image: "hotdog/6.png" },
                { image: "hotdog/7.png" },
                { image: "hotdog/8.png" }
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
