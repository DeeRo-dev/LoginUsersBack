
const registerUser = (req:any, res:any, next:any) => {
    try {
        res.send("Registraaando....")
    } catch (error) {
        console.log(error)
    }
}

export {
 registerUser
}