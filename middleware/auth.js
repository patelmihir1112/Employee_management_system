const jwt = require('jsonwebtoken');

const auth = async (req,res,next)=>{
    try{
        const token =   req.cookies.jwt;

        if(!token){
            res.redirect('/login');
        }
        const verifyuser = jwt.verify(token,"mihirmihir");
        console.log(verifyuser);
        if(verifyuser){
            next();
        }else{
            res.redirect('/login');
        }
      
    }catch(err){

    }

}

module.exports=auth;