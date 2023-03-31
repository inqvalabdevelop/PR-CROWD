import { userQueries } from '../database/userQuery'
import { getConnection, sql } from '../database/configuration/connection';

import { generateCodeVerification } from '../extras/confirmNumber';

const nodemailer = require("nodemailer");

let jConfig = {
    "host":"smtp.gmail.com", 
   "port":"587", 
   "secure":false, 
    "auth":{ 
            "type":"login", 
            "user":"d07664662@gmail.com", 
            "pass":"wysejayhmwvlzkpw" 
    }
};  

export const createUser = async (req, res) => {
    if (req.body == null) {
        res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
    } else {
        const pool = await getConnection();
        var result = await pool.request()
            .input("name", sql.VarChar, req.body.name)
            .input("lastName", sql.VarChar, req.body.lastName)
            .input("email", sql.VarChar, req.body.email)
            .input("password", sql.VarChar, req.body.password)
            .input("username", sql.VarChar, req.body.username)
            .query(userQueries.createNewUser);
        res.json(req.body);
    } 
}

export const createAdmin = async (req, res) => {
    try {
        if (req.body == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            var generatePassword = generateCodeVerification(8);

            const pool = await getConnection();
            var result = await pool.request()
                .input("name", sql.VarChar, req.body.name)
                .input("email", sql.VarChar, req.body.email)
                .input("password", sql.VarChar, generatePassword.trim())
                .input("phonenumber", sql.VarChar, req.body.phonenumber)
                .input("lastname", sql.VarChar, req.body.lastname)
                .input("secondlastname", sql.VarChar, req.body.secondlastname)
                .input("username", sql.VarChar, req.body.name.substring(0, 3) + req.body.lastname.substring(0, 3) + generateCodeVerification(2).trim())
                .input("address", sql.VarChar, req.body.address)
                .query(userQueries.createNewAdmin);
            if (result.rowsAffected == 1) {

                let email ={ 
                    from:"IncUValab",  //remitente
                    to:req.body.email,  //destinatario
                    subject:"Bienvenido a IncUValab",  //asunto del correo
                    html:` 
                        <div> 
                        <p>Tus credenciales son: </p> ${generatePassword}
                        <p>Recuerda que por seguridad debes de cambiar tu contraseña.</p> 
                        </div> 
                    ` 
                };

                let createTransport = nodemailer.createTransport(jConfig);

                createTransport.sendMail(email, function (error, info) { 
                    if(error){ 
                         console.log("Error al enviar email"); 
                        return res.status(500).send(error.message);

                    } else{ 
                        console.log("Correo enviado correctamente"); 
                        res.json(result.rowsAffected);

                    } 
                    createTransport.close(); 
                });
                
            }
        }
    } catch (err) {
        res.status(500);
        res.send(error.message);
    }
}

export const getLoginUser = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('email', sql.VarChar, req.body.email)
            .input('password', sql.VarChar, req.body.password)
            .query(userQueries.getLoginUser)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(userQueries.getUserById)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const getTypeUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(userQueries.getTypeUserById)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(userQueries.deleteUserById)
        res.status(200);
        res.json(result.rowsAffected);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const updateUserById = async (req, res) => {
    try {
        const pool = await getConnection();
        const { id } = req.params;
        if (req.body == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id");
        } else {
            const result = await pool.request()
                .input("name", sql.VarChar, req.body.name)
                .input("lastname", sql.VarChar, req.body.lastname)
                .input("secondlastname", sql.VarChar, req.body.secondlastname)
                .input("username", sql.VarChar, req.body.username)
                .input("phonenumber", sql.VarChar, req.body.phonenumber)
                .input("address", sql.VarChar, req.body.address)
                .input('id', sql.Int, id)
                .query(userQueries.updateUserById);
            res.status(200);
            res.json(result.rowsAffected);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUserEditList = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(userQueries.getUserCommandlist);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUserDonateFunding = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request().input('idFunding', id)
            .query(userQueries.getUserDonateFunding);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const getEmailVerification = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('email', sql.VarChar, req.body.email)
        .query(userQueries.getExistEmailVerification)
    res.json(result.recordset);
}

export const restoreForgetPassword = async (req, res) => {
    try {
        console.log("restore")
        var codeVerfication = generateCodeVerification(7)
        const code = { codeV: codeVerfication }

        let email ={ 
            from:"IncUValab",  //remitente
            to:req.body.email,  //destinatario
            subject:"Restauración de contraseña",  //asunto del correo
            html:` 
                <div> 
                <p>Tu código de verificación de email es: </p> ${codeVerfication}
                </div> 
            ` 
        };

        let createTransport = nodemailer.createTransport(jConfig);

        createTransport.sendMail(email, function (error, info) { 
            if(error){ 
                console.log("Error al enviar email"); 
                return res.status(500).send(error.message);

            } else{ 
                console.log("Correo enviado correctamente"); 
                res.json(code);

            } 
            createTransport.close(); 
        });
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const setPasswordForget = async (req, res) => {
    try {
        if (req.body == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            const pool = await getConnection();
            var result = await pool.request()
                .input("email", sql.VarChar, req.body.email)
                .input("password", sql.VarChar, req.body.password)
                .query(userQueries.setPasswordUpdate);
            res.json(result.rowsAffected);
        }
    } catch (err) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUsers = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(userQueries.getAllUsers);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountFollowedByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int,id)
            .query(userQueries.getCountFollowedByUserId)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountDonationsByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int ,id)
            .query(userQueries.getCountDonationsByUserId)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const setUserFollowedInsert = async(req, res) => {

            const pool = await getConnection();
            var result = await pool.request()
                .input("idUser", sql.Int, req.body.idUser)
                .input("idFunding", sql.Int, req.body.idFunding)
                .query(userQueries.setUserFollowedInsert);
            res.json(result.rowsAffected);

}

export const getCountFundingsCreateByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int ,id)
            .query(userQueries.getCountFundingsCreateByUserId)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleOfFollowedFundingByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(userQueries.getTitleFollowedFundingByUserId)
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleOfFundingDonateByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(userQueries.getTitleOfFundingDonateByUserId)
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleFundingByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(userQueries.getTitleFundingByUserId)
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updatePasswordByUserId = async(req, res) => {
    try {
        const pool = await getConnection();
        const { id } = req.params;
        if (req.body == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined password Or id");
        } else {
            const result = await pool.request()
                .input('email', sql.VarChar, req.body.email)
                .input('newPassword', sql.VarChar, req.body.newPassword)
                .input('id', sql.Int, id)
                .query(userQueries.changePassword);
            res.status(200);
            res.json(result.rowsAffected);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateImageProfile = async(req, res) => {
    try {
        const pool = await getConnection();
        const { NewImageProfile } = req.body;
        const { id } = req.params;
        if (NewImageProfile == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id");
        } else {
            const result = await pool.request()
                .input('newImageProfile', sql.VarChar, NewImageProfile)
                .input('id', sql.Int, id)
                .query(userQueries.changeImageProfile);
            res.status(200);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
