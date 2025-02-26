const express =require('express')
const app = express();
app.get('/',(req,res) =>{ 
res.send("welcome our website designer by billy")});

/*const express=require('express')
const app = express();
app.get('/',(req,res) =>{ 
res.send("welcome our website:designed billy iratangaje")});*/

const property =
[
    {
        id:1,name:'maliot hotel',address:'kicukiro rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:40000
    },
    {
        id:2,name:'selenar hotel',address:'nyamirambo rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:86100
    },
    {
        id:3,name:'kigaliview hotel',address:'kigali rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:56000
    },
    {
        id:4,name:'makuza vs plazz',address:'gatsata rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:60000
    },
    {
        id:5,name:'musanze hotel',address:'musanze rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:30000
    },
    {
        id:6,name:'nyabihu hotel',address:'nyabihu rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:10000
    },
    {
        id:7,name:'muhanga hotel',address:'muhanga rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:76500
    },
    {
        id:8,name:'ngoma hotel',address:'ngoma rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:67800
    },
    {
        id:9,name:'nyagatare hotel',address:'nyagatare rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:8900
    },
    {
        id:10,name:'rwamagana hotel',address:'kukibuye rwanda',property_type:'apartment',description:'our property is secured',Number_of_unit:8090
    },
];
app.get('/api/property/', (req, res) =>{
    res.send(property)
});
app.get('/api/property/:id',(req, res) => {
    const propertyId = parseInt(req.params.id);
    const foundproperty = property.find(property => property.id === propertyId);
    if (!foundproperty) {
        return res.status(404).json({ message: 'property does not found'})
    }
    res.send(foundproperty);
});
app.get



app.listen(8000,() =>{
    console.log("server is running on 8000")
});
    
const unit =
[
    {
        id:1,unit_number:484848,badrooms:20,bathroom:20,rent:10000,is_variable:true,
    },
    {
        id:2,unit_number:484848,badrooms:20,bathroom:20,rent:89000,is_variable:true,
    },
    {
        id:3,unit_number:484848,badrooms:20,bathroom:20,rent:9000,is_variable:true,
    },
    {
        id:4,unit_number:484848,badrooms:20,bathroom:20,rent:60000,is_variable:true,
    },
    {
        id:5,unit_number:484848,badrooms:20,bathroom:20,rent:90000,is_variable:true,
    },
    {
        id:6,unit_number:484848,badrooms:20,bathroom:20,rent:80000,is_variable:true,
    },
    {
        id:7,unit_number:484848,badrooms:20,bathroom:20,rent:87000,is_variable:true,
    },
    {
        id:8,unit_number:484848,badrooms:20,bathroom:20,rent:54000,is_variable:true,
    },
    {
        id:9,unit_number:484848,badrooms:20,bathroom:20,rent:32000,is_variable:true,
    },
    {
        id:10,unit_number:484848,badrooms:20,bathroom:20,rent:45000,is_variable:true,
    },
];
app.get('/api/unit/', (req, res) =>{
    res.send(unit)
});
app.get('/api/unit/:id',(req, res) => {
    const unitId = parseInt(req.params.id);
    const foundunit = unit.find(unit => unit.id === unitId);
    if (!foundunit) {
        return res.status(404).json({ message: 'unit does not found'})
    }
    res.send(foundunit);
});

const tenant =
[
    {
        id:1,name:'fab',email:'nikwikora25@gmail.com',phone_number:'078976567898'
    },
    {
        id:2,name:'musa',email:'musabeenside5@gmail.com',phone_number:'0789543453'
    },
    {
        id:3,name:'baby',email:'umwalibaby985@gmail.com',phone_number:'07894765833'
    },
    {
        id:4,name:'kenny',email:'kennysol95@gmail.com',phone_number:'07896445433'
    },
    {
        id:5,name:'billy',email:'uwayishimabilly6@gmail.com',phone_number:'07897887833'
    },
    {
        id:6,name:'amos',email:'amose5@gmail.com',phone_number:'0789787878'
    },
    {
        id:7,name:'hirwa',email:'hirwadaniel5@gmail.com',phone_number:'0799999833'
    },
    {
        id:8,name:'ruben',email:'mpanoruben25@gmail.com',phone_number:'0782222833'
    },
    {
        id:9,name:'ben',email:'benny25@gmail.com',phone_number:'0789234333'
    },
    {
        id:10,name:'byiri',email:'byiringiro25@gmail.com',phone_number:'0789333333'
    },
];
app.get('/api/tenant/', (req, res) =>{
    res.send(tenant)
},);

