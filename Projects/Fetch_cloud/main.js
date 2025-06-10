((Scratch) => {
  const id = 'fetchcloud';
  const name = 'Fettch Scratch Cloud';
  
  const Infos = {
    id: id,
    name: name,
    
    color1: '#a89e32',
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

  class fetch_cloud {
    getInfo() {
      return Infos;
    }

    async fetch_cloud(args) {
      return `テストのreturn ${args}`
    }
  };

  Scratch.extensions.register(new fetch_cloud());
  
})(Scratch);
    
