const model = require('./model')




const handler = {
    async findMany(req, res, next) {
        try {
            let { pageIndex, pageSize, sortBy, sort, search = '', field = '' } = req.query
            console.log(field)

            pageSize = parseInt(pageSize) || 20
            pageIndex = parseInt(pageIndex) || 1

            let limit = pageSize
            let skip = (pageIndex - 1) * pageSize
            let sortInfo = `${sort == 'desc' ? '-' : ''}${sortBy}`
            let fieldsArr = field.split(',').map(field => field.trim())
            console.log(fieldsArr)
            let condition = {}
            if (search) {
                condition.title = new RegExp(search, 'i')
            }

            let items = await model.find(condition, fieldsArr).skip(skip).limit(limit).sort(sortInfo)

            // let items = await productModel.find({})
            res.json(items)
        } catch (error) {
            next(error)
        }

    },

    async searchCategories(req, res, next) {
        try {
            let { search = '' } = req.query
            console.log(search)

            let items = await model.find({ title: search })
            console.log(items)
            res.json(items[0]._id)
        } catch (error) {
            next(error)
        }

    },

    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let item = await model.findById(id)
            console.log(item)
            res.json(item)
        } catch (error) {
            next(error)
        }

    },

    async create(req, res, next) {
        try {
            let data = req.body // { title: '123', description: '123' }
            console.log(data)
            let item = await model.create(data) // { _id: '', title, description }
            console.log(item)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let data = req.body
            let id = req.body._id
            if (!id) {
                throw new Error("Require id to update")
            }
            let item = await model.findByIdAndUpdate(id, data, { new: true })
            res.json(item)
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            let id = req.params.id
            let item = await model.findByIdAndDelete(id)
            res.json(item)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = handler