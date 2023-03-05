const  fs = require ("fs")

const addperson=(id,fname,lname,city,age,subj1,subj2,subj3,subj4,subj5,subj6  )=>{
  const alldata=loddata()
  const degrees = [subj1 ,subj2 , subj3 , subj4 , subj5 , subj6];
  const totalDegrees = degrees.reduce((a, b) => a + b, 0);
  const degAverage = Math.round((totalDegrees * 100) / 600);
 const dublicateddata = alldata.filter((obj)=>{
 return id===obj.id
 })
 if(dublicateddata.length==0){
  alldata.push({
    id:id,
    fname : fname,
    lname:lname,
    city:city ,
    age: age ,
    degAverage:degAverage
  })

 
  savealldata(alldata)
}
else{
  console.log("ERROR DUPLICATED ID")
}
  
}
const loddata=()=>{
    try{
       const datajson= fs.readFileSync("data.json").toString()
       return dataobj=JSON.parse(datajson)
    }
    catch {
      return []
    }
   
}
const savealldata=(alldata)=>{
    const savealldatajson=JSON.stringify(alldata)
    fs.writeFileSync("data.json",savealldatajson)

}
const deletedata = (id)=>{
    const alldata=loddata()
    const datatokep = alldata.filter((obj)=>{
      return obj.id != id 
    })
    console.log(datatokep)
    savealldata(datatokep)
  
  }
  
  
  const readdata=(id)=>{
   const alldata=loddata()
    item=alldata.find((obj)=>{
      return obj.id == id
    })
    console.log(item)
  }
  
  
  const listdata =()=>{
    const alldata =loddata()
    list=alldata.map((obj) => {
      console.log(obj.fname,obj.lname)
    });
  }
module.exports={
    addperson,
    deletedata,
    readdata,
    listdata
}
