const moongose = require ('mongoose');

const guildSchema = moongose.Schema({
  id : String,
  prefix: { 'type': String, 'default': '!' },
  logChannel: { 'type': String, 'default': '1015944969279778916' }
});

module.exports = moongose.model('guild', guildSchema);