const mongoose = require('mongoose');

const Player = mongoose.model('Player');

module.exports = {
    async index(req, res)
    {
        const players = await Player.find();

        return res.json(players);
    },

    async show(req, res)
    {
        const player = await Player.findById(req.params.id);

        return res.json(player);
    },

    async findPlayerName(req, res)
    {
        const player = await Player.find({name: req.params.name});

        return res.json(player);
    },


    async store(req, res)
    {
        const player = await Player.create(req.body);

        return res.json(player);
    },

    async update(req, res)
    {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(player);
    },

    async destroy(req, res)
    {
        await Player.findByIdAndRemove(req.params.id);

        res.send();
    }

}