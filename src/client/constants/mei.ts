import {Help} from './'

export default (prefix:string):Help[] => [{
  commands: ['alert'],
  category: 'HONKAI IMPACT',
  description: 'Adding region role to member',
  examples: ['alert', 'alert makerole'],
  mentionOnly: false,
  notes: [
    'For first setup, user with permission to manage role needs to run this command to prepare Mei',
    `Choosing ur region role will allow Mei to tag you for certain events in Honkai Impact and Kiana to tag you for any update from Honkai Impact developers`,
    `Some of the events Mei would inform you are battle simulation, abyss ending, open world reset and Mei's meal`,
    `Mei will also make sure Kiana would keep an eye on Honkai Impact social media to see if there's any updates (the only way to keep Kiana working)`
  ]
}, {
  commands: ['roam'],
  category: 'ADMIN TOOL',
  description: 'Allow Mei to post message to this channel without a command',
  examples: ['roam', 'roam #dorm'],
  mentionOnly: true,
  notes: [
    `Mei will use a channel with name that starts with 'valkyrie' to inform user of certain events in Honkai Impact`,
    `This channel can be changed according to captain's arrangement with this command`
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as Mei',
  examples: ['send #general <message>', 'send <message>', 'send @someone <message>'],
  mentionOnly: true,
  notes: [
    `Tagging a channel will result in the bot messaging the tagged channel`,
    `Mentioning someone will result int the bot messaging that mentioned user privately`,
    `This command doesn't work on multiple tag or mention so please only tag one channel or mention one user in a single message`
  ]
}]