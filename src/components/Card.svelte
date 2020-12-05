<script>
  import { cardSeq } from '../stores/cardSeq.js'

  export let seqNo
  export let member

  console.log({ member })
</script>

<div>
  <div class="band"></div>
  <p class="content">{ seqNo }. { member.firstName }, { member.lastName }</p>
</div>

<style>
  .band { 
    @apply bg-gray-400 py-1 w-32;
  }

  .content { 
    background: white;
  }
</style>