const productConfig = {
  mysql: {
    port: 3306,
    host: '数据库地址',
    user: '用户名',
    password: '密码',
    database: 'nest-demo', // 库名
    connectionLimit: 10, // 连接限制
  },
};

const localConfig = {
  mysql: {
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nest-demo', // 库名
    connectionLimit: 10, // 连接限制
  },
};

const config = process.env.NODE_ENV ? productConfig : localConfig;

export default config;