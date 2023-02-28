

const GaleriaController={};


GaleriaController.index=(req,res)=>{
    res.render('galeria',{home:true});
}


module.exports=GaleriaController;