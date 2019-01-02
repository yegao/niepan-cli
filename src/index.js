const commander = require("commander");

// version为当前脚本添加版本号默认-V、--version,这里使用-v、--version
commander.version('1.0.1','-v,--version');
// usage默认为当前脚本添加-V、--version,这里使用-v、--version
commander.usage('1.0.1','-v,--version');
// 解析当前命令行中到参数数据
// console.log(process.argv);
commander.option('-u --user [name]','customer\'s name',/^\w+$/i,'bird').parse(process.argv);

console.log(' customer\'s: %j', commander.user);
