// const commander = require("commander");

// // version为当前脚本添加版本号默认-V、--version,这里使用-v、--version
// commander.version('1.0.1','-v,--version');
// // usage默认为当前脚本添加-V、--version,这里使用-v、--version
// commander.usage('1.0.1','-v,--version');
// // 解析当前命令行中到参数数据
// // console.log(process.argv);
// commander.option('-u --user [name]','customer\'s name',/^\w+$/i,'bird').parse(process.argv);

// console.log(' customer\'s: %j', commander.user);
var program = require('commander');
var colors = require('colors');
program
  .version('0.1.0')
  .command('getStream [url]', 'get stream URL')
  .parse(process.argv);

// if (!process.argv.slice(2).length) {
  program.outputHelp(make_red);
// }

function make_red(txt) {
  return colors.red(txt); //display the help text in red on the console
}
