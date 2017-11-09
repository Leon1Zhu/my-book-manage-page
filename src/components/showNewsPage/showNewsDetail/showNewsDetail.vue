<template>
    <div class="showNewsDetail">
      <div class="container_12">
        <div class="grid_12">
          <div v-html="content">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import './showNewsDetail.scss'
    export default{
        data(){
            return {
                content:null
            }
        },
        components: {

        },
        created(){
            var vm = this;
           vm.content = this.$route.query.content
        },
        mounted(){
        },
        methods: {}
    }
</script>
