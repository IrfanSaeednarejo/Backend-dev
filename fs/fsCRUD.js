const fs = require('fs');

fs.readFile("./docs/page1.txt", (err, data) => {
        if (err){
            console.log("Error reading file:", err);
            return;
        }

        const content = data.toString();
        console.log(content);
        
   });

fs.writeFile("./docs/page2.txt", "This is page 2 content", (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("File written successfully");
});



if (!fs.existsSync("./directory1")) {
    fs.mkdir("./directory1", (err) => {
        if (err) {
            console.log("Error creating directory:", err);
            return;
        }
        console.log("Directory created successfully");
    });
    } else {
    console.log("Directory already exists");
}


if(fs.existsSync("./docs/page2.txt")) {
    fs.unlink("./docs/page2.txt", (err) => {
        if (err) {
            console.log("Error deleting file:", err);
            return;
        }
        console.log("File deleted successfully");
    });
}