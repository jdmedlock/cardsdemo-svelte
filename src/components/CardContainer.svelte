<script>
  import { cardSeq } from '../stores/cardSeq.js'
  import Card from './Card.svelte'

  export let team // Declare the prop we are expecting

  //console.log({ cardSeq })

  const getMemberId = (member) => {
    cardSeq.update(n => member.id)
    return $cardSeq
  }
</script>

{#each team as member}
  <Card seqNo={ getMemberId(member) } member={ member } />
{/each}
