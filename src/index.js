const express = require( 'express')
const morgan = require('morgan')
const{urlencoded,json}=require('express');
const ehbs=require('express-handlebars');
const path = require('node:path');
const PORT= process.env.PORT || 3000 

const app = express()
app.use(morgan('dev'));
app.use(urlencoded({extended:true}));
app.use(json());
/**
 * Motor de pantillas 
 * */
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',ehbs.engine({
    defaultLayout:'app',
    extname:'.hbs',
    helpers:require('../src/helpers/handlebars')
}));
app.set('view engine','.hbs')
/**
 * Rutas
 * */
app.use(require('./routes'))
/**
 * Rutas Publicas
 * */
app.use(express.static(path.join(__dirname,'public')))
/**
 * Ejecutar servidor
 * */
app.listen(PORT,()=>{
    console.log('server up in http://localhost:'+PORT);
});