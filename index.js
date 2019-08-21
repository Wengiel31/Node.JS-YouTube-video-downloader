const fs = require("fs");
const ytdl = require("ytdl-core");
const readline = require("readline-sync");
var song = readline.question("Link to the video that you want to download: ");
console.log("Checking if the given link is correct");
if (!ytdl.validateURL(song)) {
        console.log("\x1b[31m%s\x1b[0m", "> Given link is incorrect");
        return 1;
} else {
        console.log("\x1b[32m%s\x1b[0m", "> Given link is correct");
}
var name = readline.question('Name that you want Your video to have (default: "video"): ', {defaultInput: "video"});
console.log("Processing your request...");
ytdl(song, {quality: "highest", lang: "en"}).pipe(fs.createWriteStream(name + ".mp4"));
//console.log("Requestes video has been downloaded and encypted. You can now find it in the path of this program");