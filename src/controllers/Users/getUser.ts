
const getUser = (req:any, res:any, next:any) => {
    try {
        res.send("Traer los datos del usuario")
    } catch (error) {
        console.log(error)
    }
}

export {
    getUser
}