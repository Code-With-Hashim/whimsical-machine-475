imageArray =
    ["https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg",
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/95cca699-6c66-4df8-ace2-7effeddecfaa_1320x376.jpg",
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/bf01d76e-4c92-4046-832a-7b50b9ad266e_1320x376.jpg",
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/88d68b3d-2bfc-497e-af24-dd2b5378b675_1320x376.jpg",
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg",
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/f2b41376-0541-4bfa-932f-887339692b60_1320x376.jpg",
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/f2b41376-0541-4bfa-932f-887339692b60_1320x376.jpg",]

let imgcnt = 0
let right = document.getElementById("right-btn")
let left = document.getElementById("left-btn")
let image = document.getElementById("slidedimg")

right.addEventListener("click", function () {
    imgcnt++
    if (imgcnt == imageArray.length) {
        imgcnt = 0
    }
    image.src = imageArray[imgcnt]


})

left.addEventListener("click", function () {
    imgcnt--
    if (imgcnt < 0) {
        imgcnt = imageArray.length - 1
    }
    image.src = imageArray[imgcnt]
})


let FoodImages = ["https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png",
    "https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png"]

let lefttab = document.getElementById("left-tab")

console.log(FoodImages.length)

let oneimg = document.getElementById("one")
let twoimg = document.getElementById("two")
let threeimg = document.getElementById("three")
let fourimg = document.getElementById("four")

let fdimg = 0

lefttab.addEventListener("click", function () {
    fdimg++
    oneimg.src = FoodImages[fdimg]
    fdimg++
    twoimg.src = FoodImages[fdimg]
    fdimg++
    threeimg.src = FoodImages[fdimg]
    fdimg++
    if (fdimg == FoodImages.length) {
        fdimg = 0
    }
    fourimg.src = FoodImages[fdimg]

    console.log(fdimg)
})

let itemcartArr = [
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/93fd2fce-d02c-4ee6-855c-b4526e932afa_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "Sugar Organic - Organic Tattva",
        pcs: "1 Pc",
        rate: "Buy @ Rs.133.00/-",
        MRP: "MRP 140",
        price: "133"
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/731228a7-5159-4da6-843c-7e3a0bd7ea69_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "COHERE PRAWNS MEDIUM 60G",
        pcs: "1 Pc",
        rate: "Buy @ Rs.66.75/-",
        MRP: "MRP 89.00",
        price: 66.75
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d45aa5f5-a82e-44e1-b2b6-ce24d1381062_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "CF PEANUT OIL 500ML",
        pcs: "1 Pc",
        rate: "Buy @ Rs.243.00/-",
        MRP: "MRP 270",
        price: 243
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/aff70adb-ae81-439a-8327-2210ffddf312_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "RRO GOATS CHEVRE CHEESE PLAIN 100G",
        pcs: "1 Pc",
        rate: "Buy @ Rs.327.75/-",
        MRP: "MRP 345",
        price: 327.75

    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d45aa5f5-a82e-44e1-b2b6-ce24d1381062_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "Jaggery Powder Organic - Organic Tattva",
        pcs: "1 Pc",
        rate: "Buy @ Rs.76.00/-",
        MRP: "MRP 80",
        price: 76

    },

    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/43f2f694-ab16-4087-859e-5dd0dc67ecbe_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "CAMBAY TIGER SURMAI MEDIUM 500 G",
        pcs: "1 Pc",
        rate: "Buy @ Rs.715.00/-",
        MRP: "MRP 760",
        price: 715
    },

    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/35b40a67-3a78-400c-a525-1f4f993ae6f4_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "Cambay Tiger Deveined & Cleaned Jumbo Prawns 300g",
        pcs: "1 Pc",
        rate: "Buy @ Rs.459.00/-",
        MRP: "MRP 499",
        price: 459
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2c5d4fb3-aacd-43b0-9817-9d282f8071fc_425x425.JPG",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "GADRE EDAMAME 500G",
        pcs: "1 Pc",
        rate: "Buy @ Rs.450.00/-",
        MRP: "MRP 500",
        price: 450
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1335140_1_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES,",
        productname: "YOGA BAR MUESLI ALM & QUINOA 400G",
        pcs: "1 Pc",
        rate: "Buy @ Rs.249.00/-",
        MRP: "MRP 325",
        price: 249,

    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c3497647-39ae-450e-8743-a98db4650398_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "Soft Chhese Mozzarella - RRO",
        pcs: "1 Pc",
        rate: "Buy @ Rs.308.75/-",
        mrp: "MRP 325",
        price: 308.75

    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6151dbdd-4c99-4614-a330-6909526fc3f6_425x425.JPG",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "Soft Chhese Mozzarella - RRO",
        pcs: "1 Pc",
        rate: "Buy @ Rs.308.75/-",
        mrp: "MRP 325",
        price: 308.75

    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/db1b11f2-57b5-4a37-a6d3-060e1d1ce419_425x425.jpg",
        dlvtime: "DElIVERY IN 90 MINUTES",
        productname: "Soft Chhese Mozzarella - RRO",
        pcs: "1 Pc",
        rate: "Buy @ Rs.308.75/-",
        mrp: "MRP"+325.00,
        price: 308.75

    }


]

