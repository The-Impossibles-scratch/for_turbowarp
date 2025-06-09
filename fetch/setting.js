((Scratch) => {
  const id = 'Fetch Scratch Cloud';
  const name = 'Fetch : Scratch Cloud'
  
  class MyExtensionInfo {
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
          
        }
      },

      {
        opcode: 'Get_Cloud_Logs',
        blockType: Scratch.BlockType.REPORTER,
        text: 'Get Cloud Logs [project_id], [limit], [offset]'
        arguments: {
          project_id: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'project id'
          },
          limit: {
            type: Scratch.ArgumentType.STRING,
            defualtValue: '1000'
          },
          offset: {
            type: Scratch.ArgumentType.STRING,
            defualtValue: '0'
          }
      }
    ]
  }
  
  const HOST = 'https://The-Impossibles-scratch.github.io';
  const DIRECTORY = 'for_turbowarp/fetch';
  const FILE = 'main.js';
  
  class MyExtension {
    getInfo() {
      return MyExtensionInfo
    }
    async Loading(args, util) {
      const QUERY = new Data().getTime();
      const Main = await import(`${HOST}/${DIRECTORY}/${FILE}?_t=${QUERY}`);
      this.main_js = new Main.Main();
    }
    async Set_Cloud_Var(args, util) {
      let project_id = args.project_id;
      this.main_js.
      
    
