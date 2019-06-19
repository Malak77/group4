
            const express=require('express');
            const cors = require('cors');
            const app = express();
            app.use(express.json()); // Middleware - for reading the BODY
            app.use(cors());
            const serverSupportedfuncs=require('./serverSupportedFuncs.js');
            const usersChatsDetails=[];
            app.get('/',(req,res)=>{
                serverSupportedfuncs.toJson(res,usersChatsDetails );
            });
            app.post('/',(req,res)=>{
                const id = Math.floor(Math.random() * 10000);
               const username= req.body.username;
               const message= req.body.message;
                usersChatsDetails.push({id,username,message});
                serverSupportedfuncs.toJson(res,"added a message");
            });
            app.delete('/',(req,res)=>{
                const id = Number(req.query.id);
                const chatIndex = serverSupportedfuncs.getIndexById(usersChatsDetails, id);
                usersChatsDetails.splice(chatIndex, 1);
                serverSupportedfuncs.toJson(res, "ok");
            });


            app.listen(5555,function() {
                console.log('Listening on port 6000');
              });