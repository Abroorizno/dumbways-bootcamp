let todo = []
const db = require('../config/database')

exports.index = (req, res) => {
    db.query('SELECT * FROM todos', (err, rows) => {
        if(err) throw err

        return res.send({
            message: 'BERHASIL',
            rows
        })
    })
}

exports.create = (req, res) =>{
    const number = Math.random().toFixed(10).substr(2,9)
    const { waktu, task} = req.body

    db.query(`INSERT INTO todos (todo_task) VALUES ('${task}')`, (err) => {
        if(err) throw err
    })

    // const data = {
    //     id: number,
    //     task,
    //     waktu
    // }

    // todo.push(data)

    return res.send({
        message : 'Berhasil !',
        input: task
    })
}

exports.show = (req, res) => {
    const params = req.params.id

    db.query(`SELECT * FROM todos WHERE id='${params}'`, (err, row) => {
        if(err) throw err

        return res.send({
            message: 'BERHASIL DI TEMUKAN', 
            row
        })
    })

    // const find = todo.find(item => {
    //     return item.id == params
    // })

    // return res.send({
    //     message: 'Berhasil',
    //     find
    // })
}

exports.destroy = (req, res) => {
    const { id } = req.params

    db.query(`DELETE FROM todos WHERE id='${id}'`, (err) => {
        if(err) throw err

        return res.send({
            message: 'BERHASIL DI HAPUS'
        })
    })

    // const index = todo.findIndex(item => item.id == id)

    // if(index !== -1){
    //     todo.splice(index, 1)
    //     return res.send({
    //         message: 'Terhapus',
    //         id
    //     })
    // }else{
    //     return res.send({
    //         message: 'Id Tidak di Temukan'
    //     })
    // }
}

exports.update = (req, res) =>{
    const {id}  = req.params
    const {waktu, task} = req.body

    db.query(`UPDATE todos SET todo_task='${task}' WHERE id='${id}'`, (err) => {
        if(err) throw err

        return res.send({
            message: 'BERHASIL DI UPDATE'
        })
    })

    // const index = todo.findIndex(item => item.id == id)

    // if(index !== -1){

    //     // Single Update
    //     // todo[index].waktu = waktu
    //     // const item = todo[index]

    //     let item = todo[index]

        
    //     // MultiUpdate
    //     const data = {
    //         ...item,
    //         waktu,
    //         task
    //     }

    //     todo[index] = data

    //     const todoItem = todo[index]
    //     return res.send({
    //         message: 'Berhasi diUbah',
    //         todoItem
    //     })
    // }else{
    //     return res.send({
    //         message: 'ID yang tidak ditemukan'
    //     })
    // }

}