# 安装步骤
安装nodejs
安装依赖 npm install

# 启动方式
项目根目录执行
```
pm2 start pm2.json
```
# 常用命令
```
pm2 list //查看列表
pm2 stop all //停服务
pm2 restart all //重启服务
```
# 配置说明
```
{
    "name": "koa-server-3000", // 应用名称
    "script": "app.js", // 实际启动脚本
    "log_date_format": "YYYY-MM-DD HH:mm Z",//日志的log日志格式
    "error_file" : "./data/logs/app-err.log",  // 错误日志路径
    "out_file": "./data/log/layout-file-3000.stdout.log", // 普通日志路径
    "max_memory_restart": "300M",//当内存超过300M时自动重启
    "watch": true, //监控文件变化，一旦变化，自动重启
    "instances": 0, //启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。
    "exec_mode": "cluster" //应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
}
```
#travis ci
1. gem install travis // 安装travis-ci的命令行工具
2. 登录
// 两种登录方式
travis login --github-token 'token'
// 检查一下是否登录成功：
travis login --auto 
travis whoami
3. 对ssh私钥id_rsa进行加密：私钥放到travis服务器上,公钥放到远程主机
travis encrypt-file ~/.ssh/id_rsa --add

# 单元测试 https://www.jianshu.com/p/aa53ac34e4c0