console.log(itemcartArr.length)

let right_btn = document.getElementById("right-btn1")
let left_btn = document.getElementById("left-btn1")

// let itemcnt2=1;
// let itemcnt3=2;
// let itemcnt4=3;

let item1 = document.getElementById("item1")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let item4 = document.getElementById("item4")
let itemcnt = 0;
let itemcnt2 = 1;
let itemcnt3 = 2;
let itemcnt4 = 3;

right_btn.addEventListener("click", function () {
    itemcnt=itemcnt+4;
    itemcnt2=itemcnt2+4;
    itemcnt3=itemcnt3+4;
    itemcnt4=itemcnt4+4;

    if(itemcnt==12){
        itemcnt=0
    }
    item1.src = itemcartArr[itemcnt].img
    document.getElementById("product1").innerText=itemcartArr[itemcnt].productname
    document.getElementById("rate").innerText=itemcartArr[itemcnt].rate
   

    if(itemcnt2==13){
        itemcnt2=1
    }
    item2.src = itemcartArr[itemcnt2].img
    document.getElementById("product2").innerText=itemcartArr[itemcnt2].productname
    document.getElementById("rate2").innerText=itemcartArr[itemcnt2].rate
 
    if(itemcnt3==14){
        itemcnt3=2
    }
    item3.src = itemcartArr[itemcnt3].img
    document.getElementById("product3").innerText=itemcartArr[itemcnt3].productname
    document.getElementById("rate3").innerText=itemcartArr[itemcnt3].rate

    if(itemcnt4==15){
        itemcnt4=3
    }
    item4.src = itemcartArr[itemcnt4].img
    document.getElementById("product4").innerText=itemcartArr[itemcnt4].productname
    document.getElementById("rate4").innerText=itemcartArr[itemcnt4].rate
   

})
left_btn.addEventListener("click", function () {

    itemcnt=itemcnt-4;
    itemcnt2=itemcnt2-4;
    itemcnt3=itemcnt3-4;
    itemcnt4=itemcnt4-4;


    if(itemcnt < 0){
        itemcnt=itemcartArr.length-4
    }
   

    item1.src = itemcartArr[itemcnt].img
    if(itemcnt2 < 1){
        itemcnt2=itemcartArr.length-3
    }
    document.getElementById("product1").innerText=itemcartArr[itemcnt].productname
    document.getElementById("rate").innerText=itemcartArr[itemcnt].rate

   

    item2.src=itemcartArr[itemcnt2].img
    document.getElementById("product2").innerText=itemcartArr[itemcnt2].productname
    document.getElementById("rate2").innerText=itemcartArr[itemcnt2].rate
    if(itemcnt3 < 2){
        itemcnt3=itemcartArr.length-2
    }
    item3.src=itemcartArr[itemcnt3].img
    document.getElementById("product3").innerText=itemcartArr[itemcnt3].productname
    document.getElementById("rate3").innerText=itemcartArr[itemcnt3].rate


    if(itemcnt4 < 3){
        itemcnt4=itemcartArr.length-1
    }
    item4.src=itemcartArr[itemcnt4].img
    document.getElementById("product4").innerText=itemcartArr[itemcnt4].productname
    document.getElementById("rate4").innerText=itemcartArr[itemcnt4].rate
    
})

