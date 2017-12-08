var irc = require("irc");

var config = {
    channels: ["#sugar-gci-mentors", "#sugar"],
    server: "irc.freenode.net",
    botName: "Chidume-Bot"
};

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

// Listen for joins
bot.addListener("join", function(channel, who) {
    // Welcome them in!
    bot.say(channel, who + "...Welcome Back!");
});

// Listen for any message, PM said user when he posts
bot.addListener("message", function(from, to, text, message) {
    //bot.say(from, "Wat Yah Say?");
});

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
    //bot.say(config.channels[0], "??");
});