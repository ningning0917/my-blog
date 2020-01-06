/**
 *  默认配置
 * @type
 */
module.exports = {
  baseDir: '~/Documents/egg/my/egg-study',
  keys: 'Ap38dk30sS3l',
  private_key: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCK3siV2MKl7ADFMajEsbc/ZrSTfo9h37c6+m0cUHOTqGR4V+Ug
zc5Wzpcrz6QGu7/umQBJRC3LZ8xRW8+J6Z1lI0+Tr6LT8NfLUeyBTBXkBI1j0BIz
mEjsW/a1vDr2ahXn1RFvtnHeKs41lbICkY7mRA2cAyiMWhrteM1d1MR3gQIDAQAB
AoGACUU8ELzKqbbqij95a8ANYp8hmOMPAVKk8bv8ArLgNFA+fMYpVppGlwbtkpAm
/AgWlQADw+BYSkbgneHKJgPBbQB+G8/AmMY/u3KIFS4wJifaIAv2evDlFqtw2zI6
bG7bg65YF9AS1l9B+O3IdqMDNBKqQYiItx1A/SfogAXJctECQQDeIzh3k8mkzyMe
lxrFY5kJ5u+ydse82nOmawxo3kS/WEZh2jadeUdAXvXDhXrQ4O1t8zrG4gY6sAq4
3KqeouBdAkEAoAobkEY/M/Rtya8tomm3Dg9+Hc9yNphVr8fG3tLpphALuGSP+0Qp
9ONyoC4G71MnIPtqBl6JDNzKARY2NUjRdQJBANw/57kIW6KBjrzB7dVRD2h2BavZ
gemKX6jd8wv3dgqSqBZVmllA6pi0jtEyA7gfjMq7o8eWS77c1YS9pp5ruDECQQCJ
Ep8xHzmbAkvWZpgrd2g2PsbCOZ+VazxY5j9LMlK0zSF8uYUorOVSvky7LTD7Yrks
4qmY8vdncOQDskaTtN7RAkBc/3Brhc5eG0/XHqKrATY+H0GD/muzpLSLuDXVjgqh
lEYH3FAsW+VP5dQ6AuzW+wkFDbztdvr5MF9Mluyxc3Fe
-----END RSA PRIVATE KEY-----`,
  public_key: `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCK3siV2MKl7ADFMajEsbc/ZrST
fo9h37c6+m0cUHOTqGR4V+Ugzc5Wzpcrz6QGu7/umQBJRC3LZ8xRW8+J6Z1lI0+T
r6LT8NfLUeyBTBXkBI1j0BIzmEjsW/a1vDr2ahXn1RFvtnHeKs41lbICkY7mRA2c
AyiMWhrteM1d1MR3gQIDAQAB
-----END PUBLIC KEY-----`,
  view: {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks'
    }
  },
  login_token_time: 7 * 24 * 3600 * 1000,
  session: {
    key: 'EGG_SESS',
    httpOnly: true,
    encrypt: true,
    renew: true,
    maxAge: 7 * 24 * 3600 * 1000 // 7 天
  },
  redis: {
    clients: {
      loginToken: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 0
      }
    }
  },
  lru: {
    client: {
      // all lru cache config available here
      max: 1000,
      maxAge: 1000 * 60 * 60 * 24 // 1 天
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false
  },
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  middleware: ['jwt', 'saveSession', 'errorHandler'],
  jwt: {
    enable: true,
    ignore: ['/', '/study/login', '/study/register', '/study/uploadFile', '/study/github', '/study/github_callback', '/home/index', '/study/githubLogin', '/passport/github'] // 哪些请求不需要认证
  },
  email: {
    service: 'QQ',
    user: '1520521891@qq.com',
    pass: 'xxxxxxxxxxxxxxxxx'
  },
  client_id: '6fd9bb9ad92200bb9191',
  client_secret: 'f504c85531983fe4dbb49b4b4a3dceb871b076ad',
  security: {
    csrf: {
      enable: false, // 前后端分离，post请求不方便携带_csrf
      ignoreJSON: true,
      ignore: /\/admin/
    },
    domainWhiteList: ['http://localhost:8257', 'http://webrabbit.free.idcfengye.com', '.qq.com', 'http://127.0.0.1:7001'] // 配置白名单
  },
  cors: {
    origin: '*', // 允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  },
  // 阿里云node 监控平台
  alinode: {
    enable: true,
    server: 'wss://agentserver.node.aliyun.com:8080',
    appid: '77741',
    secret: 'b24850c124cfbb1a86bea9cd4dc71da8941cd7ee',
    logdir: '/tmp/'
  },
  passportGithub: {
    key: '24c1c928073dc5cd3b4f',
    secret: 'c1bcea3542fa355646da30ec6c77266ad08ec232',
    callbackURL: '/passport/github/callback'
  },
  // 邮箱配置
  mail_opts: {
    host: 'smtp.163.com',
    port: 25,
    auth: {
      user: 'websmallrabbit@163.com',
      pass: 'wangke930213'
    },
    ignoreTLS: true
  },
  weChatOAuth: {
    appId: 'wxa2508b52448eb2fa',
    secret: '9f81968fb3f35f9f220372ba480ce3bc'
  },
  io: {
    // # namespace命名空间配置为/
    namespace: {
      '/': {
        // # 预处理器中间件, 我们这里配置了一个auth, 进行权限判断, 它对应的文件是/app/io/middleware/auth.js, 这里可以配置多个文件, 用逗号隔开
        connectionMiddleware: ['auth'], // #这里我们可以做一些权限校验之类的操作
        packetMiddleware: [] // # 通常用于对消息做预处理，又或者是对加密消息的解密等操作
      }
      // '/chat': {
      //   connectionMiddleware: ['auth'], // #这里我们可以做一些权限校验之类的操作
      //   packetMiddleware: ['filter'] // # 通常用于对消息做预处理，又或者是对加密消息的解密等操作
      // }
    }
  }
// # 配置redis, 非必须, 不需要的可以不配置这块, egg-socket.io内置了socket-io-redis， 在cluster模式下, 使用redis可以较为简单的实现clients/rooms等信息共享
// redis: {
//   host: 'ip地址',
//     prot: 6379,
//     auth_pass: 123456,
//     db:0,
//   }
}
