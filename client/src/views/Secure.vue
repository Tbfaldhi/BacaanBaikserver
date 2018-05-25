<template>
    <div id="secure">
        <h1>GOOD BOOK</h1>
        <p>
            Meet your next favorite book.
            <BookPost></BookPost>
            
        </p>
    </div>
</template>

<script>
 import BookPost from '@/components/BookPost'
    export default {
        name: 'Secure',
        components:{
             BookPost
        },
        data() {
            return {};
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>