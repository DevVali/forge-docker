const { token } = require("./config.json");
const { ForgeClient } = require("forgescript");

const client = new ForgeClient({
    intents: [
        "GuildMessages",
        "Guilds",
        "MessageContent", // This intent is privileged, must be whitelisted in dev portal, in your application.
    ],
    events: ["messageCreate", "ready"], // Events our bot will act on
    prefixes: ["!", "?"], // The prefixes to use for our bot!
});

client.commands.add({
    name: "user", // Not defining this creates a command that will be executed for every event fired of given type
    code: `Your name is $username!`,
    type: "messageCreate", // The event to act on
});

client.login(token);
