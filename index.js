const class7 = require('./class7-data.json')

class OhadaClass7{
    getCategory = (class_nb = null) =>{
        let objArray = []

        if(class_nb){
            if(isNaN(Number(class_nb))){
                // check for MAIN NAME
                for (let obj of class7){
                    if(obj['MAIN NAME'].includes(class_nb.toUpperCase())){
                        objArray.push(obj)
                    }    
                }
            }
            else{
                for (let obj of class7){
                    if(obj['MAIN NO'] == Number(class_nb)){
                        objArray.push(obj)
                    }    
                }
            }
            return objArray
        }
        else{
            return class7
        }
    }

    getSubCategory = (code)=>{
        let objArray = []
    
        if(isNaN(Number(code))){
            // check for MAIN NAME
            for (let obj of class7){
                if(obj['PARENT ACC'].includes(code.toUpperCase())){
                    objArray.push(obj)
                }    
            }
        }
        else{
            for (let obj of class7){
                if(obj['PARENT NO'] == Number(code)){
                    objArray.push(obj)
                }    
            }
        }
        
        return objArray   
    }
    getAccount= (code)=>{
        myObj = {};
        if(isNaN(Number(code))){
            // check for MAIN NAME
            for (let obj of class7){
                if(obj['NAME'].includes(code)){
                    myObj = obj
                }    
            }
        }
        else{
            for (let obj of class7){
                if(obj['ACCOUNT'] == Number(code)){
                    myObj = obj
                }    
            }
        }
        
        return myObj   
    }
}

module.exports = new OhadaClass7

