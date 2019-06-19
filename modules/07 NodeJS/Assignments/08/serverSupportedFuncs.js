
        function toJson(res,chat) {
            res.json({chat});

        }

        function getIndexById(arr, id) {
            return arr.findIndex(item => item.id === id);
        }



        module.exports={toJson,getIndexById}