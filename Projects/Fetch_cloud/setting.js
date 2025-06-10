((Scratch) => {
  const id = 'fetchcloud';
  const name = 'Fettch Scratch Cloud';
  
  const Infos = {
    id: id,
    name: name,
    
    color1: '#fff705',
    color2: '#ffffff',
    color3: '#ffffff',

    blocks: [
      {
        opcode: 'fetch_cloud',
        blockType: Scratch.BlockType.REPORTER,
        text: 'GET | Project Id : [project_id] | Get Options : [get_options] | Download? : [download_options] | File Type : [filetype_options]',
        
        arguments: {
          project_id: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 1
          },
          
          get_options: {
            type: Scratch.ArgumentType.DROPDOWN,
            menu: 'get_options',
            defaultValue: 'Logs'
          },
          
          download_options: {
            type: Scratch.ArgumentType.DROPDOWN,
            menu: 'download_options',
            defaultValue: 'False'
          },
          
          filetype_options: {
            type: Scratch.ArgumentType.DROPDOWN,
            menu: 'filetype_options',
            defaultValue: 'Json'
          }
        }
      }
    ],

    menus: {
      get_options: [
        {text: 'Logs', value: 'Logs'},
        {text: 'Var', value: 'Var'},
        {text: 'All Vars', value: 'All Vars'}
      ],
      
      download_options: [
        {text: 'True', value: 'True'},
        {text: 'False', value: 'False'}
      ],
      
      filetype_options: [
        {text: 'Json', value: 'Json'},
        {text: 'Text', value: 'Text'}
      ]
    },
  };

  const HOST = 'https://the-impossibles-scratch.github.io';
  const DIRECTORY = 'for_turbowarp/Projects/Fetch_cloud';
  const FILE = 'main.js';

  class fetch_cloud {
    getInfo() {
      return Infos;
    }

    async fetch_cloud(args) {
      const QUERY = new Date().getTime();
      const JS = await import(`${HOST}/${DIRECTORY}/${FILE}?_t=${QUERY}`) //reference : https://github.com/amami-harhid/turbowarpExtensions/blob/main/08_extension/Extension.js
      this.JS = new JS.Main();
      return await this.JS.fetch_cloud(args);
    }
  };

  Scratch.extensions.register(new fetch_cloud());
  
})(Scratch);
    
