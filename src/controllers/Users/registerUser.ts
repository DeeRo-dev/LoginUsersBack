
const registerUsers = (req:any, res:any, next:any) => {
    try {
        console.log('register')
        res.send("Holis soy el registro")
    } catch (error) {
        console.log(error)
    }
}

export {
 registerUsers
}