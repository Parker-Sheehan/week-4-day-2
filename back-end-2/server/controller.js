let houseData = require('./db.json')
let houseId = 4



module.exports = {
    getHouses : (req,res) => {
        res.status(200).send(houseData)
    },
    deleteHouse : (req,res) => {
        let {id} = req.params
        houseData = houseData.filter(house => house.id !== +id)
        res.status(200).send(houseData)
    },
    createHouse : (req,res) => {
        let body = {... req.body, id: houseId}
        body.price = Number(body.price)
        houseData.push(body)
        res.status(200).send(houseData)
        houseId++
    },
    updateHouse : (req,res) => {
        let {id} = req.params
        let {type} = req.body
        for (let i = 0; i < houseData.length; i++){
            if (houseData[i].id === +id){
                // console.log(houseData[i])
                if(type === "minus" && houseData[i].price >= 10000){
                    houseData[i].price -= 10000
                } else if (type === "plus"){
                    houseData[i].price += 10000
                }

            }
        }
        res.status(200).send(houseData)
    }
}

