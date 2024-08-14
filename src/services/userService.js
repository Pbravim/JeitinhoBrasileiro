const getEmail = async (email) => {
    try {
        // Procura no banco de dados pelo email

        // const user = await User.findOne({
        //     where:{email: email}
        // })

        if (!user) return false

        return user
    }catch (error){
        throw (error)
    }
}