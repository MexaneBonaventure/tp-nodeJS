console.log("my-script.js");

module.exports = {
    btnCreate(name, type, user){
        var anchors = [ {"name": name, "type": type, "userID": user} ]
        var data = fs.readFileSync('../../db.json');
        var json = JSON.parse(data);
        json.push(...anchors);
        fs.writeFile("../../db.json", JSON.stringify(json));
        console.log(json);
    }
}
