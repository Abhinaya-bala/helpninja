Vue.component('task-list', {
    template: `
    <div>
    <task v-for="task in tasks">
    {{task.desc}}
    </task> 
    </div>`,

    data() {
        return {
            tasks: [
                { desc: "assignment", completed: true },
                { desc: "cleaning", completed: false },
                { desc: "clear inbox", completed: true },
                { desc: "make dinner", completed: false },
                { desc: "finish vue basic", completed: false }

            ]
        }
    }
});


Vue.component('task', {
    template: '<li><slot></slot></li>',
    // data() {
    //     return {
    //         message: "Vue Componets"
    //     }
    // }
});

Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            isVisible: true,
        }
    },

    template: `
    <div class="jumbotron" v-show='isVisible'>
  <h1 class="display-4">{{title}}</h1>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideJumbo">
          <span aria-hidden="true">&times;</span>
        </button>
  <p class="lead">{{body}}.</p>
  <hr class="my-4">
  <p>{{body}}</p>
</div>
    
    `,
    methods: {
        hideJumbo() {
            this.isVisible = false;
        }
    }

});

Vue.component('modal', {

    data() {
        return {
            isVisible: true,
        }
    },

    template: `
    
    <div class="modal" style="display:block" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-show='isVisible'>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideJumbo">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `,

    methods: {
        hideJumbo() {
            this.isVisible = false;
        }
    }
});


new Vue({
    el: '#root',

    data: {
        showModal: false,
    }
});