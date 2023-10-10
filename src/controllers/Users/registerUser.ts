
const registerUser = (req:any, res:any, next:any) => {
       
    try {
        const {name, email, password, address, telephone, country} = req.body;
        //hay que ver si existe el usuario
        //Hashear el password
        res.send("Registraaando....")
    } catch (error) {
        console.log(error)
    }
}

export {
 registerUser
}