//Khai báo một đối tượng
const product = {
    id:"1",
    name:" Cà phê  đen",
    price:25000,
    description:"Là thức uống pha từ bột cà phê rang xay nguyên chất và nước nóng, không thêm đường hay sữa...",
    image:"../assets/images/capheden.jpg",
    link:"chi-tiet.html"
};

const products = [
    { 
        id:"1",
    name:" Sữa chua dâu tây",
    price:27000,
    description:"Là món tráng miệng thơm ngon, giàu vitamin c probiotic...",
    image:"../assets/images/suachuadau.jpg",
    link:"chi-tiet.html"
    },
    { 
        id:"2",
    name:"Macha",
    price:30000,
    description:"Matcha Latte là thức uống kết hợp giữa bột matcha Nhật Bản và sữa tươi...",
    image:"../assets/images/matcha.jpg",
    link:"chi-tiet.html"
    },
    {
       id:"3",
    name:"Socola đá xay",
    price:27000,
    description:"là thức uống mát lạnh kết hợp hoàn hảo giữa vị đắng nhẹ của cacao, vị béo của sữa và đá bào nhu...",
    image:"../assets/images/socoladaxay.jpg",
    link:"chi-tiet.html" 
    },
    {
        id:"4",
    name:"Sữa chua việt quốc",
    price:30000,
    description:"món tráng miệng thơm ngon, kết hợp giữa vị chua thanh của sữa lên men và vị ngọt bùi của mứt việt quất...",
    image:"../assets/images/suachuavietquoc.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"5",
    name:"việt quốc đá xay",
    price:32000,
    description:"à thức uống giải khát thanh mát, bắt mắt với sắc tím lịm...",
    image:"../assets/images/vietquatdaxay.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"6",
    name:"Bạc xỉu",
    price:25000,
    description:"Bạc xỉu là thức uống thơm ngon với vị sữa béo ngậy hòa quyện cùng cà phê đậm đà, thích hợp để thưởng thức mỗi ngày....",
    image:"../assets/images/bacxiu.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"7",
    name:"Cà phê đen",
    price:18000,
    description:"Cà phê đen nguyên chất với hương thơm đậm đà, vị mạnh đặc trưng, giúp tỉnh táo và tràn đầy năng lượng....",
    image:"../assets/images/capheden.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"8",
    name:"Trà đào",
    price:27000,
    description:"Trà đào thanh mát với vị trà thơm dịu hòa quyện cùng những lát đào ngọt ngào, mang đến cảm giác sảng khoái và tươi mới....",
    image:"../assets/images/tradao.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"9",
    name:"Hồng trà thạch vãi",
    price:30000,
    description:"Hương hồng trà đậm đà hòa quyện cùng vị vải thanh ngọt và thạch dai giòn, tạo nên thức uống thơm ngon, sảng khoái....",
    image:"../assets/images/hongtrathachvai.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"10",
    name:"Sinh tố bơ",
    price:30000,
    description:"Hương hồng trà đậm đà hòa quyện cùng vị vải thanh ngọt và thạch dai giòn, tạo nên thức uống thơm ngon, sảng khoái....",
    image:"../assets/images/sinhtobo.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"9",
    name:"Nước ép cam",
    price:30000,
    description:"Hương hồng trà đậm đà hòa quyện cùng vị vải thanh ngọt và thạch dai giòn, tạo nên thức uống thơm ngon, sảng khoái....",
    image:"../assets/images/nuocepcam.jpg",
    link:"chi-tiet.html"
    },
    {
        id:"9",
    name:"Hồng trà thạch vãi",
    price:30000,
    description:"Hương hồng trà đậm đà hòa quyện cùng vị vải thanh ngọt và thạch dai giòn, tạo nên thức uống thơm ngon, sảng khoái....",
    image:"../assets/images/hongtrathachvai.jpg",
    link:"chi-tiet.html"
    },
];
function inBCC(n)
{
    let result= "";
    let i=1;
    while(i<=10)
    {
    result+=`${n}x${i}=${n*i}<br>`;
    i++;
    }
    document.getElementById("result").innerHTML=result;
}
/*Mã nguồn Javacript*/
function inBCC(n)
{
    let result = "";
    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}

function addItem(name, price, description, link, image)
{
    //Tạo khung chứa container-item
    const item = document.createElement("div"); //<div></div>
    
    item.setAttribute("class", "container-item");

    //Trong một item có  khung chứa container-image và container-info

    //Tạo khung chứa container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //Tạo 1 ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image);//truyền tham số image
    imageProduct.setAttribute("alt", name);
    imageProduct.setAttribute("style", "width:100%; max-width:150px;");

    //Chèn đối tưởng ảnh vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //Tạo khung chứa container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    //Tạo 4 con
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    //Thêm con vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    //Đưa khung ảnh vào item
    item.appendChild(containerImage);
    //Đưa khung info vào item
    item.appendChild(containerInfo);
    //Đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}

function addItemV2(product){
    document.getElementById("product-list").innerHTML += `
        <div class="col">
            <div class="card product-item h-100">
                <div class="product-image">
                    <img class="card-img-top" src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-body bg-light product-info">
                    <h4 class="card-title">${product.name}</h4>
                    <h5 class="card-text">${product.price} VNĐ</h5>
                    <p class="card-text">${product.description}</p>
                    <a class="btn btn-info" href="${product.link}">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProduct(){
    let i = 0;
    while(i < products.length)
    {
        addItemV2(products[i]);
        i++;
    }
}