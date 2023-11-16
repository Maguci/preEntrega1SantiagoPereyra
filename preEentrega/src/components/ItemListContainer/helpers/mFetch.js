const products = [
    {id:'1',name:'Goku ssj',category:'remeras',price:1000,stock:500,description:'una remera negra de algodon',imagen:"https://i.pinimg.com/474x/83/eb/3c/83eb3c1f0ed4a0175b9eb8365a78a13a.jpg"},
    {id:'2',name:'Android 17 and 18',category:'remeras',price:1000,stock:500,description:'una remera negra de algodon',imagen:"https://i.pinimg.com/736x/60/d1/d6/60d1d65e26948f2fee7a8993f6612c48.jpg"},
    {id:'3',name:'Vegeta',category:'remeras',price:1000,stock:500,description:'una remera negra de algodon',imagen:"https://i.pinimg.com/474x/65/50/40/65504043f7af32b71ffc59c076d38f9d.jpg"},
    {id:'4',name:'Goku',category:'remeras',price:1000,stock:500,description:'una remera negra de algodon',imagen:"https://i.pinimg.com/550x/a4/65/7c/a4657c4353404e620e24bd2f91deb421.jpg"},
    {id:'5',name:'Vegeeto',category:'remeras',price:1000,stock:500,description:'una remera negra de algodon',imagen:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/306f1957-5c52-4b1b-95b9-c7b34e307447/de9nzfl-d06a2245-e8c6-4541-bf98-4926546b269f.jpg/v1/fill/w_769,h_1039,q_70,strp/vegitto__fachero__by_luisito98_de9nzfl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTczMCIsInBhdGgiOiJcL2ZcLzMwNmYxOTU3LTVjNTItNGIxYi05NWI5LWM3YjM0ZTMwNzQ0N1wvZGU5bnpmbC1kMDZhMjI0NS1lOGM2LTQ1NDEtYmY5OC00OTI2NTQ2YjI2OWYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.d4jVypS7jNWZItw7taaj-JjBgR4LA7FezuPc63umGSU"}
];

export const mFetch = (id) => new Promise((res, rej) => {
    setTimeout(()=>{
        res(products)
    },3000)
})