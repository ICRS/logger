module.exports = {
  func: async (message, suffix) => {
    const os = require('os-utils')

    os.cpuUsage(async v => {
      await message.channel.createMessage(`CPU usage: ${v * 100}%`)
    })
    os.cpuFree(async v => {
      await message.channel.createMessage(`CPU free: ${v * 100}%`)
    })
  },
  name: 'getcpu',
  description: 'Bot owner debug command.',
  type: 'creator',
  hidden: true
}
