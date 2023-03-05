const AboutController={};


AboutController.index=(req,res)=>{
    res.render('about',{home:true});
}
// AppController.login=(req,res)=>{
//     res.render('login');
// }
// AppController.galeria=(req,res)=>{
//     res.render('galeria',{gallery:true});
// }

module.exports=AboutController;