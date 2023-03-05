const yargs = require("yargs");
const data=require("./Data")
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        subj1 : {
            describe: "adding the last name ",
            demandOption: true,
           
        },
        subj2 : {
            describe: "adding the last name ",
            demandOption: true,
        },
        subj3 : {
            describe: "adding the last name ",
            demandOption: true,
           
        },
        subj4 : {
            describe: "adding the last name ",
            demandOption: true,
           
        },
        subj5 : {
            describe: "adding the last name ",
            demandOption: true,
           
        },
        subj6 : {
            describe: "adding the last name ",
            demandOption: true,
            
        }
    },
    handler: (x)=> {
        data.addperson(x.id,x.fname,x.lname,x.city,x.age,x.subj1,x.subj2,x.subj3,x.subj4,x.subj5,x.subj6)
    }
 })
 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        data.deletedata(x.id)
    }
 })
 yargs.command({
    command : "read",
    describe: "read item",
    builder: {
        id : {
            describe: "adding the id ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        data.readdata(x.id)
    }
 })
 yargs.command({
    command:"list",
    describe:"list item",
    handler: ()=>{
        data.listdata()
    }
 })
 yargs.parse() 