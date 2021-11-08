const handlers = {
    "/": (req, res) => {
        console.log("Default path");
        return {};
    },

    "/api/contract": (req, res) => {
        console.log("get contract");
        
        const body = {"a": "parameter a", "b": "parameter b"};

        return body;
    },

    "/api/getStaffUnits": (req, res) => {
        console.log("get getStaffUnits");
        const body = {
            idPosition: 'd9f1942f-2745-4ef0-9d50-b02c3c73440d',
            id: 'f0d65ea6-38cd-4564-97ce-caed704ca325'
        };
        return body
    },
    
    "/api/getOrganizations": (req, res) => {
        console.log("get getStaffUnits");

        return {"getOrganozationResult": "success"}
    },
    
    "/api/getResponse": (req, res) => {
        
        return JSON.stringify(res);
    }
}    

module.exports = handlers;
