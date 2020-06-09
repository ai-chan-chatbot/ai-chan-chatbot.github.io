import {Help} from './'

export default (prefix:string):Help[] => [{
  commands: ['music'],
  category: 'UTILITY',
  description: 'Plays music with Project Bunny 19C',
  examples: ['music play <song name>', 'music stop', 'music show'],
  mentionOnly: false,
  notes: [
    `Bronya plays music for you using her one and only Project Bunny 19C`,
    `You will need to join a voice channel for Bronya to play you music`,
    `Use <music show> to show the music list Bronya is currently playing and ` +
      `<music stop> to stop Project Bunny 19C and politely ask Bronya to leave the voice channel`,
    `This command has shortform \`!m\` for easier access`
  ]
}, {
  commands: ['roam'],
  category: 'ADMIN TOOL',
  description: 'Allow Bronya to post message to this channel without a command',
  examples: ['roam', 'roam #dorm'],
  mentionOnly: true,
  notes: [
    `Bronya will use a channel with name that starts with 'valkyrie' to inform everyone of users joining and leaving the server, ` +
      `or members joining and kicked out from the armada`,
    `This channel can be changed according to captain's arrangement with this command`
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as Bronya',
  examples: ['send #general <message>', 'send <message>', 'send @someone <message>'],
  mentionOnly: true,
  notes: [
    `Tagging a channel will result in the bot messaging the tagged channel`,
    `Mentioning someone will result int the bot messaging that mentioned user privately`,
    `This command doesn't work on multiple tag or mention so please only tag one channel or mention one user in a single message`
  ]
}]