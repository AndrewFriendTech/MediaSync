import express from 'express'


/**
 * serves static files from directory as router attached to path
 * avoids passing unsantized input to file functions.
 * @param {Express} app 
 * @param {string} serverPath 
 * @param {string} dirPath 
 */
export function attachStaticRouter(app,serverPath,dirPath){
    let router = express.Router()
    router.use(express.static(dirPath))
    app.use(serverPath,router)
        
}