import { ar } from "./reqRes.js";

// import { res_ar } from "./reqRes.js"
let $ = document.querySelector.bind(document);

export const declereEvents = async () => {
    let open = 0;
    $("#toysList").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre").className = "d-normal shadow font-monospace m-2 p-2 h-100 w-100";

            document.querySelector("#pre").innerHTML =
                `${ar}`
            open = 1;
        }
        else {
            document.querySelector("#pre").className = "d-none";
            document.querySelector("#pre").innerHTML =
                ``
            open = 0;
        }

    })

    $("#name").addEventListener("click", () => {
        if (!open) {

            document.querySelector("#pre").className = "d-normal shadow font-monospace m-2 p-2 h-100 w-100";
            document.querySelector("#pre").innerHTML =
                `{
    "_id": "62161b7dfcee9b8f5ddd2128",
    "name": " Magnetic Stick N Stack 160 pc's Engineer Set",
    "info": "Magnetic Stick N Stack 160 pc's Engineer Set for the best Children's University or something to convince",
    "category": "BUILDING TOYS",
    "img_url": "https://www.toys2discover.com/collections/building-toys/products/award-winning-shape-mags-100-piece-deluxe-shape-set-including-17-different-shapes",
    "price": 120,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f8d818b6cb4c23b7f607",
    "__v": 0
}`
            open = 1;
        }
        else {
            document.querySelector("#pre").className = "d-none";
            open = 0;
            document.querySelector("#pre").innerHTML = ``

        }
    })

    $("#page").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre").className = "d-normal shadow font-monospace m-2 p-2 h-100 w-100";

            document.querySelector("#pre").innerHTML =
                `${ar}`
            open = 1;
        }
        else {
            document.querySelector("#pre").className = "d-none";
            document.querySelector("#pre").innerHTML =
                ``
            open = 0;
        }

    })

    $("#category").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre").className = "d-normal shadow font-monospace ms-2 p-2 h-100 w-100";

            document.querySelector("#pre").innerHTML =`
[
    {
    "_id": "62161cf8fcee9b8f5ddd212d",
    "name": "Handheld Portable Digital Screen 220 Preloaded Games ",
    "info": "Handheld Portable Digital Screen 220 Preloaded Games  for quietly child",
    "category": "ELECTRONIC GAMES",
    "img_url": "https://www.toys2discover.com/collections/electronic-games/products/handheld-portable-digital-screen-220-preloaded-games-3-color-display",
    "price": 150,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f80050b14131388a4dea",
    "__v": 0
    },
    {
    "_id": "62161d71fcee9b8f5ddd212f",
    "name": "Table Top Air Hockey - Comes with Everything",
    "info": "Table Top Air Hockey ...  for child daydreaming",
    "category": "ELECTRONIC GAMES",
    "img_url": "https://www.toys2discover.com/collections/electronic-games/products/table-top-air-hockey-comes-with-everything-you-need-1",
    "price": 125,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f80050b14131388a4dea",
    "__v": 0
    },
    {
    "_id": "62161dfefcee9b8f5ddd2131",
    "name": "Smart Watches",
    "info": "Smart Watch especially for lateness childs",
    "category": "ELECTRONIC GAMES",
    "img_url": "https://www.toys2discover.com/collections/electronic-games/products/smart-watches-3",
    "price": 149,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f80050b14131388a4dea",
    "__v": 0
    },
    {
    "_id": "621621d8fcee9b8f5ddd213a",
    "name": "Ober Chuchim - Mekomos Hakdoishem",
    "info": "'Ober Chuchim' for the Hasidic humor ",
    "category": "ELECTRONIC GAMES",
    "img_url": "https://cdn.shopify.com/s/files/1/1147/9166/products/WhatsAppImage2020-11-16at4.00.23PM_large_2x.jpg?v=1607879783",
    "price": 28,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f768e04f9f31c7425d7d",
    "__v": 0
    }
]`
            open = 1;
        }
        else {
            document.querySelector("#pre").className = "d-none";
            document.querySelector("#pre").innerHTML =
                ``
            open = 0;
        }

    })

    $("#range").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre").className = "d-normal shadow font-monospace ms-2 p-2 h-100 w-100";

            document.querySelector("#pre").innerHTML =`

[
    {
    "_id": "62161cf8fcee9b8f5ddd212d",
    "name": "Handheld Portable Digital Screen 220 Preloaded Games ",
    "info": "Handheld Portable Digital Screen 220 Preloaded Games  for quietly child",
    "category": "ELECTRONIC GAMES",
    "img_url": "https://www.toys2discover.com/collections/electronic-games/products/handheld-portable-digital-screen-220-preloaded-games-3-color-display",
    "price": 150,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f80050b14131388a4dea",
    "__v": 0
    },
    {
    "_id": "62162056fcee9b8f5ddd2136",
    "name": "Smart Builder Master Cabin Log Set",
    "info": "for 3D yourself",
    "category": "3D MODELS",
    "img_url": "https://cdn.shopify.com/s/files/1/1147/9166/products/91OVUtn-vkL._SL1500_large_2x.jpg?v=1511537226",
    "price": 150,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f768e04f9f31c7425d7d",
    "__v": 0
    },
    {
    "_id": "62162121fcee9b8f5ddd2138",
    "name": "Magsmarters 216 Piece Deluxe Set",
    "info": "to learning for the child And quiet for parents",
    "category": "3D MODELS",
    "img_url": "https://cdn.shopify.com/s/files/1/1147/9166/products/71zU86tsIwL._SL1220_large_2x.jpg?v=1587486405",
    "price": 160,
    "date_created": "2022-02-23T11:33:16.005Z",
    "user_id": "6215f768e04f9f31c7425d7d",
    "__v": 0
    }
]
`
            open = 1;
        }
        else {
            document.querySelector("#pre").className = "d-none";
            document.querySelector("#pre").innerHTML =
                ``
            open = 0;
        }

    })

    $("#users").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre1").className = "d-normal shadow font-monospace ms-2 p-2 h-100 w-100";

            document.querySelector("#pre1").innerHTML =
            `
{
    "_id": {
        "$oid": "6215f80050b14131388a4dea"
    },
    "name": "roiAgever",
    "email": "roi@theMelach.com",
    "password": "$2b$10$.QXStBSU4d.DmH3kXQekJe/DZSefeTgCETKnB87nwJFFsT1fr8eiy",
    "date_created": {
        "$date": "2022-02-23T09:01:11.838Z"
    },
    "role": "user",
    "__v": 0
}
`
            open = 1;
        }
        else {
            document.querySelector("#pre1").className = "d-none";
            document.querySelector("#pre1").innerHTML =
                ``
            open = 0;
        }

    })
    $("#login").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre2").className = "d-normal shadow font-monospace ms-2 p-2 h-100 w-100";

            document.querySelector("#pre2").innerHTML =
            `
{
    "email": "roi@theMelach.com",
    "password": " ... ",
}
`
            open = 1;
        }
        else {
            document.querySelector("#pre2").className = "d-none";
            document.querySelector("#pre2").innerHTML =
                ``
            open = 0;
        }

    })

    $("#edit").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre3").className = "d-normal shadow font-monospace ms-2 p-2 h-100 w-100";

            document.querySelector("#pre3").innerHTML =
            `
{
    "_id": "621616d9d19c7b1b26005cff",
    "name": " 100 pcs Basic Shape Set",
    "info": "Basic Shape Set's for all everyone!",
    "category": "BUILDING TOYS",
    "img_url": "https://www.toys2discover.com/collections/building-toys/products/100-pcs-basic-shape-set",
    "price": 39,
    "date_created": "2022-02-23T11:12:33.322Z",
    "user_id": "6215f8d818b6cb4c23b7f607",
    "__v": 0
}
`
            open = 1;
        }
        else {
            document.querySelector("#pre3").className = "d-none";
            document.querySelector("#pre3").innerHTML =
                ``
            open = 0;
        }

    })
    
    $("#del").addEventListener("click", () => {
        if (!open) {
            document.querySelector("#pre4").className = "d-normal shadow font-monospace ms-2 p-2 h-100 w-100";

            document.querySelector("#pre4").innerHTML =
            `
{
    "_id": "621616d9d19c7b1b26005cff",
    "name": " 100 pcs Basic Shape Set",
    "info": "Basic Shape Set's for all everyone!",
    "category": "BUILDING TOYS",
    "img_url": "https://www.toys2discover.com/collections/building-toys/products/100-pcs-basic-shape-set",
    "price": 39,
    "date_created": "2022-02-23T11:12:33.322Z",
    "user_id": "6215f8d818b6cb4c23b7f607",
    "__v": 0
}
`
            open = 1;
        }
        else {
            document.querySelector("#pre4").className = "d-none";
            document.querySelector("#pre4").innerHTML =
                ``
            open = 0;
        }

    })
}






