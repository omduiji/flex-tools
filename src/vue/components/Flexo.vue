<template>
  <div class="flexWrapper">
  
    <div class="options">
  
  
  
  
  
      <label for="select">Flex-Direction</label>
  
      <select v-model="flDir">
  
                  <option v-for="direction in directions" :value="direction.value" > {{direction.text}} </option>
  
              </select>
  
  
  
  
  
      <label for="select">justify-Content</label>
  
      <select v-model="flJuCont">
  
                  <option v-for="content in contents" :value="content.value" > {{content.text}} </option>
  
              </select>
  
  
  
  
  
      <label for="select">Align_items</label>
  
      <select v-model="aliItem">
  
                  <option v-for="alItem in alItems" :value="alItem.value" > {{alItem.text}} </option>
  
              </select>
  
  
  
      <label for="select">Align-content</label>
  
      <select v-model=" flAlCont">
  
                  <option v-for="aContent in aContents" :value="aContent.value" > {{aContent.text}} </option>
  
              </select>
  
  
  
  
  
      <label for="select">flexWrap</label>
  
      <select v-model=" fleWrap">
  
                  <option v-for="flWrap in flWraps" :value="flWrap.value" > {{flWrap.text}} </option>
  
              </select>
  
  
  
  
  
      <button class="btn" @click="add">add</button>
  
      <button class="btn" @click="remove">remove</button>
  
  
  
  
  
  
  
      <div class="copy" v-if="copy">
  
        <textarea @click="copyFn" id="copyText">
  
  .container {
    flex-direction:{{flDir}}
    justify-content:{{flJuCont}}
    align-items: {{flAlCont}}
    align-content: {{aliItem}}
    flex-wrap:{{fleWrap}}
             }           
  
             </textarea>
  
  
  
      </div>
  
  
  
      <div class="copy1" v-if="copiedItem">
  
        <textarea @click="copyIt" id="itemcopy">
  
  .item {
    flex-grow:{{copiedItem.flGrow}}
    flex-shrink:{{copiedItem.flShr}}
    order: {{copiedItem.order}}
    flex-basis: {{copiedItem.flBas}}
    align-self: {{copiedItem.aSelf}}
        }
  
             </textarea>
  
      </div>
  
    </div>
  
  
  
    <div class="container" :style="{flexDirection: flDir, justifyContent:flJuCont, alignContent: flAlCont ,alignItems: aliItem, flexWrap: fleWrap }">
  
      <Block v-for="(item, index) in items" :key="index" @copied="copyItem">
  
        <h2>{{index + 1}}</h2>
  
      </Block>
  
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'flexo',

  data: () => ({
    items: [{}],

    count: 0,

    flDir: 'row',

    flJuCont: 'flex-start',

    flAlCont: 'flex-start',

    aliItem: 'flex-start',

    fleWrap: 'wrap',

    copy: true,

    copiedItem: false,

    options: [
      {
        text: 'flex',

        value: 'flex'
      },

      {
        text: 'inline-flex',

        value: 'inline-flex'
      }
    ],

    directions: [
      {
        text: 'row',

        value: 'row'
      },

      {
        text: 'row-reverse',

        value: 'row-reverse'
      },

      {
        text: 'column',

        value: 'column'
      },

      {
        text: 'column-reverse',

        value: 'column-reverse'
      }
    ],

    contents: [
      {
        text: 'flex-start',

        value: 'flex-start'
      },

      {
        text: 'flex-end',

        value: 'flex-end'
      },

      {
        text: 'space-between',

        value: 'space-between'
      },

      {
        text: 'space-around',

        value: 'space-around'
      },

      {
        text: 'center',

        value: 'center'
      }
    ],

    aContents: [
      {
        text: 'flex-start',

        value: 'flex-start'
      },

      {
        text: 'flex-end',

        value: 'flex-end'
      },

      {
        text: 'space-between',

        value: 'space-between'
      },

      {
        text: 'stretch',

        value: 'stretch'
      },

      {
        text: 'space-around',

        value: 'space-around'
      },

      {
        text: 'center',

        value: 'center'
      }
    ],

    flWraps: [
      {
        text: 'wrap',

        value: 'wrap'
      },

      {
        text: 'nowrap',

        value: 'nowrap'
      },

      {
        text: 'wrap-reverse',

        value: 'wrap-reverse'
      }
    ],

    alItems: [
      {
        text: 'flex-start',

        value: 'flex-start'
      },

      {
        text: 'flex-end',

        value: 'flex-end'
      },

      {
        text: 'stretch',

        value: 'stretch'
      },

      {
        text: 'baseline',

        value: 'baseline'
      },

      {
        text: 'center',

        value: 'center'
      }
    ]
  }),

  methods: {
    add() {
      this.items.push({});
    },

    remove() {
      this.items.pop({});
    },

    copyItem(item) {
      this.copiedItem = Object.assign({}, item);
    },

    copyFn() {
      var cpText = document.getElementById('copyText');

      cpText.select();

      document.execCommand('copy');
    },

    copyIt() {
      var ItText = document.getElementById('itemcopy');

      ItText.select();

      document.execCommand('copy');
    }
  }
};
</script>

<style scoped>
.container {
  width: 1300px;

  height: 1700px;

  background-color: #aad6cc;

  display: flex;
}

.flexWrapper {
  display: grid;

  grid-template-columns: 0.5fr 3fr;

  grid-gap: 1px;

  margin-top: 10px;

  height: auto;
}

.options {
  grid-column: 1;

  display: grid;

  display: grid;

  grid-template: repeat(21, 30px) / 1fr;

  grid-gap: 4px;

  background-color: #272e34;

  color: #f4f3f3;

  padding: 8px;
}

label {
  text-align: left;

  grid-column: 1;
}

select {
  width: 130px;

  height: 25px;

  border-radius: 10px;

  padding: 4px;
}

.copy1 {
  grid-row-end: 20;
}

.btn {
  width: 90%;

  margin-top: 6px;

  margin-left: auto;

  margin-right: auto;

  height: 30px;

  border-radius: 15px;

  text-align: center;

  color: #f4f3f3;

  font-weight: bolder;

  background: #70707070;

  outline: none;
}

h2 {
  grid-column: 1 / 4;

  text-align: center;

  margin-top: -1px;
}

#copyText,
#itemcopy {
  margin-top: 15px;

  width: 220px;

  height: 145px;

  max-height: 145px;

  max-width: 220px;

  background-color: rgba(113, 113, 113, 0);

  color: white;

  resize: none;

  border: none;

  overflow: auto;

  outline: none;
}

option:disabled {
  background: #ccc;

  width: 500px;

  padding: 5px;
}
btn:focus , select:focus {
  outline: none;

}
</style>
