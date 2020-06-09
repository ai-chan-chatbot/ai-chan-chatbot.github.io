import {Help} from './'

export default (prefix:string):Help[] => [{
  commands: ['member'],
  category: 'ADMIN TOOL',
  description: 'Adding role member to any users',
  examples: ['member add @someone', 'member kick @someone'],
  mentionOnly: false,
  notes: [
    `You can add member role to any user for easy armada member management`,
    `Kiana uses the role 'member' to identify armada members, use <${prefix}member setrole <role name>> to customise the role name`,
    `Kiana will announce added member in a channel with name that starts with 'common' for everyone to welcome and celebrate the newly joined member, ` +
      `use <${prefix}member setwelcome #channel> to customise the channel`,
    `Bronya will add an entry as event record similar to how she records any user that joins or leave the server`,
  ]
}, {
  commands: ['roam'],
  category: 'ADMIN TOOL',
  description: 'Allow Kiana to post message to this channel without a command',
  examples: ['roam', 'roam #dorm'],
  mentionOnly: true,
  notes: [
    `Kiana will use a channel with name that starts with 'announcement' to inform user of updates from Honkai Impact`,
    `This channel can be changed according to captain's arrangement with this command`
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as Kiana',
  examples: ['send #general <message>', 'send <message>', 'send @someone <message>'],
  mentionOnly: true,
  notes: [
    `Tagging a channel will result in the bot messaging the tagged channel`,
    `Mentioning someone will result int the bot messaging that mentioned user privately`,
    `This command doesn't work on multiple tag or mention so please only tag one channel or mention one user in a single message`
  ]
}]