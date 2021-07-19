<template>
  <div class="new-hello-total">
	<div class="total box">
	<div class="title has-text-centered">Contact Us</div>
  <hr>

<div class="field" style="float:left">
  <label class="label">First Name</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field" style="float:right;">
  <label class="label">Last Name</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<br><br><br><br><br>
<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field" style="float:left; margin-right:90px;">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Complaint</option>
        <option>Suggestion</option>
        <option>Compliment</option>
      </select>
    </div>
  </div>
</div>

<div class="field" style="float:left;">
  <label class="label">Date of Visit</label>
  <div class="control">
    <input type="date" v-model="mydate">
  </div>
</div>

<br><br><br><br>
<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to share my information for better analysis of feedback
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
	</div>
  </div>
</template>

<script>
export default {

  name: 'Contact',

  data () {
    return {
      mydate : null,
    }
  }
}
</script>

<style lang="css" scoped>
.new-hello-total {
  background-color:#580000;
  padding-bottom: 120px;
  padding-top: 30px;
}
.total {
	margin-left:600px;
	margin-right:450px;
	width:800px;
}
.title {
  height: 20px;
}
@media (max-width:1432px) and (min-width:1010px) {
  .total {
    margin-left:190px;
    margin-top:60px;
    margin-right:100px;
    width:800px;
  }
}
@media (max-width:1010px) and (min-width:910px) {
.total {
  margin-left:90px;
  margin-top:60px;
  margin-right:100px;
  width:800px;
  }

}
@media (max-width:910px) {
.total {
  margin-left:30px;
  margin-top:60px;
  margin-right:0px;
  width:650px;
  }
}
</style>