require('dotenv').config();
const key = "628cbdb7b24a18a815ed";
const secret = "f900df4b55439bf7b74ef7d11650b44c5c14fdd63da4e0a8eb9fdd7235989a70";
const axios = require('axios');

export const pinJSONToIPFS = async (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
            return {
                success: true,
                pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
                             
            };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

        });
};