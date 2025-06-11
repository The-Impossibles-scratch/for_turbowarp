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
        text: 'GET | Project Id : [project_id] | Get Options : [get_options] | Limit : [limit] | Offset : [offset] | Download? : [download_options] | File Type : [filetype_options]',
        
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

          limit: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 1000
          },

          offset: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 0
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

    async get_cloud_logs(args) {
      const url = `https://clouddata.scratch.mit.edu/logs?projectid=${args.project_id}&limit=${args.limit}&offset=${args.offset}`;
      
      try {
        const fetch_res = await fetch(url);
        const cloud_log_json = await fetch_res.json();
        
        if (cloud_log_json.length == 0) return 'There seems to be no Cloud Data activity on this project';
        
        return JSON.stringify(cloud_log_json)
      } catch (e) {
        return `Error : ${e}`
      }
    };

    async get_cloud_var(args) {
      const ulr = ``;
      
      return
    }

    async get_all_cloud_vars(args) {
      const ulr = ``;
      
      return
    }

    async fetch_cloud(args) {
      if (args.get_options === 'Logs') {
        return await this.get_cloud_logs(args)
      } else if (args.get_options === 'Var') {
        return await this.get_cloud_var(args)
      } else if (args.get_options === 'All Vars') {
        return await this.get_all_cloud_vars(args)
      }
    };
  };

  Scratch.extensions.register(new fetch_cloud());
  
})(Scratch);
