<template>
    <div>
        <h1>{{title + '!!'}}</h1>
        <h2 v-bind:name="'sample'" v-text="title" />
        <p v-html="tagList" /> <!--v-html은 사용에 신중해야함 -->
        <p v-text="tagList" />
        <hr><br>
        <input type="text" v-model="valueModel"><br>
        <p>{{typeof valueModel}}</p>
        <input type="number" v-model.lazy="numberModel"><br><!--버전 3부터 .number 안붙여도 숫자로 인식 -->
        <p>{{(10 + numberModel) + " " +typeof numberModel}}</p><!--.lazy 붙이면 enter같은 실행시켜야 입력 -->
        <select v-model="selectModel"><br>
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="53">대구</option>
        </select>
        <p>{{selectModel}}</p>
        <textarea v-model="textModel"><br>
        </textarea>
        <hr>
        <input type="checkbox" v-model="chData" true-value ="눌림" false-value="풀림"><br>
        <p>{{chData}}</p>
        <label><input type="checkbox" value = "서울" v-model="chData"></label>
        <label><input type="checkbox" value = "부산" v-model="chData"></label>
        <label><input type="checkbox" value = "대구" v-model="chData"></label>
        <p>{{city}}</p>
        <input type="radio" v-bind:value = radioValue>
    </div>
</template>
<script>
    export default { 
        data(){
            return {
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ...</strong>',
                valueModel : 'hi',
                numberModel : 0,
                selectModel : '53',
                textModel : 'Hmm....',
                chData : '',
                city : ''
            }
        }
    }
</script>
