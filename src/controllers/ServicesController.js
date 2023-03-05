const ServicesController={};


ServicesController.index=(req,res)=>{
    res.render('servicicios',{home:true});
}
// ServicesController.login=(req,res)=>{
//     res.render('login');
// }
// ServicesController.galeria=(req,res)=>{
//     res.render('galeria',{gallery:true});
// }

module.exports=ServicesController;