let imgdata = ["https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/068d6c36-1d4f-4786-86e5-4233eb873c03_425x425.JPG",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ba3898e3-11dd-4a8b-836b-7dc5a53b9590_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e891782b-ff9e-4e99-99b2-d2a68ebfe312_425x425.JPG",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e9a62a91-0970-4fd4-839a-0239817477ba_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/49714d80-7784-4190-84f3-c927cbd861f1_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/74bf1323-3278-4e4c-89b4-a4dec49d663b_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3e995fa3-109c-4ed9-ad60-1403f02d19b1_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2d5b84d3-bd1a-4b3c-8223-18b73acceafb_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c0581bb8-218a-4fcf-a38b-e7a872f1ad6e_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/47bfa747-9af7-4ee0-86d4-6a3a8898154b_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e833fa18-32ff-4933-8daa-de8784afd9ad_425x425.jpg",
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_425x425.JPG"
]

let right_btn1 = document.getElementById("right-btn2")
let left_btn1 = document.getElementById("left-btn2")

let itemcnt5 = 0;
let itemcnt6 = 1;
let itemcnt7 = 2;
let itemcnt8 = 3;

let item5 = document.getElementById("item5")
let item6 = document.getElementById("item6")
let item7 = document.getElementById("item7")
let item8 = document.getElementById("item8")



right_btn1.addEventListener("click", function () {
    itemcnt5=itemcnt5+4;
    itemcnt6=itemcnt6+4;
    itemcnt7=itemcnt7+4;
    itemcnt8=itemcnt8+4;

    console.log(itemcnt5, itemcnt6, itemcnt7, itemcnt8)

    if(itemcnt5==12){
        itemcnt5=0
    }
    item5.src = imgdata[itemcnt5]

    if(itemcnt6==13){
        itemcnt6=1
    }
    item6.src = imgdata[itemcnt6]
    
 
    if(itemcnt7==14){
        itemcnt7=2
    }
    item7.src = imgdata[itemcnt7]
    
    if(itemcnt8==15){
        itemcnt8=3
    }
    item8.src = imgdata[itemcnt8]
    

})


left_btn1.addEventListener("click", function () {
    
    itemcnt5=itemcnt5-4;
    itemcnt6=itemcnt6-4;
    itemcnt7=itemcnt7-4;
    itemcnt8=itemcnt8-4;


    if(itemcnt5 < 0){
        itemcnt5=imgdata.length-4
    }
   

    item5.src = imgdata[itemcnt5]
    if(itemcnt6 < 1){
        itemcnt6=imgdata.length-3
    }
    

    item6.src=imgdata[itemcnt6]
    
    if(itemcnt7 < 2){
        itemcnt7=imgdata.length-2
    }
    item7.src=imgdata[itemcnt7]
    

    if(itemcnt8 < 3){
        itemcnt8=imgdata.length-1
    }
    item8.src=imgdata[itemcnt8]

})

let bannerimg = [
    "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg",
    "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg",
    "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg"
]

let imgcnt2 = 0
let right_btn3 = document.getElementById("right-btn3")
let left_btn3 = document.getElementById("left-btn3")
let image1 = document.getElementById("slidedimg2")

right_btn3.addEventListener("click", function () {
    imgcnt2++
    if (imgcnt2 == bannerimg.length) {
        imgcnt2 = 0
    }
    image1.src = bannerimg[imgcnt2]


})

left_btn3.addEventListener("click", function () {
    imgcnt2--
    if (imgcnt2 < 0) {
        imgcnt2 = bannerimg.length - 1
    }
    image1.src = bannerimg[imgcnt2]


})





