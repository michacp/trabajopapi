const express=require('express');
const routes= express.Router();
const AppController=require('../controllers/Appcontroller')
const Galeriantroller=require('../controllers/GaleriaController')
const UsuarioController=require('../controllers/UsuarioController')
const ContactController=require('../controllers/ContactController')
const AboutController=require('../controllers/AboutController')
const ServicesController=require('../controllers/ServicesController')
routes.get('/',AppController.index);
routes.get('/galeria',Galeriantroller.index);
routes.get('/contact',ContactController.index);
routes.get('/about',AboutController.index);
routes.get('/servicios',ServicesController.index);
// // routes.get('/login',AppController.login);
// // routes.get('/galeria',AppController.galeria);
// // routes.get('/usuario-create',UsuarioController.create);
// // routes.post('/store-usuario',UsuarioController.store);
module.exports=routes;