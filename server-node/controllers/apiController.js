const sampleData = [{
    "id": 1,
    "name": "testData1",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to test for node render 1"
},
{
    "id": 2,
    "name": "testData2",
    "value": "MULTIPLY",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to test for node render 2"
},
{
    "id": 3,
    "name": "testData3",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to test for node render 3"
},
{

    "id": 4,
    "name": "testData4",
    "value": "ADD",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to test for node render 4"
},
{
    "id": 5,
    "name": "testData5",
    "value": "ADD",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to test for node render 5"
},
{
    "id": 6,
    "name": "testData6",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to test for node render 6"
},
{
    "id": 7,
    "name": "testData7",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to test for node render 7"
},
{
    "id": 8,
    "name": "testData8",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to test for node render 8"
},

{
    "id": 9,
    "name": "testData9",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to test for node render 9"
},
{
    "id": 10,
    "name": "testData10",
    "value": "ADD",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to test for node render 10"
}
]

const prodData = [{
    "id": 1,
    "name": "prodData1",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to display for node render 1"
},
{
    "id": 2,
    "name": "prodData2",
    "value": "MULTIPLY",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to display for node render 2"
},
{

    "id": 3,
    "name": "prodData3",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to display for node render 3"
},
{
    "id": 4,
    "name": "prodData4",
    "value": "ADD",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to display for node render 4"
},
{
    "id": 5,
    "name": "prodData5",
    "value": "ADD",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to display for node render 5"
},
{
    "id": 6,
    "name": "prodData6",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to display for node render 6"
},
{
    "id": 7,
    "name": "prodData7",
    "value": "CONSTANT",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to display for node render 7"
},

{
    "id": 8,
    "name": "prodData8",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to display for node render 8"
},
{
    "id": 9,
    "name": "prodData9",
    "value": "SUBTRACT",
    "config": "rootEVAL",
    "status": "InActive",
    "Desc": "This is to display for node render 9"
},
{
    "id": 10,
    "name": "prodData10",
    "value": "ADD",
    "config": "rootEVAL",
    "status": "Active",
    "Desc": "This is to display for node render 10"
}
]

const data = process.env.NODE_ENV === "PROD" ? prodData : sampleData
const getListController = (req, res) => {
    res.json(data);
}

const getListItemController = (req, res) => {
    const { id } = req.params;
    const arr = data.filter(data => +id === data.id);
    if (arr.length === 0) {
        return res.status(422).json({ message: "Data Not Found" })
    }
    res.json(arr);
}

module.exports = {
    getListController,
    getListItemController
}