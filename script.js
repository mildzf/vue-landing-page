const app = Vue.createApp({
  data(){
    return {
      cards: [
        {
          id: 1,
          title: "Vue",
          link: {
            url: "https.//vuejs.org",
            src: "https://vuejs.org/images/logo.png"
          },
          text: "Complete component based user interface framework. Includes most core features. More common at startups than big companies."
        },
        {
          id: 2,
          title: "React",
          link: {
            url: "https://reactjs.org",
            src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          },
          text: "Lean, component based interface library. Developed by Facebook. Must add some features via packages."
        },
        { 
          id: 3,
          title: "Angular",
          link: {
            url:"https://angular.io",            
src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
          },
          text: "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps. Developed by Google."
        }
      ]
    }
  }
})

app.component("cards-component", {
  props: ["title", "link", "text"],
  template:`
<div style="width: 18rem;" class="card mx-2 hover-zoom">
 
  <div class="card-body">
<img :src="link.src" height=150 width=100 class="card-img-top" :alt="title">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{text}}</p>
    <a :href="link.url" class="btn btn-primary">{{ title }} website</a>
  </div>
</div>
`,
  data(){
    return {
      hover:false,
    }
  },
  methods:{
    mouseover(){
      
    }
  }
})

app.mount('#app')
