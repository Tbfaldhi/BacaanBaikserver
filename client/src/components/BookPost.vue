<template>  
<div id='blogPost'> 
    <h2>Add new Book Review</h2>
    <form>
        <label>Book Title: </label>
        <input type="text" v-model='title' required/>
        <label>Book Review:</label>
        <textarea v-model='review' ></textarea>
        <br>
        <button type="submit" class="btn btn-default" @click='addbook'>post</button>
    </form>
       
        
    
</div> 
</template>

<script>
  export default {
    data() {
        return{
            title:'',
            review:'',
        }    
    },
  methods:{
      addbook(){
        let token = localStorage.getItem('token')
        console.log(token);     
        var self = this
        axios.post('http://localhost:3000/bookpost',{title:this.title,content:this.review},{headers:token})
        .then(data=>{
          swal({
            title: "Success add",   
            icon: "success",
          });
        })
        .catch(err=>{
          console.log(err);
          
        })
       
      }
      
  },
 
  

  
  }
</script>

<style scoped>

#BlogPost*{
    box-sizing: border-box;
}

#BlogPost{
    margin: 20px auto;
    max-width:500px   
}

label{
    display:block;
    margin:20px 0 10px
}

input[type='text'],textarea{
    display:block;
    width: 100%;
    padding: 8px
}

preview{
    padding: 10px 20px;
    border: 1px dotted rgba(204, 204, 204, 0);
    margin:30px 0;
}

h3{
    margin-top: 10px
}

</style>