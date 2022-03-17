import { Schema, model } from 'mongoose';

const ArticuloSchema = new Schema({
    //categoria : {tipe : },
    codigo :       {tipe : String, maxlength : 60, unique :true, required : true },
    nombre :       {tipe : String, maxlength : 60, unique :true, required : true },
    descripcion :  {tipe : String, maxlength: 255, required: true},
    precio_venta : {tipe : Number, required : true},
    stock :        {tipe : Number, required : true},
    estado :       {tipe : Number , default : 1},
    createAT :     {tipe : Date, default: Date.now },

})

const Articulo = model('articuloschema', ArticuloSchema);
export default Articulo;
