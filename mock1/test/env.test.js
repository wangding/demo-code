describe("doMock config", () => {
  beforeEach(() => {
    // 必须重置模块，否则无法再次应用 doMock 的内容
    jest.resetModules();
  })

  it('开发环境', () => {
    jest.doMock('../env', () => ({
      __esModule: false,
      config: {
        getEnv: () => 'dev'
      }
    }));

    const { config } = require('../env');
    expect(config.getEnv()).toEqual('dev');
  })

  it('正式环境', () => {
    jest.doMock('../env', () => ({
      __esModule: false,
      config: {
        getEnv: () => 'prod'
      }
    }));

    const { config } = require('../env');
    expect(config.getEnv()).toEqual('prod');
  })
});
