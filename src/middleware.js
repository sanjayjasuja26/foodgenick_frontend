
  import { NextResponse } from "next/server";
 const middleware =(req) => {
     let verify =req.cookies.get("token");
     let type =req.cookies.get("type");
      let authLogin = verify?.value
      let authtype = Number(type?.value) 
       console.log("authtype",authtype)
       console.log("authLogin",authLogin)
      let url = req.url
  
    if(url.includes('/admin/dashboard')){
      if(authtype !== 1){
        return NextResponse.redirect("https://foodgienic.com/login");
      }
    }
    // if(authLogin && url.includes('/admin/services')){
    //  return NextResponse.redirect("https://food-gienic.vercel.app/login");
    // }
    // if(authLogin && url.includes('/admin/page')){
    //  return NextResponse.redirect("https://food-gienic.vercel.app/login");
    // }
    // if(authLogin && url.includes('/admin/price')){
    //  return NextResponse.redirect("https://food-gienic.vercel.app/login");
    // }
    // if(authLogin && url.includes('/admin/users')){
    //  return NextResponse.redirect("https://food-gienic.vercel.app/login");
    // }
    // if(authLogin && url.includes('/admin/restaurants')){
    //  return NextResponse.redirect("https://food-gienic.vercel.app/login");
    // }
}
export default middleware
