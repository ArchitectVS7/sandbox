(function(global){
  // Display
  function render(msg){
    if (typeof document !== 'undefined'){
      const box = document.getElementById('output');
      if (box){
        box.textContent += msg + '\n';
        return;
      }
    }
    console.log(msg);
  }

  // Parser
  function parseInput(input=''){ 
    const text = input.trim().toLowerCase();
    if(!text) return {type:'none'};
    const [verb,...rest] = text.split(/\s+/);
    const arg = rest.join(' ');
    switch(verb){
      case 'go':
      case 'move':
        return {type:'move', params:{direction:rest[0]}};
      case 'look':
      case 'inspect':
        return {type:'inspect', params:{target:arg||null}};
      case 'take':
      case 'pickup':
        return {type:'pickup', params:{item:arg}};
      case 'attack':
        return {type:'attack', params:{target:arg}};
      case 'quit':
        return {type:'quit'};
      default:
        return {type:'unknown', raw:input};
    }
  }

  // Actions
  const actions = {
    move(state, params={}){
      const dir = params.direction;
      const room = state.world.rooms?.[state.player.location];
      const next = room?.exits?.[dir];
      if(!next) return {state, message:"You can't go that way."};
      state.player.location = next;
      const desc = state.world.rooms[next]?.description || 'You arrive.';
      return {state, message:desc};
    },
    inspect(state, params={}){
      const target = params.target;
      const room = state.world.rooms?.[state.player.location];
      if(!target) return {state, message: room?.description || 'Nothing to see.'};
      const item = room?.items?.find(i=>i.name===target);
      if(item) return {state, message:item.description};
      return {state, message:"You don't see that."};
    },
    pickup(state, params={}){
      const itemName = params.item;
      const room = state.world.rooms?.[state.player.location];
      if(!itemName || !room) return {state, message:'Take what?'};
      const idx = room.items?.findIndex(i=>i.name===itemName);
      if(idx===-1 || idx===undefined) return {state,message:"You don't see that here."};
      const [item] = room.items.splice(idx,1);
      state.player.inventory = state.player.inventory || [];
      state.player.inventory.push(item);
      return {state, message:`You pick up the ${item.name}.`};
    },
    attack(state, params={}){
      const target = params.target;
      const room = state.world.rooms?.[state.player.location];
      const npcName = target || room?.npcs?.[0];
      if(!npcName) return {state,message:"There's nothing here to attack."};
      const npc = state.world.npcs?.[npcName];
      if(npc && npc.location===state.player.location){
        delete state.world.npcs[npcName];
        if(room && room.npcs) room.npcs = room.npcs.filter(n=>n!==npcName);
        return {state,message:`You vanquish ${npcName}!`};
      }
      return {state,message:`You swing at ${npcName}, but miss.`};
    },
    quit(state){ return {state,message:'Goodbye!',quit:true}; }
  };

  // Engine
  class GameEngine{
    constructor(options={}){
      this.state = options.state || {player:{location:'start'},world:{}};
      this.parseInput = options.parser || parseInput;
      this.actions = options.actions || actions;
      this.render = options.render || render;
      this.running = false;
    }
    handleInput(text){
      const action = this.parseInput(text);
      const handler = this.actions[action.type];
      if(!handler){ this.render(`I don't understand "${text}".`); return; }
      const result = handler(this.state, action.params||{});
      if(result && result.state) this.state = result.state;
      if(result && result.message) this.render(result.message);
      if(result && result.quit) this.running=false;
    }
  }

  global.TextAdventure = { GameEngine, parseInput, actions, render };
})(typeof window !== 'undefined' ? window : global);
