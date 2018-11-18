<template>
  <div class="notes">
    <quillEditor v-model="content" :options="editorOption"></quillEditor>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'MyNotes',
  data () {
    return {
      content: '',
      editorOption: {
        // modules: {
        //   toolbar: '#toolbar'
        // },
        formats: {
          inline: {
            size: 'huge'
          }
        },
        placeholder: 'Compose an epic...',
        readOnly: true,
        theme: 'snow'
      }
    }
  },
  components: {
    quillEditor
  }
}
</script>

<style lang="less" scoped>
.notes {
  height: 100%;
}
</style>

<style>
  .quill-editor{
    height: 95%;
  }
</style>
