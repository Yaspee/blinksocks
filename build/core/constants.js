'use strict';var _os=require('os');var _os2=_interopRequireDefault(_os);var _path=require('path');var _path2=_interopRequireDefault(_path);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const HOME_DIR=_os2.default.homedir();const BLINKSOCKS_DIR=_path2.default.join(HOME_DIR,'.blinksocks');const LOG_DIR=_path2.default.join(BLINKSOCKS_DIR,'logs');const LOG_FILE_PATH=_path2.default.join(LOG_DIR,typeof process.env.RUN_AS==='undefined'?'blinksocks.log':{'server':'blinksocks-server.log','client':'blinksocks-client.log'}[process.env.RUN_AS]);const LOG_FILE_MAX_SIZE=2*1024*1024;const DEFAULT_LOG_LEVEL='info';const DEFAULT_WORKERS=_os2.default.cpus().length;module.exports={HOME_DIR,BLINKSOCKS_DIR,LOG_DIR,LOG_FILE_PATH,LOG_FILE_MAX_SIZE,DEFAULT_LOG_LEVEL,DEFAULT_WORKERS};