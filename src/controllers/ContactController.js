

const ContactController={};


ContactController.index=(req,res)=>{
    res.render('contact',{home:true});
}


module.exports=ContactController;