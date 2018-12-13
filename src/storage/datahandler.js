

export default function AddGroup(data) {
    var fs = require('fs');

    fs.readFile('groups.xml', 'utf-8', function (data, err){
        if(err) console.log(err);
        console.log(data);    
    });
}