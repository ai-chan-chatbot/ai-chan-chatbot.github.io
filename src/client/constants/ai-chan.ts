import {Help} from './'

export default (prefix:string):Help[] => [{
  commands: ['donate'],
  category: 'SUPPORT',
  description: 'Display list of our donators',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['vote'],
  category: 'SUPPORT',
  description: 'Support our bot on [DiscordBots.org](https://discordbots.org/bot/434737143395516416?) by vote',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['help'],
  category: 'UTILITY',
  description: '',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['ping'],
  category: 'UTILITY',
  description: 'Check your ping connection and my ping connection to discord server',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['server'],
  category: 'UTILITY',
  description: 'Check server detail',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['info'],
  category: 'UTILITY',
  description: 'Display some information about me',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['avatar'],
  category: 'UTILITY',
  description: 'Display your avatar image or other members by mention them (works with multiple mention)',
  examples: ['avatar @Raiden Mei', 'avatar @Raiden Mei @Kiana Kaslana @AI Chan'],
  mentionOnly: false,
  notes: ['If you not mention anyone bot will show your info instead']
}, {
  commands: ['userinfo'],
  category: 'UTILITY',
  description: 'Show detail info about your account or other members by mention them (works with multiple mention)',
  examples: ['avatar @Raiden Mei', 'avatar @Raiden Mei @Kiana Kaslana @AI Chan'],
  mentionOnly: false,
  notes: ['If you not mention anyone bot will show your info instead']
}, {
  commands: ['def', 'define'],
  category: 'UTILITY',
  description: 'Show the definition of a word/term based on urban dictionary',
  examples: ['define me', 'define you'],
  mentionOnly: false,
  notes: []
}, {
  commands: ['poll'],
  category: 'UTILITY',
  description: 'Create a poll for everyone to vote upon',
  examples: ['poll #test 1 vote 1 hour\nSelect\n- option 1\n- option 2', 'poll addoption\nSelect\n- option 3'],
  mentionOnly: false,
  notes: [
    `The first line would contain the parameter for the poll`,
    `Only 3 parameters are available now`,
    `1. channel: tag a channel that you want the poll to appear on`,
    `2. vote: specify the amount of votes a single person can choose, also represents the amount of results winning the poll`,
    `3. time: specify the duration u want the poll to last for`,
    `Any vote option should start with - or * seperated by a space`,
    `Vote options amount should be around 2-10 only`,
    `Any line besides the first line that is not an option is considered part of the question`,
    'Use addoption to add another option to an existing poll'
  ]
}, {
  commands: ['weapon'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a game weapon from Honkai Impact 3rd',
  examples: ['weapon <weapon name>', 'weapon <valkyrie name>', 'weapon <category>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our weapon gallery`,
    `Tips:`, 
    `You can just write short name of the weapon like <${prefix}weapon Judah> will result <Oath of Judah>`,
    `You can write initial name of weapon for easy calling like <${prefix}weapon 2sr> will result <2nd Sacred Relic>`,
    `This command has shortform \`!w\` for easier access`
  ]
}, {
  commands: ['stigma', 'stigmata'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a stigmata\'s effect from Hokai Impact 3rd',
  examples: ['stigmata <stigmata name>', 'stigmata <stigmata name> <T/M/B>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our stigmata gallery`,
    `Tips:`,
    `You don't need to write full name of stigma, for example <${prefix}stigmata tesla> will show you result of all stigma with your query`,
    `You can tap emoji to jump to a detailed version of a stigmata variation or stigmata set`,
    `This command has shortform \`!s\` for easier access`
  ]
}, {
  commands: ['valk', 'valkyrie'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a valkyrie\'s detail informations',
  examples: ['valkyrie <valkyrie name>', 'valkyrie <battlesuit name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie gallery`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for easier access, for example: <${prefix}valkyrie SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to recommendation setup of valkyrie`,
    `This command has shortform \`!v\` for easier access`
  ]
}, {
  commands: ['form', 'formation'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a valkyrie\'s formation and strategy',
  examples: ['formation <valkyrie name>', 'form <battlesuit name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie gallery`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for easier access, for example: <${prefix}formation SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to recommendation setup of valkyrie`,
    `This command has shortform \`!f\` for easier access`
  ]
}, {
  commands: ['recom', 'recommendation'],
  category: 'HONKAI IMPACT',
  description: 'Show you recommendation about equipment setup for a specified valkyrie',
  examples: ['recommendation <valkyrie name>', 'recommendation <battlesuit name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for easier access, for example: <${prefix}recommendation SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to detail info about valkyrie`,
    `This command has shortform \`!r\` for easier access`
  ]
}, {
  commands: ['elf'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about an ELF\'s detail informations',
  examples: ['elf <elf name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our ELF gallery`,
    `Tips:`, 
    `You can just write short name of the ELF like <${prefix}elf Blood> will result <Blood Embrace>`,
    `You can write initial name of ELF for easy calling like <${prefix}elf jw> will result <Jingwei\'s Wings>`,
    `This command has shortform \`!e\` for easier access`
  ]
}, {
  commands: ['faction'],
  category: 'HONKAI IMPACT',
  description: 'Select your faction on faction war event',
  examples: ['faction', 'faction list'],
  mentionOnly: false,
  notes: [
    'For first setup, user with permission to manage role needs to run this command to prepare Ai Chan',
    `Use ${prefix}faction list to show the sides each and every member has chosen`,
    'You can\'t change faction after choosing, if you make a mistake you must contact your server administrator/moderators to remove your faction role',
    `Admin or someone with manage-roles permission need to do <${prefix}faction reset> to enable all other members to choose their faction again`
  ]
}, {
  commands: ['gacha'],
  category: 'FUN',
  description: 'Do gacha simulation like on Honkai Impact 3rd',
  examples: ['gacha', 'gacha <focused/standard>', 'gacha <number of pull>'],
  mentionOnly: false,
  notes: [
    `Not giving any query will result in pulling standard supply gacha`,
    `There is a 1 minute cooldown after executing this command`,
    `Default number of pulls are 10 but you can change it by typing the number after the query`,
    `For example: <${prefix}gacha focused 8>, or <${prefix}gacha 5>`
  ]
}, {
  commands: ['prefix'],
  category: 'ADMIN TOOL',
  description: `Change prefix for server`,
  examples: ['prefix <new prefix>'],
  mentionOnly: false,
  notes: [
    `This server's prefix is ${prefix}`,
    'Only ADMINISTARTOR can change the prefix',
    'space character won\'t work'
  ]
}, {
  commands: ['awoo', 'howl'],
  category: 'IMAGE',
  description: 'Display gif about awoo',
  examples: ['awoo @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['blush'],
  category: 'IMAGE',
  description: 'Display gif to express blush',
  examples: ['blush @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['confused'],
  category: 'IMAGE',
  description: 'Display gif to express confused',
  examples: ['confused @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['cuddle'],
  category: 'IMAGE',
  description: 'Display gif to express cuddle',
  examples: ['cuddle @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['dance'],
  category: 'IMAGE',
  description: 'Display gif to express dance',
  examples: ['dance @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['hug'],
  category: 'IMAGE',
  description: 'Display gif to express hug',
  examples: ['hug @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['idk', 'shrug'],
  category: 'IMAGE',
  description: 'Display gif to express shrug',
  examples: ['idk @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['insult'],
  category: 'IMAGE',
  description: 'Display gif to express insult',
  examples: ['insult @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['kiss'],
  category: 'IMAGE',
  description: 'Display gif about kissing',
  examples: ['kiss @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['lewd'],
  category: 'IMAGE',
  description: 'Display gif about lewd',
  examples: ['lewd @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['lick'],
  category: 'IMAGE',
  description: 'Display gif about lick',
  examples: ['lick @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['nyan', 'neko'],
  category: 'IMAGE',
  description: 'Display gif about neko girl nyan~',
  examples: ['nyan @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['pat'],
  category: 'IMAGE',
  description: 'Display gif about pat',
  examples: ['pat @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['poke'],
  category: 'IMAGE',
  description: 'Display gif to express poke',
  examples: ['poke @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['pout'],
  category: 'IMAGE',
  description: 'Display gif about pout',
  examples: ['pout @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['punch'],
  category: 'IMAGE',
  description: 'Display gif to express punch',
  examples: ['punch @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['slap'],
  category: 'IMAGE',
  description: 'Display gif about slap',
  examples: ['slap @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['sleepy'],
  category: 'IMAGE',
  description: 'Display gif to express sleepy',
  examples: ['sleepy @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['stare'],
  category: 'IMAGE',
  description: 'Display gif about stare',
  examples: ['stare @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['smile'],
  category: 'IMAGE',
  description: 'Display gif to express smile',
  examples: ['smile @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['teehee'],
  category: 'IMAGE',
  description: 'Display gif to express tehee',
  examples: ['teehee @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['triggered'],
  category: 'IMAGE',
  description: 'Display gif to express triggered',
  examples: ['triggered @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['wasted'],
  category: 'IMAGE',
  description: 'Display gif to express wasted',
  examples: ['wasted @someone'],
  mentionOnly: false,
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['ban'],
  category: 'ADMIN TOOL',
  description: 'Ban user from server by mention it',
  examples: ['ban @someone reason'],
  mentionOnly: false,
  notes: [
    'Only user with BAN_MEMBERS permission can use this command'
  ]
}, {
  commands: ['kick'],
  category: 'ADMIN TOOL',
  description: 'Kick user from server by mention it',
  examples: ['kick @someone reason'],
  mentionOnly: false,
  notes: [
    'Only user with KICK_MEMBERS permission can use this command'
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as AI Chan',
  examples: ['send #general message', 'send message', 'send @someone message'],
  mentionOnly: false,
  notes: [
    `Tagging a channel will result in the bot messaging the tagged channel`,
    `Mentioning someone will result int the bot messaging that mentioned user privately`,
    `This command doesn't work on multiple tag or mention so please only tag one channel or mention one user in a single message`
  ]
}, {
  commands: ['clear'],
  category: 'ADMIN TOOL',
  description: 'Mass delete the message on channel',
  examples: ['clear 100', 'clear @someone'],
  mentionOnly: false,
  notes: [
    `You can only delete message by certain user by mentioning him/her`,
    `<${prefix}clear @someone> will mass delete his message in one channel`,
    `Only can delete message that are not older than 7 days`
  ]
}]