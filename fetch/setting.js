((Scratch) => {
  const id = 'Fetch Scratch Cloud';
  const name = 'Fetch : Scratch Cloud';

  const MyExtensionInfo = {
    id: id,
    name: name,
    color1: '#000000',
    color2: '#ffffff',
    color3: '#0000ff',
    blocks: [
      {
        opcode: 'Loading',
        blockType: Scratch.BlockType.COMMAND,
        text: 'Loading (Definitely use this)'
      },
      {
        opcode: 'Set_Cloud_Var',
        blockType: Scratch.BlockType.REPORTER,
        text: 'Set Cloud Var [project_id], [var], [value]',
        arguments: {
          project_id: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'project id'
          },
          var: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'var'
          },
          value: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'value'
          }
        }
      },
      {
        opcode: 'Get_Cloud_Logs',
        blockType: Scratch.BlockType.REPORTER,
        text: 'Get Cloud Logs [project_id], [limit], [offset]',
        arguments: {
          project_id: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'project id'
          },
          limit: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '1000'
          },
          offset: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '0'
          }
        }
      }
    ]
  };

  const HOST = 'https://the-impossibles-scratch.github.io';
  const DIRECTORY = 'for_turbowarp/fetch';
  const FILE = 'main.js';

  class MyExtension {
    getInfo() {
      return MyExtensionInfo;
    }

    async Loading(args, util) {
      const QUERY = new Date().getTime(); 
      const Main = await import(`${HOST}/${DIRECTORY}/${FILE}?_t=${QUERY}`);
      this.main_js = new Main.Main();
    }

    async Set_Cloud_Var(args, util) {
      return await this.main_js.set_cloud_var(args, util);
    }

    async Get_Cloud_Logs(args, util) {
      return await this.main_js.get_cloud_logs(args, util);
    }
  }

  Scratch.extensions.register(new MyExtension());
})(Scratch);
