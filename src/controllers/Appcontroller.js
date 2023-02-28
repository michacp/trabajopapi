const AppController={};


AppController.index=(req,res)=>{
    res.render('welcome',{home:true});
}
// AppController.login=(req,res)=>{
//     res.render('login');
// }
// AppController.galeria=(req,res)=>{
//     res.render('galeria',{gallery:true});
// }

module.exports=AppController;