app.get('/api/tenant/:id',(req,res) => {
    const tenantId = parseInt (req.params.id);
    const foundtenant = tenant.find(tenant => tenant.id ===tenantId);
    if(!foundtenant){
        return res.status(404) .json({message:'tenant does not found'})
    }
    res.send(foundtenant);
});

const lease=[
    {
     id:1,start_date:'13februery2025',end_date:'18january2028',rent_amount:46700
},
{
    id:2,start_date:'2februery2025',end_date:'2january2028',rent_amount:987000
},
{
    id:3,start_date:'31februery2025',end_date:'31january2028',rent_amount:876500
},
{
    id:4,start_date:'23februery2025',end_date:'29january2028',rent_amount:453000
},
{
    id:5,start_date:'13februery2025',end_date:'22january2028',rent_amount:880000
},
{
    id:6,start_date:'13februery2025',end_date:'11january2028',rent_amount:98000
},
{
    id:7,start_date:'23februery2025',end_date:'28january2028',rent_amount:29000
},
{
    id:8,start_date:'3februery2025',end_date:'1january2028',rent_amount:78000
},
{
    id:9,start_date:'4februery2025',end_date:'8january2028',rent_amount:38000
},
{
    id:10,start_date:'7februery2025',end_date:'19january2028',rent_amount:85700
},
];
app.get('/api/lease/', (req, res) =>{
    res.send(lease)
},);


const owner=[
    {
     id:1,name:'byiringiro',email:'byiri1234@gmail.com',property:'maliot hotel'
},
{
    id:2,name:'jean',email:'jean123@gmail.com',property:'selenar hotel'
},
{
    id:3,name:'kamana',email:'kamana125@gmail.com',property:'kigaliview hotel'
},
{
    id:4,name:'ahi',email:'ahi125@gmail.com',property:'makuza vs plazz'
},
{
    id:5,name:'eric',email:'eric25@gmail.com',property:'musanze hotel'
},
{
    id:6,name:'ana',email:'ana1225@gmail.com',property:'nyabihu hotel'
},
{
    id:7,name:'eria',email:'eria25@gmail.com',property:'muhanga hotel'
},
{
    id:8,name:'rebecca',email:'25rebecca@gmail.com',property:'ngoma hotel'
},
{
    id:9,name:'nigena',email:'nigenc25@gmail.com',property:'ngoma hotel'
},
{
    id:10,name:'bro',email:'bro25@gmail.com',property:'rwamagana hotel'
},
];
app.get('/api/owner/', (req, res) =>{
    res.send(owner)
},);

app.get('/api/owner/:id',(req,res) => {
    const ownerId = parseInt (req.params.id);
    const foundowner = owner.find(owner => owner.id ===ownerId);
    if(!foundowner){
        return res.status(404) .json({message:'owner does not found'})
    }
    res.send(foundowner);
});
/*
const billy = {

app.get('/api/lease/:id',(req,res) => {
    const leaseId = parseInt (req.params.id);
    const foundlease = lease.find(lease => lease.id ===leaseId);
    if(!foundlease){
        return res.status(404) .json({message:'lease does not found'})
    }
    res.send(foundlease);
});*/

const billy = {
    property:property,
    unit:unit,
    tenant:tenant,
    lease:lease,  

}
app.get('/all-modules',(req,res)=> {
    res.send(billy);
});