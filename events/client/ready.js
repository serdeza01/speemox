const Logger = require('../../utils/Logger');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    Logger.client('- bot prêt');

    const devGuild = await client.guilds.cache.get('812990236253749278');
    devGuild.commands.set(client.commands.map(cmd => cmd));
  },
};
